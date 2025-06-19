import {Link, redirect, useLoaderData, useNavigate, useParams, useSubmit, useNavigation} from 'react-router-dom';


import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {fetchEvent, updateEvent, queryClient} from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
    const navigate = useNavigate();
    const params = useParams();

    const submit = useSubmit();
    const {state} = useNavigation();

    // * this code is still kept to be used for caching
    // * also used for updating when tab switches
    const {data, isPending, isError, error} = useQuery({
        queryKey: ['events', params.id],
        queryFn: ({signal}) => fetchEvent({signal, id: params.id}),
        // since loader fetches initial data, prevent another request
        staleTime: 10000
    })

    // * substitued with React Router approach
    // const {mutate} = useMutation({
    //     mutationFn: updateEvent,
    //     // ? used to optimally update update result
    //     // ? this is enabled because React Query propagates data passed to mutate to onMutate
    //     onMutate: async (data) => {
    //         const newEvent = data.event;
    //         // ? canceling useQuery on given key to prevent fetching old data for optimal updating
    //         await queryClient.cancelQueries({queryKey: ['events', params.id]});
    //
    //         const prevEvnet = queryClient.getQueryData(['events', params.id]);
    //         queryClient.setQueriesData(
    //             ['events', params.id],
    //             newEvent
    //         );
    //
    //         // ? this return is what is passed to context on error
    //         return {prevEvnet}
    //     },
    //     onError: (err, data, context) => {
    //         queryClient.setQueryData(
    //             ['events', params.id],
    //             context.prevEvnet);
    //     },
    //     // ? no matter whether succeed or fail, this is handled
    //     onSettled: async() => {
    //         await queryClient.invalidateQueries(['events', params.id]);
    //     }
    // })

    function handleSubmit(formData) {
        // mutate({id: params.id, event: formData});
        // navigate('../');

        submit(formData, {method: 'PUT'});
    }

    function handleClose() {
        navigate('../');
    }

    let content;

    // if (isPending) {
    //     content = (
    //         <div className="center">
    //             <LoadingIndicator/>
    //         </div>
    //     )
    // }
    //
    // if (isError) {
    //     content = (<>
    //             <ErrorBlock title="Failed to load event"/>
    //             <div className="form-actions">
    //                 <Link to="../" className="button">
    //                     Okay
    //                 </Link>
    //             </div>
    //         </>
    //     )
    // }

    if (data) {
        content = <EventForm inputData={data} onSubmit={handleSubmit}>
            {state === 'submitting' ? (<p>Sending Data...</p>) :
                <>
                    <Link to="../" className="button-text">
                        Cancel
                    </Link>
                    <button type="submit" className="button">
                        Update
                    </button>
                </>}
        </EventForm>

        return (
            <Modal onClose={handleClose}>
                {content}
            </Modal>
        );
    }
}

    export async function loader({params}) {
        // ? even without useQuery queryClient has fetch function for which can be used to fetch data
        return queryClient.fetchQuery({
            queryKey: ['events', params.id],
            queryFn: ({signal}) => fetchEvent({signal, id: params.id}),
        });
    }

    export async function action({request, params}) {
        // provided by React Router to get data to submit
        const formData = await request.formData();
        const updatedEventData = Object.fromEntries(formData);
        await updateEvent({id: params.id, event: updatedEventData});
        await queryClient.invalidateQueries(['events']);
        return redirect('../');
    }