import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types/'

export const PublicRoute: any = ({isAuthenticated, component: Component, ...rest}: any) => {
    return (
        <Route
            {...rest}
            component = { (props:any) => ( !isAuthenticated ? <Component {...props}/> : <Redirect to="/"/>)}
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
