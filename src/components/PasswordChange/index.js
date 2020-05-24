import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../contexts/FirebaseContext';

const PasswordChangeForm = () => {

    const firebase = useContext(FirebaseContext);

    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [error, setError] = useState(null);

    const onSubmit = event => {
        event.preventDefault();

        firebase.doPasswordUpdate(passwordOne)
            .then(() => {
                setPasswordOne("");
                setPasswordTwo("");
                setError(null);
            })
            .catch(error => {
                setError(error);
            });
    };

    const onChange = event => {

        const { name, value } = event.target;

        if (name === 'passwordOne') {
            setPasswordOne(value);
            return;
        }

        if (name === 'passwordTwo') {
            setPasswordTwo(value);
            return;
        }
    };

    const isInvalid = (passwordOne.length && passwordTwo.length) > 6 && passwordOne !== passwordTwo;

    return (
        <form onSubmit={onSubmit}>
            <h1>Reset Password</h1>
            <h3>Enter a new password to change it.</h3>
            <label htmlFor="email">New Password</label>
            <input
                name="passwordOne"
                value={passwordOne}
                onChange={onChange}
                type="password"
                placeholder="New Password"
            ></input>
            <label htmlFor="email">Confirm New Password</label>
            <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={onChange}
                type="password"
                placeholder="Confirm New Password"
            ></input>
            <button type="submit" disabled={!isInvalid} >
                Reset My Password
            </button>
            {error && <p>{error.message}</p>}
        </form>
    )
}

export default PasswordChangeForm;