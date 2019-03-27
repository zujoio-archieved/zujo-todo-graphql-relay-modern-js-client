import HashProtocol from 'farce/lib/HashProtocol';
import queryMiddleware from 'farce/lib/queryMiddleware';
import createFarceRouter from 'found/lib/createFarceRouter';
import createRender from 'found/lib/createRender';
import { Resolver } from 'found-relay';
import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import { unregister } from "./serviceWorker"
import routes from "./routers/routes"
import environment from "./Environment"

import '../assets/css/base.css'
import '../assets/css/index.css'

/**
 * Load Enviroment Configuration
 */
dotenv.config();
const resolver = new Resolver(environment)
const Router = createFarceRouter({
    historyProtocol: new HashProtocol(),
    historyMiddlewares: [queryMiddleware],
    routeConfig: routes,

    render: createRender({
        renderError: ({error}) => (
            <div>
                {error.status === 404 ? 'Not Found': 'Error'}
            </div>
        )
    }),
});


const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

ReactDOM.render(<Router resolver={resolver} />, mountNode);

// Accept hot changes
module.hot.accept();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
unregister()
