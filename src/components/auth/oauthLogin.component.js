import React, { Component } from 'react';
import axios from 'axios';
import {GoogleLogin} from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const serverUrl = `http://${process.env.GRAPH_QL_HTTP_SERVER_HOST}:${process.env.GRAPH_QL_HTTP_SERVER_PORT}`

class OauthLogin extends Component {

    googleResponse = (response) => {
        axios.post(`${serverUrl}/auth/google`, {access_token: response.accessToken})
            .then((res) => {
                console.log(res.data)
                this.props.onSuccess(res.data);
            })

    };

    facebookResponse = (response) => {
        axios.post(`${serverUrl}/auth/facebook`, {access_token: response.accessToken})
            .then((res) => {
                console.log(res.data);
                this.props.onSuccess(res.data);
            })
    }

    onFailure = (err) => {
        alert('failed');
        console.log(err)
    };

    render() {
        return (
            <div>
                <GoogleLogin
                    clientId={process.env.GOOGLE_CLIENT_ID}
                    buttonText="login with Google"
                    onSuccess={this.googleResponse}
                    onFailure={this.onFailure}
                />
                <FacebookLogin 
                    appId={process.env.FACEBOOK_CLIENT_ID}
                    buttonText='login with Facebook'
                    fields="name,email,picture"
                    callback={this.facebookResponse}
                />
            </div>
        );
    }
}

export default OauthLogin;