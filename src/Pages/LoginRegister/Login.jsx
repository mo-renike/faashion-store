import React from "react";
import { Button, Input } from "../../Components/Inputs/Inputs";
import "./Login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth, signInWithGoogle } from "../../firebase/firebaseConfig.js";

const Login = ({ registerOpt }) => {
    const [form, setForm] = React.useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = form;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setForm({
                email: "",
                password: "",
            });
        } catch (error) {
            console.log(error.message);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="login__forms">
            <div className="login__forms_header">
                <h2>Login to your account</h2>
            </div>
            <form>
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
                    <Button onClick={handleSubmit} type="submit" title="Login" /> OR
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
