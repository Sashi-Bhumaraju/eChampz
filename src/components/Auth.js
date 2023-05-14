import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import UseChangeAuthPage from "../hooks/UseChangeAuthPage";
import NotConnected from "./NotConnected";
import UseOnline from "../hooks/UseOnline";

function Auth () {
    const [currentAuthType, switchPage] = UseChangeAuthPage(Login,Signup);
    // const isOnline = UseOnline();
    // if( !isOnline ) return <NotConnected></NotConnected>
    return (
        <div className="auth">
        { currentAuthType}
        </div>
    )
}

export default Auth;