import PropTypes from "prop-types";
import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import PostListFooter from "./PostListFooter.Component";
import PostTextInput from "./Post.Input.Component";
import AddPostMutation from "./mutations/AddPostMutation";
import uuid from "uuid";
const propTypes = {
  viewer: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  relay: PropTypes.object.isRequired
};

class PostApp extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
      
    };
  }
  
  

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };
  onNewPostSave = (title,description) => {
    const { relay, viewer, todo } = this.props;
    AddPostMutation.commit(
      relay.environment,
       viewer, 
       title,
       description,
       );
    
   
  };

  componentDidMount = () => {
    const { relay, viewer } = this.props;
  };

  render() {
    const { viewer, children } = this.props;
    const { open } = this.state;

    return (
      <div data-framework="relay">
        <section className="todoapp">
          <header className="header">
            <h1>Posts</h1>
            <PostTextInput
              className="new-todo"
              placeholder="Add here"
              autoFocus
              onSave={this.onNewPostSave}
            />
            
          </header>

          {children}

          <PostListFooter viewer={viewer} />
        </section>
      </div>
    );
  }
}

PostApp.propTypes = propTypes;

export default createFragmentContainer(
  PostApp,
  graphql`
    fragment PostApp_viewer on User {
      id
      ...PostListFooter_viewer
    }
  `
);
