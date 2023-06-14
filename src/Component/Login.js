import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import './login.css'

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
                name: name,
                email: email,
                password: password,

            }))
    }
    return (
        <div className='login'>
            <img src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg' alt='logo' className='login-logo'></img>
            <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here</h1>
                <input
                    type='name'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword
                        (e.target.value)} />
                <button
                    type='submit'
                    className='submit-btn'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Login
