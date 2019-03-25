import React from 'react'
import PropTypes from 'prop-types'
import { createFragmentContainer, graphql } from 'react-relay'

import Loading from './loading/Loading'

class App extends React.Component{
    constructor(){
        super()
    }

    render(){
        const { viewer, children, isLoading } = this.props
        return(
          <div>
              <div id="container">
                {children}
              </div>
              {isLoading && <Loading />}
          </div>  
        );
    }
}

export default createFragmentContainer(
    App,
    graphql`
        fragment App_viewer on User{
            id
            email   
        }
    `
)


