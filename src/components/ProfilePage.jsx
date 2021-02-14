import React, {useContext} from "react";
import {UserContext} from "../providers/UserProvider";
import {auth} from "../firebase";
import ButtonAppBar from "./ButtonAppBar";
import CenteredGrid from "./CenteredGrid";

export default function ProfilePage() {
    const user = useContext(UserContext);
    const {displayName, email} = user;
    return (
        <div>
            <ButtonAppBar />
            <h2>{displayName}</h2>
            <h3>{email}</h3>
        </div>
    );
}