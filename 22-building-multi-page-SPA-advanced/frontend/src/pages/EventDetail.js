import { Suspense } from 'react';
import { useRouteLoaderData, redirect, Await } from 'react-router-dom';

import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

function EventDetailPage() {

    console.log("EventDetailPage");

    const { event, events } = useRouteLoaderData('event-detail');

    return (
        <>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={event}>
                    {(loadedEvent) => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={events}>
                    {(loadedEvents) => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>
        </>
    );
}

export default EventDetailPage;

async function loadEvent(id) {
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not fetch details for selected event.' }), {
            status: 500,
        });
    } else {
        const resData = await response.json();
        return resData.event;
    }
}

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events.' };
        // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
        //   status: 500,
        // });
        // ? throwing error will trigger the closest errorElement
        throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
            status: 500,
        });
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export async function eventDetailLoader({ request, params }) {
    const id = params.eventId;
    return {
        // ! await here ensures that the data is loaded before rendering the page
        event: await loadEvent(id),
        events: loadEvents(),
    };
}

// * action function receives params and request object that is used when form is submitted
export async function deleteEventAction({ params, request }) {
    const eventId = params.eventId;
    // ! request.method contains delete in this case
    // * if needed, you can define various actions for each method
    if (request.method === 'DELETE') {
        const response = await fetch('http://localhost:8080/events/' + eventId, {
            method: request.method,
        });
        if (!response.ok) {
            throw new Response(JSON.stringify({ message: 'Could not delete event.' }), {
                status: 500,
            });
        }
    }

    return redirect('/events');
}
