import {Link, Outlet, useNavigate, useParams} from 'react-router-dom';
import Header from '../Header.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {deleteEvent, fetchEvent, queryClient} from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import {useState} from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {

    const [isDeleting, setIsDeleting] = useState(false);

    const params = useParams();
    const navigate = useNavigate();

    // * mutate contains the function action
    const {mutate, isPending: isPendingDelete, isError: isErrorDeleting, error: deleteError} = useMutation({
        mutationFn: deleteEvent,
        // * invalidateQueries marks events stale
        // * pages using events data will refresh
        // * but with using refetchType none, the refresh happens only when events data is needed
        // ? since you are already navigating to events page, no need to refetch events immediately
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['events'], refetchType: 'none'
            });
            navigate('/events');
        }
    })

    function handleStartDelete() {
        setIsDeleting(true);
    }

    function handleStopDelete() {
        setIsDeleting(false);
    }

    function handleDelete() {
        mutate({id: params.id})
    }

    const {data, isPending, isError, error} = useQuery({
        queryKey: ['events', params.id], queryFn: ({signal}) => fetchEvent({signal, id: params.id})
    })

    let content;

    if (isPending) {
        content = (<div id="event-details-content" className="center">
            <p>Fetching event data...</p>
        </div>);
    }

    if (isError) {
        content = (<div id="event-details-content" className="center">
            <ErrorBlock title="Failed to load event" message={error.info?.message}/>
        </div>);
    }

    if (data) {
        const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
            day: 'numeric', month: 'short', year: 'numeric',
        });

        content = (<>
            <header>
                <h1>{data.title}</h1>
                <nav>
                    <button onClick={handleStartDelete}>Delete</button>
                    <Link to="edit">Edit</Link>
                </nav>
            </header>
            <div id="event-details-content">
                <img src={`http://localhost:3000/${data.image}`} alt={data.title}/>
                <div id="event-details-info">
                    <div>
                        <p id="event-details-location">{data.location}</p>
                        <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate} @ {data.time}</time>
                    </div>
                    <p id="event-details-description">{data.description}</p>
                </div>
            </div>
        </>);
    }


    return (<>
        {isDeleting && (<Modal onClose={handleStopDelete}>
            <h2>Are you sure?</h2>
            <p>Deleting event</p>
            <div className="form-actions">
                {isPendingDelete && <p>Deleting...</p>}
                {!isPendingDelete && (
                    <>
                        <button onClick={handleStopDelete} className="button-text">Cancel</button>
                        <button onClick={handleDelete} className="button">Delete</button>
                    </>
                )}

            </div>
            {isErrorDeleting && <ErrorBlock title="Failed to delete"></ErrorBlock>}
        </Modal>)}
        <Header>
            <Link to="/events" className="nav-item">
                View all Events
            </Link>
        </Header>
        {/* Outlet doesn't render anything here */}
        <Outlet/>
        <article id="event-details">
            {content}
        </article>
    </>);
}
