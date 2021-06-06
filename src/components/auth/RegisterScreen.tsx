import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWEmailPassName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector( (state:any) => state.ui );

    const [values, handleInputChange]  = useForm({
        name: 'Paco',
        email: 'paco@live.com',
        password: '123456',
        password2: '123456',
    });


    const {name, email, password, password2} = values;

    const handleRegister = (e:any) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch( startRegisterWEmailPassName(email, password, name) )
        }
    }

    const isFormValid = () => {
        if( name.trim().length === 0){
            dispatch( setError('names too short') );
            return false;
        } else if(!validator.isEmail(email)){
            dispatch( setError('Not valid email') );
            return false
        } else if ( password !== password2 && password.length < 5){
            dispatch( setError('passwords must match') );
            return false
        }
        dispatch( removeError() );
        return true;
    }

    return (
        <>
            <h2 className="auth__title">Register</h2>
            <form onSubmit={handleRegister}>
                {
                    msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
                <input 
                    type="text" 
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
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
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button 
                    className="btn btn-primary btn-block mb-5" 
                    type="submit" 
                    disabled={false}
                > 
                    Register 
                </button>

                <Link to="/auth/login" className="link"> I have an account</Link>
            </form>
        </>
    )
}
