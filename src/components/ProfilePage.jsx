import React, {useContext} from "react";
import {UserContext} from "../providers/UserProvider";
import Container from "@material-ui/core/Container";
import ButtonAppBar from "./ButtonAppBar";
import CenteredGrid from "./CenteredGrid";
import Container from '@material-ui/core/Container';

export default function ProfilePage() {
    const user = useContext(UserContext);
    const {displayName, email} = user;
    return (
        <div >
            <ButtonAppBar />
            <Container maxWidth="md">
                <h2>{displayName}</h2>
                <h3>{email}</h3>
            </Container>
        </div>
    );
}