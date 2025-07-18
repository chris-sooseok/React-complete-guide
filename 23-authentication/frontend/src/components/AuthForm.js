import {Form, Link, useSearchParams, useActionData, useNavigation } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
    const [searchParams, setSearchParams] = useSearchParams();
    const isLoginMode = searchParams.get('mode') === 'login';
    // ? useActionData returns data that was returned by the submission of this form
    const data = useActionData();
    // ? useNavigation returns values that indicate current states of form submitted
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <>
            <Form method="post" className={classes.form}>
                <h1>{isLoginMode ? 'Log in' : 'Create a new user'}</h1>
                {data && data.errors && <ul>
                    {Object.values(data.errors).map((err) => (<li key={err}>{err}</li>))}
                </ul>}
                {data && data.message && <p>{data.message}</p>}
                <p>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" required/>
                </p>
                <p>
                    <label htmlFor="image">Password</label>
                    <input id="password" type="password" name="password" required/>
                </p>
                <div className={classes.actions}>
                    <Link to={`?mode=${isLoginMode ? 'signup' : 'login'}`}>
                        {isLoginMode ? 'Create new user' : 'Login'}
                    </Link>
                    <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save '}</button>
                </div>
            </Form>
        </>
    );
}

export default AuthForm;
