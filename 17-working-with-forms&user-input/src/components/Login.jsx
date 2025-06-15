import {useRef, useState} from "react";

export default function Login() {

    const [ emailIsInvalid, setEmailIsInvalid ] = useState(false);
    const email = useRef();
    const password = useRef();

    function handleSubmit(event) {
        // prevent browser default behavior that submits the form
        event.preventDefault();

        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        const emailIsValid = enteredEmail.includes('@');

        if (!emailIsValid) {
            setEmailIsInvalid(true);
            return;
        }

        setEmailIsInvalid(false);


        // ! since this is discouraged, the approach used in Signup component is recommended
        email.current.value = '';
        password.current.value = '';
    }

    return (<form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="control-row">
            <div className="control no-margin">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" ref={email} />
                <div className="control-error">
                    {emailIsInvalid && <p>Please enter valid email</p>}
                </div>
            </div>

            <div className="control no-margin">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" ref={password} />
            </div>
        </div>

        <p className="form-actions">
            <button className="button button-flat">Reset</button>
            <button className="button">Login</button>
        </p>
    </form>);
}
