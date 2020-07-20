import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';

// create private route to render a <Route /> and passes all the props to it
// checks if user is authenticated, if they are it will render the component. if not it will go back to login page

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
            {...rest}
            render={props => {
                if (localStorage.getItem('token')) {
                    // if token is in local storage, render the given component
                    return <Component {...props} />
                } else {
                    console.log('Redirecting!');
                    return <Redirect to="/login" />
                }
            }}
        />
    )
}

export default PrivateRoute;