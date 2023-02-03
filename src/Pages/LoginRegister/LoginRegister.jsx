import React, { useState } from "react";
import Login from "./Login";
import "./Login.scss";
import Register from "./Register";

const LoginRegister = () => {
    const [showLogin, setShowLogin] = useState(true);

    const registerOpt = () => {
        setShowLogin(false);
    };
    const loginOpt = () => {
        setShowLogin(true);
    };

    return (
        <div className="login">
            <div className="login__forms">
                {showLogin ? (
                    <Login registerOpt={registerOpt} />
                ) : (
                    <Register loginOpt={loginOpt} />
                )}
            </div>
        </div>
    );
};

export default LoginRegister;
