import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import PostTextInput from './Post.Input.Component'


const propTypes = {
    viewer: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
    
}

class Post extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            isEditing: false,
           
           
        }
          
    }
  


    

    

    
    setEditMode(isEditing){
        this.setState({ isEditing });
    }

    
   
    render() {
        const { title,description } = this.props.post;
        const { isEditing } = this.state
        console.log(this.props.post.title);
       
        return (
            
            <li
                className={classNames({
                    editing: isEditing
                })}
            >
          
                <div className="view">
                <label>{title}</label>
                <p id="description" >{description}</p>    
                
                    
              </div>
                {!!this.state.isEditing && (
                    <PostTextInput 
                        className="edit"
                        commitOnBlur
                        initialValue={this.props.post.title}
                       
                        onSave={this.onTextInputSave}
                    />
                )}
            </li>
        );
        /* eslint-enable jsx-a11y/label-has-for */
    }
}

Post.propTypes = propTypes

export default createFragmentContainer(Post, {
    viewer: graphql`
        fragment Post_viewer on User{
            id
        }
    `,
    post: graphql`
        fragment Post_post on Post {
            id
            title
            description
        }
    `
});
