import PropTypes from 'prop-types';
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import validator from 'validator'

import EmailInput from './EmailInput.Component'
import PasswordInput from './PasswordInput.Component'

import LoginUserMutation from './mutations/LoginUserMutation'

const propTypes = {
    relay: PropTypes.object.isRequired
}

class Login extends React.Component{
    constructor(props, context){
        super(props, context)

        this.state = {
            user:{
                email: '',
                password: '',
                confirm_password: ''
            },
            submitted: false,
            errors: []
        }
    }
    componentDidMount = () =>{
        console.log("login mounted")
    }

    _handleChange = e =>{
        const { name, value } = e.target
        const { user } = this.state
        this.setState({
            user:{
                ...user,
                [name]: value
            }
        })
    }

    _handleSubmit = async e => {
        e.preventDefault();
        const { user } = this.state

        // Validate required input
        if(!this._validateRequiredInput(user)){
           this._raiseError("User Name and Password are required!");
        }

        // Validate email address
        if(!validator.isEmail(user.email)){
            this._raiseError("Email address is not valid!");
        }

        // Login
        const { relay } = this.props
        this.setState({ submitted: true });

        // Commit mutation 
         // Commit mutation
         LoginUserMutation.commit(
            relay.environment, 
            {
                email: user.email, 
                password: user.password,
                onCompleted: (response, errors) => {
                    if(errors && errors.length){
                        this.setState(state => {
                            return {
                                errors: errors
                            }
                        })
                    }
                    else{
                        this.props.router.push('/todo')
                    }
                },
                onError: (errors) => {
                    this.setState(state => {
                        return {
                            errors:  state.errors.concat(errors)
                        }
                    })
                }
            });
    }

    _validateRequiredInput = user => {
        if(
            user.email 
            && user.password
        ){
            return true
        }
        return false
    }

    _raiseError = message =>{
        this.setState(state => {
            return {
                errors: state.errors.concat([{ 
                    message
                }])
            }
        });
    }

    render(){
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>login</h1>
                </header>
                <form name="formRegister" onSubmit={this._handleSubmit} >
                    <EmailInput name="email" placeholder="email" className="email" onChange={this._handleChange}  />
                    <PasswordInput name="password" placeholder="password" className="password" onChange={this._handleChange} />
                    <button className="load-more-btn" onClick={this._handleSubmit} >
                        {'Login'}
                    </button>
                    <ul>
                        {(this.state && this.state.errors && this.state.errors.length) ? 
                            this.state.errors.map( (error, index) => {
                                return <li key={index}>{error.message}</li>
                            } )
                        : null }
                    </ul>
                </form>
            </section>
        )
    }
}
Login.propTypes = propTypes

export default createFragmentContainer(
    Login,
    graphql`
        fragment Login_viewer on User{
            id
            email
        }
    `
)