import React, { Component } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {TiSocialFacebookCircular} from 'react-icons/ti'; 

const serverUrl = `http://${process.env.GRAPH_QL_HTTP_SERVER_HOST}:${process.env.GRAPH_QL_HTTP_SERVER_PORT}`

class OauthLogin extends Component {

    googleResponse = (response) => {
        axios.post(`${serverUrl}/auth/google`, { access_token: response.accessToken })
            .then((res) => {
                console.log(res.data)
                this.props.onSuccess(res.data);
            })

    };

    facebookResponse = (response) => {
        axios.post(`${serverUrl}/auth/facebook`, { access_token: response.accessToken })
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
            <div style={{ textAlign: 'center', padding: 25, paddingTop: 0 }}>
            <hr style={{margin: '30px 25% 30px 25%'}}/>
                <GoogleLogin
                    clientId={process.env.GOOGLE_CLIENT_ID}
                    buttonText="Login with Google"
                    onSuccess={this.googleResponse}
                    onFailure={this.onFailure}
                />
                <br />
                <div style={{height: 18}} ></div>
                <FacebookLogin
                    appId={process.env.FACEBOOK_CLIENT_ID}
                    buttonText='login with Facebook'
                    fields="name,email,picture"
                    callback={this.facebookResponse}
                    cssClass="facebook-btn"
                    icon={<TiSocialFacebookCircular size={27} color="#4c68b9" style={{paddingRight: 13}} />}
                />
            </div>
        );
    }
}

export default OauthLogin;