import PropTypes from 'prop-types';
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import EmailInput from './EmailInput.Component'
import PasswordInput from './PasswordInput.Component'

import RegisterUserMutation from './mutations/RegisterUserMutation'

const propTypes = {
    relay: PropTypes.object.isRequired
}

class Register extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            user:{
                email: '',
                password: ''
            },
            submitted: false,
            errors: []
        }

        this._handleChange = this._handleChange.bind(this);
    }

    _setErrors = (errors) => {
        this.errors = errors;
    }

    _getErrors = () =>{
        return this.errors;
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
        if(this._validateInput(user)){
            const { relay } = this.props
            this.setState({ submitted: true });
            const onCompleted = () => this.props.router.push('/app')
            const onError = (errors) => {
                this.setState(state => {
                    return {
                        errors: errors
                    }
                })
            }
            RegisterUserMutation.commit(
                relay.environment, 
                user.email, 
                user.password,
                onCompleted,
                onError
            );
        }
        else{
            this.setState(state => {
                return {
                    errors: [{ 
                        message: "User Name and Password are required!" 
                    }]
                }
            })
        }
    }

    _validateInput = user =>{
        if(
            user.email 
            && user.password
        ){
            return true
        }
        return false
    }

    render(){
        return (
            <section className="todoapp">
                <form name="formRegister" onSubmit={this._handleSubmit} >
                    <EmailInput name="email" placeholder="email" className="email" onChange={this._handleChange}  />
                    <PasswordInput name="password" placeholder="password" className="password" onChange={this._handleChange} />
                    <PasswordInput name="confirm_password" placeholder="confirm password" className="password" onChange={this._handleChange} />
                    <button className="load-more-btn" onClick={this._handleSubmit} >
                        {'Register'}
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

//Register.propTypes = propTypes

export default createFragmentContainer(
    Register,
    graphql`
        fragment Register_viewer on User{
            id
            email
        }
    `
)