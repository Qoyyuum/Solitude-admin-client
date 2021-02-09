import React, {Component, createContext} from "react";
import {auth} from "../firebase";

export const UserContext = createContext({user: null});
class UserProvider extends Component {
    state = {
        user: null
    };

    componentDidMount = () => {
        auth.onAuthStateChanged(userAuth => {
            this.setState({user: userAuth});
        });
    };

    render() {
        return (
            <UserContext.Provider vlaue = {this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider;