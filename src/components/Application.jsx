import React, { useContext } from "react";
import { Router } from "@reach/router";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";

// Route pages
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import Users from "./Users";

function Application() {
  const user = useContext(UserContext);
  return (
        user ? 
        <Router>
          <ProfilePage path="/" />
          <Users path="/users" />
        </Router>
        :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>
  );
}

export default Application;