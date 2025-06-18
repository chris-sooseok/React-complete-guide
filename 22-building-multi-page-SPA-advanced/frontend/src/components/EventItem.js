import classes from './EventItem.module.css';
import {Link, useSubmit} from 'react-router-dom';
import {useLoaderData} from 'react-router-dom';


function EventItem({event}) {

    // ? Form object could be used instead, but this way displaying confirmation window is impossible
    // ? if want to programmatically handle the form, use this way
    const submit = useSubmit();

    function startDeleteHandler() {
        // ! window displays a window in which users can choose yes or no
        const proceed = window.confirm('Are you sure you want to delete this event?');

        if (proceed) {
            // target taks data to be submitted
            // ? delete the event
            submit(null, {method: 'delete'})
        }

    }

    return (
        <article className={classes.event}>
            <img src={event.image} alt={event.title}/>
            <h1>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>
            <menu className={classes.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={startDeleteHandler}>Delete</button>
            </menu>
        </article>
    );
}

export default EventItem;
