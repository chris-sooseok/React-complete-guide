import {useRef, useState} from "react";

/* ! notes
 ? form validation using ref
 ? when form submitted, the validation takes place
 ? since when using ref, we have to reset the value imperatively, which is discouraged
 ? Therefore, the strategy used in StateLogin which uses states are encouraged
*/

export default function Login() {

    const [ emailIsInvalid, setEmailIsInvalid ] = useState(false);
    const [ passwordIsInvalid, setPasswordIsInvalid ] = useState(false);
    const email = useRef();
    const password = useRef();

    function handleSubmit(event) {
        // ? prevent browser default behavior that submits the form
        event.preventDefault();

        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        const emailIsValid = enteredEmail.includes('@');
        const passwordIsValid = enteredPassword.length >= 6;

        if (!emailIsValid) {
            setEmailIsInvalid(true);
            return;
        }

        if (!passwordIsValid) {
            setPasswordIsInvalid(true);
            return;
        }

        setEmailIsInvalid(false);
        setPasswordIsInvalid(false);

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
