
// ! custom hooks should also start with "use" prefix to enforce the rules of hooks
import {useEffect, useState } from "react";
import {fetchUserPlaces} from "../http.js";

function useFetch(fetchFn, initialValue) {
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    const [ fetchedData, setFetchedData] = useState(initialValue);

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchFn();
                setFetchedData(data);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data.' });
            }
            setIsFetching(false);
        }

        fetchData();
    }, [fetchFn]);

    return {
        isFetching,
        fetchedData,
        setFetchedData,
        error
    }
}

export default useFetch;