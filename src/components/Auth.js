import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import UseChangeAuthPage from "../hooks/UseChangeAuthPage";

function Auth () {
    const [currentAuthType, switchPage] = UseChangeAuthPage(Login,Signup);
    return (
        <div className="auth">
        { currentAuthType}
        </div>
    )
}

export default Auth;