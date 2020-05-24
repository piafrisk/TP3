import React from 'react';
import { Route } from 'react-router-dom';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import LandingPage from '../Landing';
import ResetPassword from '../PasswordForget/resetPassword.js';
import SignOut from '../SignOut';

const NavPaths = () => {

    return (
        <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/ResetPassword" component={ResetPassword} />
            <Route path="/SignOut" component={SignOut} />
        </div>
    );
}


export default NavPaths;