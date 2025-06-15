import Input from "./Input.jsx";
import {isEmail, isNotEmpty, hasMinLength} from "../util/validation.js";
import {useInput} from "../hooks/useInput.js";

export default function Login() {

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

    // function handleInputChange(identifier, value) {
    //     setEnteredValues(prevValues => ({
    //         ...prevValues, [identifier]: value,
    //     }))
    //     setDidEdit(prevEdit => ({
    //         ...prevEdit,
    //         [identifier]: false
    //     }));
    // }
    //
    // function handleInputBlur(identifier) {
    //     setDidEdit(prevEdit => ({
    //         ...prevEdit,
    //         [identifier]: true
    //     }));
    // }

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
