import React from 'react'
import { Button, Input } from '../../Components/Inputs/Inputs'
import "./Login.scss";

const Register = ({ loginOpt }) => {
    return (
        <div className="login__forms-register">
            <h2>Register</h2>
            <form action="">
                <Input type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required="required"
                />
                <Input type="password"
                    name="password"
                    placeholder="******"
                    required="required"
                />
                <Button type="submit" title="Register" />
            </form>

            <span>
                Don't have an account?  <button onClick={loginOpt}>Register</button>
            </span>
        </div>
    )
}

export default Register