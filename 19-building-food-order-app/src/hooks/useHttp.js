import {useState, useEffect, useCallback} from "react";

async function sendHttpRequest(url, config){
    const response = await fetch(url, config);
    const resData = await response.json();
    if (!response.ok) {
        throw new Error(resData.message);
    }

    return resData;
}


// ! custom hook gets embedded into the component that imports it
// ! Therefore, the function doesn't get recreated unless its dependency changes
export default function useHttp(url, config, initialData) {
    const [ data, setData ] = useState(initialData);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState();

    function clearData() {
        setData(initialData);
    }

    // ! useCallback to prevent loop since it is used as dependency below
    const sendRequest = useCallback(async function sendRequest(data) {
        setIsLoading(true);
        try {
            // ? without await async function returns Promise object
            const resData = await sendHttpRequest(url, {...config, body: data})
            setData(resData);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, [url, config]);

    useEffect(() => {
        if ((config && (config.method === "GET" || !config.method)) || !config) {
            sendRequest();
        }
    }, [sendRequest, config]);

    return {
        data,
        isLoading,
        error,
        sendRequest,
        clearData,
    }

}