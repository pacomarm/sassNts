import React from 'react'
import {Link} from "react-router-dom";
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const [values, handleInputChange]  = useForm({
        email: 'paco@live.com',
        password: '123'
    });

    const {email, password} = values;

    const handleLogin = (e) => {
        e.preventDefault();
        
    }

    return (
        <>
            <h2 className="auth__title">Login</h2>
            <form>
                <input 
                    type="text" 
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <button className="btn btn-primary btn-block" type="submit" disabled={false}> Login </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with Google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link"> Create an account</Link>
            </form>
        </>
    )
}
