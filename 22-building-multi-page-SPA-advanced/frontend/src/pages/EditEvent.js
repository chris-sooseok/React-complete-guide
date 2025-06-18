import EventForm from "../components/EventForm";
import {useLoaderData, useRouteLoaderData} from "react-router-dom";

export default function EditEventPage () {

    const data = useRouteLoaderData('event-detail');
    const event = data.event;

    return (
        <EventForm method="patch" event={event} />
    )
}