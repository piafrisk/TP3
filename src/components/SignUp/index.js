import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../contexts/FirebaseContext';

const SignUpForm = () => {
    const firebase = useContext(FirebaseContext);

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        setFormState({ email: '', password: '' })

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => setMessage('Success!'))
            .catch(error => setMessage(`Failed: ${error.message}`))
    }


    const onChange = e => setFormState({ ...formState, [e.target.name]: e.target.value });

    const onGoogleSignUp = e => {

        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithRedirect(provider)
            .catch((error) => {
                setMessage(`Failed: ${error.message}`)
            })
    };

    const { email, password } = formState;

    const formValidation = email && password;

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">email
                    <input type="email" name="email" value={email} onChange={onChange} />
                </label>
                <label htmlFor="password">password
                    <input type="password" name="password" value={password} onChange={onChange} />
                </label>
                <button type="submit" disabled={!formValidation}>Sign up</button>
            </form>
            <button onClick={onGoogleSignUp}>Sign up with Google</button>
            <p>{message}</p>
        </div>
    )
}

export default SignUpForm;