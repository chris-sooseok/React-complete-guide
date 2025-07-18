import {useLoaderData, Await} from 'react-router-dom';
import EventsList from '../components/EventsList';
import {Suspense} from "react";

function EventsPage() {

    console.log("EventsPage");

    const {events} = useLoaderData();

    // ? Suspense renders a waiting status component
    // ? meanwhile Await waits for data to arrive and render component with data
    return (
        <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>
    );
}

export default EventsPage;

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return {isError: true, message: "No such event"};
        // ? throwing error will trigger the closest errorElement
        throw new Response(JSON.stringify({message: 'could not fetch the data'}), {status: 500});
        // return json({message: 'could not fetch the data'}, {status: 500});
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

// ? loader is triggered before component is rendered
export function loader() {
    return {
        events: loadEvents()
    }
}