import React, {useContext} from "react";
import {UserContext} from "../providers/UserProvider";
import {auth} from "../firebase";

export default function ProfilePage() {
    const user = useContext(UserContext);
    const {photoURL, displayName, email} = user;
    return (
        <div>
            <h2>{displayName}</h2>
            <h3>{email}</h3>
            <button onClick={() => {auth.signOut()}}>Sign Out</button>
        </div>
    );
}