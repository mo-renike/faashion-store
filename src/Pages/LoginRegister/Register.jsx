import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { Button, Input } from "../../Components/Inputs/Inputs";
import {
    auth,
    db,
} from "../../firebase/firebaseConfig.js";

import "./Login.scss";

const Register = ({ loginOpt }) => {

    const [form, setForm] = React.useState({
        displayName: "",
        email: "",
        password: "",
    });

    const handleSubmit = e => {
        e.preventDefault();
        const { displayName, email, password } = form;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const userRef = doc(db, "users", user.uid);
                setDoc(userRef, { displayName, email })
                    .then(() => {
                        setForm({
                            displayName: "",
                            email: "",
                            password: "",
                        });
                    })
                    .catch((error) => {
                        console.log("Error adding document: ", error);
                    });
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);

            });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const showPassword = () => {
        const pwd = document.querySelector(".pwd input");
        if (pwd.type === "password") {
            pwd.type = "text";
        } else {
            pwd.type = "password";
        }
    };

    return (
        <div className="login__forms">
            <div className="login__forms_header">
                <h2>Register your Account</h2>
                <small>SIgn up with email and password</small>
            </div>
            <form onSubmit={handleSubmit}>
                <Input
                    type="name"
                    name="displayName"
                    placeholder="Enter Your Name"
                    required="required"
                    value={form.displayName}
                    onChange={handleChange}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required="required"
                    onChange={handleChange}
                    value={form.email}
                />
                <div className="pwd">
                    {" "}
                    <Input
                        type="password"
                        name="password"
                        placeholder="******"
                        className="pwd"
                        required="required"
                        value={form.password}
                        onChange={handleChange}
                    />
                    <span onClick={showPassword}>{showPassword ? "Show" : "Hide"}</span>
                </div>
                <Button type="submit" title="Register" />
            </form>

            <span>
                Don't have an account? <button onClick={loginOpt}>Sign Up</button>
            </span>
        </div>
    );
};

export default Register;
