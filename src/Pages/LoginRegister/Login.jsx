import React from 'react'
import { Button, Input } from '../../Components/Inputs/Inputs'
import "./Login.scss";


const Login = ({ registerOpt }) => {
    const [form, setForm] = React.useState({
        email: "",
        password: ""
    })
    const handleSubmit = e => {
        e.preventDefault()
        setForm({
            email: "",
            password: ""
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target

        setForm({ [name]: value })
    }
    return (
        <div className="login__forms-login">
            <h2>Login to your account</h2>
            <form onSubmit={handleSubmit}>
                <Input type="email"
                    name="email"
                    value={form.email}
                    placeholder="Enter Your Email"
                    required="required"
                    onChange={handleChange}
                />
                <Input type="password"
                    name="password"
                    placeholder="******"
                    required="required"
                    value={form.password}
                    onChange={handleChange}
                />
                <Button type="submit" title="Login" />

            </form>


            <span>
                Don't have an account?  <button onClick={registerOpt}>Register</button>
            </span>
        </div>
    )
}

export default Login