// our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import {useRouter} from "next/router";

function NewMeetupPage() {

    const router = useRouter()

    async function addMeetupHandler(enteredMeetupData) {
        // ! call API request based on folder path that resides in server-side
        const res = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        router.push('/');
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;