import React from 'react'
import {Link} from "react-router-dom";

export const LoginScreen = () => {
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
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    className="auth__input"
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
                <Link to="/auth/register"> Create an account</Link>
            </form>
        </>
    )
}
