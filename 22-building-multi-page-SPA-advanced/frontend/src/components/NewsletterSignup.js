import {useFetcher} from "react-router-dom";

import classes from './NewsletterSignup.module.css';
import {useEffect} from "react";

function NewsletterSignup() {
    // ! with fetcher, we don't transition to Form route to submit the form
    const fetcher = useFetcher();
    // ! fetcher also provides access to data and state after submission
    const { data, state } = fetcher;

    useEffect(() => {
        if (state === 'idle' && data && data.message) {
            window.alert(data.message);
        }
    }, [data, state])

    // ? fetcher.Form can submit to any route action
    return (
        <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
            />
            <button>Sign up</button>
        </fetcher.Form>
    );
}

export default NewsletterSignup;
