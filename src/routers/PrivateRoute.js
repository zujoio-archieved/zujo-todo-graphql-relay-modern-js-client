import React from 'react'
import {Route} from 'found/lib';

import { LocalStorage } from '../common/common.localstorage'
import { RedirectException, Redirect } from 'found';

class PrivateRoute extends Route{
    render({ Component, props }) {
        if (!props) return undefined
        if (!LocalStorage.getTokenSync()) {
          throw new RedirectException('/')
        }
        return (<Component {...props} />)
      }
}

export { PrivateRoute }