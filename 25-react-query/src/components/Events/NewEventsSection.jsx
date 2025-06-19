import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import {useQuery} from "@tanstack/react-query";
import {fetchEvents} from '../../util/http.js'

export default function NewEventsSection() {
    // ! also have to wrap Provider to allow access
    // ? send http request which you have to implement and assign
    // ? Then, tanstack manages data, errors, caching & many more
    // ? React Query caches data based on given key when fetched data
    // ? request is still made to check if update is needed
    const {data, isPending, isError, error} = useQuery({
        // ? key used to help caching
        queryKey: ['events', {max: 3}],
        // ! useQuery by default sends default data to query function
        // ? queryFn gets queryKey as input
        queryFn: ({signal, queryKey}) => fetchEvents({signal, ...queryKey[1]}),
        // * staleTime controls behind-the-scene request term
        staleTime: 5000,
        // * gcTime control cache time
        // gcTime: 5000,
    });

    let content;

    if (isPending) {
        content = <LoadingIndicator/>;
    }

    if (isError) {
        content = (
            <ErrorBlock
                title="An error occurred"
                message={error.info?.message || 'Failed to fetch events'}/>
        );
    }

    if (data) {
        content = (
            <ul className="events-list">
                {data.map((event) => (
                    <li key={event.id}>
                        <EventItem event={event}/>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <section className="content-section" id="new-events-section">
            <header>
                <h2>Recently added events</h2>
            </header>
            {content}
        </section>
    );
}
