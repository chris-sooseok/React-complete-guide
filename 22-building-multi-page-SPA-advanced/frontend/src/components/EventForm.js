import {Form, useNavigate, useNavigation, useActionData, redirect} from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({method, event}) {
    // ? returning data of the closest action that was submitted
    const data = useActionData();
    const navigate = useNavigate();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    function cancelHandler() {
        navigate('..');
    }

    // ! once the form is submitted, Router intercepts and calls the action function based on the path
    // ? regular form submits the data to the current route's action and its data is available through useActionData()
    return (
        <Form method={method} className={classes.form}>
            {data && data.errors && <ul>
                {Object.values(data.errors).map((error, index) => <li key={error}>{error}</li>)})
            </ul>}
            <p>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    required
                    defaultValue={event ? event.title : ''}
                />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    type="url"
                    name="image"
                    required
                    defaultValue={event ? event.image : ''}
                />
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    required
                    defaultValue={event ? event.date : ''}
                />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="5"
                    required
                    defaultValue={event ? event.description : ''}
                />
            </p>
            <div className={classes.actions}>
                <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
                    Cancel
                </button>
                <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
            </div>
        </Form>
    );
}

export default EventForm;

export async function manipulateEventAction({ request, params }) {
    const method = request.method;
    const data = await request.formData();

    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    };

    let url = 'http://localhost:8080/events';

    if (method === 'PATCH') {
        const eventId = params.eventId;
        url = url + `/${eventId}`;
    }

    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    });

    if (response.status === 422) {
        // ! this becomes available via useActionData()
        return response;
    }

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'could not save event' }), {
            status: 500,
        });
    }

    return redirect('/events');
}