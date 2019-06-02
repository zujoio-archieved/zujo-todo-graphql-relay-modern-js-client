import Link from 'found/lib/Link';
import PropTypes from 'prop-types';
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';


const propTypes = {
    viewer: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
};

class PostListFooter extends React.Component{
    
    

    componentDidMount = () =>{
        const { relay, viewer } = this.props;
    }

    render() {
        const { numPosts } = this.props.viewer
        if(!this.props.viewer.numPosts){
            return null;
        }

        return (
            <footer className="footer">
                <span className="post-count">
                <strong>{numPosts}</strong> {numPosts === 1 ? 'item' : 'items'} left
                </span>
        
                <ul className="filters">
                <li>
                </li>
                <li>
                    
                </li>
                
                </ul>
        
            </footer>
        );
    }
}

PostListFooter.propTypes = propTypes

export default createFragmentContainer(
    PostListFooter,
    graphql`
        fragment PostListFooter_viewer on User {
            id
            numPosts
        }
    `
)