import React from "react";
import { Button, Input } from "../../Components/Inputs/Inputs";
import "./Login.scss";
import { signInWithGoogle } from "../../firebase/firebaseConfig.js";

const Login = ({ registerOpt }) => {
    const [form, setForm] = React.useState({
        email: "",
        password: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({
            email: "",
            password: "",
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ [name]: value });
    };

    return (
        <div className="login__forms">
            <div className="login__forms_header">
                <h2>Login to your account</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="Enter Your Email"
                    required="required"
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="******"
                    required="required"
                    value={form.password}
                    onChange={handleChange}
                />
                <div className="btns">
                    <Button type="submit" title="Login" /> OR
                    <Button
                        type="button"
                        onClick={signInWithGoogle}
                        isGoogle
                        title="Login With Google"
                    />
                </div>
            </form>

            <span>
                Don't have an account? <button onClick={registerOpt}>Sign Up</button>
            </span>
        </div>
    );
};

export default Login;
