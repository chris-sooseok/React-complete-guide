import {useRef, useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {fetchEvents} from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";

export default function FindEventSection() {
    // ? allow direct access while changes don't trigger re-rendering
    const searchElement = useRef();
    // ? setting initial value to undefined to distinguish behavior between the initial webpage load and empty string search
    // ! useState is used to re-render this specific component when form is submitted
    const [searchTerm, setSearchTerm] = useState();

    // ! as searchElement value changes, it won't trigger useQuery again
    // ! with isPending, when query is disabled, it set the query to pending state, waiting for the query to be enabled
    // ! with isLoading, when query is disabled, it set the query disabled too
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['events', {searchTerm}],
        queryFn: ({signal, queryKey}) => fetchEvents({signal, ...queryKey[1]}),
        enabled: searchTerm !== undefined,
    })

    function handleSubmit(event) {
        event.preventDefault();
        setSearchTerm(searchElement.current.value);
    }

    let content = <p>Please enter a search term</p>;

    if (isLoading) {
        content = <LoadingIndicator />
    }

    if (isError) {
        content = <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to fetch events'} />
    }

    if (data) {
        content = <ul>
            {data.map(event => (<li key={event.id}><EventItem event={event}/></li>))}
        </ul>
    }

    return (
        <section className="content-section" id="all-events-section">
            <header>
                <h2>Find your next event!</h2>
                <form onSubmit={handleSubmit} id="search-form">
                    <input
                        type="search"
                        placeholder="Search events"
                        ref={searchElement}
                    />
                    <button>Search</button>
                </form>
            </header>
            {content}
        </section>
    );
}
