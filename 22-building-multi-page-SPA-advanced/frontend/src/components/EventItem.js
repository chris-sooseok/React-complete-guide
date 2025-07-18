import classes from './EventItem.module.css';
import {Link, useSubmit} from 'react-router-dom';


function EventItem({event}) {

    // ? Form object could be used instead, but this way displaying confirmation window is impossible
    // ? Also, useSubmit allows programatically submit the form
    // * useSubmit is coupled with the most closest action function
    // * you can explicitly specify which actions should be coupled with
    const submit = useSubmit();

    function startDeleteHandler() {
        const proceed = window.confirm('Are you sure you want to delete this event?');
        if (proceed) {
            // ? delete the event
            // submit(null, {method: 'delete'})
            // ? explicitly target the current route
            submit(null, {method: 'delete', action: '.'});
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
