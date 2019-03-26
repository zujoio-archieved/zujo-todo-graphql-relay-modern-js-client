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
                password: '',
                confirm_password: ''
            },
            submitted: false,
            errors: []
        }

        this._handleChange = this._handleChange.bind(this);
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

        // Validate input
        if(!this._validateInput(user)){
            this.setState(state => {
                return {
                    errors: state.errors.concat([{ 
                        message: "User Name and Password are required!" 
                    }])
                }
            });
        }

        // Validate password confirmation
        if(!this._validateConfirmPassword(user)){
            this.setState(state => {
                return {
                    errors: state.errors.concat([{ 
                        message: "Mismatch password and confirmed password!" 
                    }])
                }
            });
        }



        const { relay } = this.props
        this.setState({ submitted: true });

        // Commit mutation
        RegisterUserMutation.commit(
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

    _validateInput = user => {
        if(
            user.email 
            && user.password
        ){
            return true
        }
        return false
    }

    _validateConfirmPassword = user => {
        if(user 
            && user.password 
            && user.confirm_password
            && user.password  === user.confirm_password){
            return true
        }
        return false
    }

    render(){
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>register</h1>
                </header>
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
Register.propTypes = propTypes

export default createFragmentContainer(
    Register,
    graphql`
        fragment Register_viewer on User{
            id
            email
        }
    `
)