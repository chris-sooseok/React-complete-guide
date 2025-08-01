import Input from "./Input.jsx";
import {isEmail, isNotEmpty, hasMinLength} from "../util/validation.js";
import {useInput} from "../hooks/useInput.js";

/* ! notes
 ? form validation actively using states
 ? as user types, useState actively validates user inputs with certain conditions
 ? input forms, validation logics, and states are all outsourced to achieve adaptability and efficiency
 */

export default function Login() {

    // ! the custom hook becomes part of StateLogin's component lifecycle
    // ! which means useState in useInput belong to StateLogin
    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBLur,
        hasError: emailHasError
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError
    } = useInput('', (value) => hasMinLength(value, 6) && isNotEmpty(value));

    function handleSubmit(event) {
        // prevent browser default behavior that submits the form
        event.preventDefault();

        if (emailHasError || passwordHasError) {
            return;
        }

        console.log(emailValue, passwordValue);
    }

    return (<form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="control-row">
            <Input label="Email" id="email" type="email" name="email"
                   onBlur={() => handleEmailBLur('email')}
                   onChange={(event) => handleEmailChange(event.target.value)}
                   value={emailValue}
                   error={emailHasError && 'Please enter a valid email'}
            ></Input>

            <Input label="Password" id="password" type="password" name="password"
                   onBlur={() => handlePasswordBlur('password')}
                   onChange={(event) => handlePasswordChange(event.target.value)}
                   value={passwordValue}
                   error={passwordHasError && 'Please enter a password'}
            ></Input>
        </div>

        <p className="form-actions">
            <button className="button button-flat">Reset</button>
            <button className="button">Login</button>
        </p>
    </form>);
}
