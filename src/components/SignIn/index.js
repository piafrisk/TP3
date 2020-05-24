import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../contexts/FirebaseContext';


const SignIn = () => {


    const firebase = useContext(FirebaseContext);
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        setFormState({ email: '', password: '' })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => setMessage('Success!'))
            .catch(error => setMessage(`Failed: ${error.message}`))
    }

    const onChange = e => setFormState({ ...formState, [e.target.name]: e.target.value });

    const onGoogleSignIn = e => {

        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithRedirect(provider).catch((error) => {
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
                <button type="submit" disabled={!formValidation}>Sign In</button>
            </form>
            <button onClick={onGoogleSignIn}>Sign in with Google</button>
            <p>{message}</p>
        </div>

    )

}

export default SignIn;