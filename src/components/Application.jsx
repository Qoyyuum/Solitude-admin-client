import React from "react";
import {Router} from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";

export default function Application () {
    const user = null;
    return (
        user ? <ProfilePage /> : <Router>
            <SignUp path = "signUp" />
            <SignIn path="/" />
            <PasswordReset path ="passwordReset" />
        </Router>
    );
}