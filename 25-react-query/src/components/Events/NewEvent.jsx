import {Link, useNavigate} from 'react-router-dom';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useMutation} from "@tanstack/react-query";
import {createNewEvent} from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { queryClient } from "../../util/http.js";

export default function NewEvent() {
    const navigate = useNavigate();

    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: createNewEvent,
        onSuccess: async () => {
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
