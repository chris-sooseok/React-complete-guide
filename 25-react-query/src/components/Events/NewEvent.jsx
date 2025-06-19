import {Link, useNavigate} from 'react-router-dom';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';

// ? useQuery can also be used to send POST request since we customize the function
// ? but useMutation is optimized for POST request
// ? useQuery instantly sends request when component is rendered
// ? but useMutation is controled as to when to send request
import {useMutation} from "@tanstack/react-query";
import {createNewEvent} from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { queryClient } from "../../util/http.js";

export default function NewEvent() {
    const navigate = useNavigate();

    // ? key is unneccesary since POST isn't really meant for caching
    // ? mutate is function object which you can use to send request on your need
    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: createNewEvent,
        // ? only when request suceeds, this function is called
        onSuccess: async () => {
            // ? invalidate all queries that contains 'events' key
            await queryClient.invalidateQueries({
                queryKey: ['events']
            });
            navigate('/events');
        }
    })

    function handleSubmit(formData) {
        mutate({event: formData});
    }

    return (
        <Modal onClose={() => navigate('../')}>
            <EventForm onSubmit={handleSubmit}>
                {isPending && 'Submitting...'}
                {!isPending && (
                    <>
                        <Link to="../" className="button-text">
                            Cancel
                        </Link>
                        <button type="submit" className="button">
                            Create
                        </button>
                    </>
                )}
            </EventForm>
            {isError &&
                <ErrorBlock title="Failed to create event" message={error.info?.message || "Failed event creation"}/>}
        </Modal>
    );
}
