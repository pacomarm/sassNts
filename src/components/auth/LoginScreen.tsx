import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector( (state:any) => state.ui );

    const [values, handleInputChange]  = useForm({
        email: 'paco@live.com',
        password: '123'
    });

    const {email, password} = values;

    const handleLogin = (e:any) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword(email, password) )
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() )
    }

    return (
        <>
            <h2 className="auth__title">Login</h2>
            <form className="animate__animated animate__fadeIn animate__faster">
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
                <button 
                    className="btn btn-primary btn-block" 
                    type="submit"
                    onClick={handleLogin}
                    disabled={loading}
                > 
                    Login 
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                        onClick = {handleGoogleLogin}
                    >
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
