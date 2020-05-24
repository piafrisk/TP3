import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../contexts/FirebaseContext';

const ResetPassword = () => {

    const firebase = useContext(FirebaseContext);
    const [formState, setFormState] = useState({ email: '' });
    const [message, setMessage] = useState('');

    let user = firebase.auth()

    const onSubmit = e => {

        e.preventDefault();

        user.sendPasswordResetEmail(email)
            .then(() => setMessage('Email has been sent'))
            .catch(error => setMessage(`Failed: ${error.message}`))
    }

    const onChange = e => setFormState({ formState, [e.target.name]: e.target.value });

    const { email } = formState;
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">email
                    <input type="email" name="email" value={email} onChange={onChange} />
                </label>
                <button type='submit'>Reset password</button>
            </form>
            <p>{message}</p>
        </div>
    )

}

export default ResetPassword;
