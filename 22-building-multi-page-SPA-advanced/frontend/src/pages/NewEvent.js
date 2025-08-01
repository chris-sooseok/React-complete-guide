import EventForm from '../components/EventForm';

function NewEventPage() {
    return <EventForm method="post"/>;
}

export default NewEventPage;

//  ! from EventForm, Form from react router dom has been used which doesn't instantly send request to backend, but pass the data to action function below
// export async function action({ request, params }) {
//     const data = await request.formData();
//
//     const eventData = {
//         title: data.get('title'),
//         image: data.get('image'),
//         date: data.get('date'),
//         description: data.get('description'),
//     };
//
//     const response = await fetch('http://localhost:8080/events', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(eventData),
//     });
//
//     if (response.status === 422) {
//         return response;
//     }
//
//     if (!response.ok) {
//         throw new Response(JSON.stringify({ message: 'could not save event' }), {
//             status: 500,
//         });
//     }
//
//     return redirect('/events');
// }
