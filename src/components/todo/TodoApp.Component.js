import PropTypes from "prop-types";
import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import TodoListFooter from "./TodoListFooter.Component";
import TodoTextInput from "./Todo.Input.Component";
import Modal from "react-responsive-modal";
import AddTodoMutation from "./mutations/AddTodoMutation";
import AddImageMutation from "./mutations/AddImageMutation";
import ChangeTodoStatusSubscription from "./subscriptions/ChangeTodoStatusSubscription";
import RemoveTodoSubscription from "./subscriptions/RemoveTodoSubscription";
import RenameTodoSubscription from "./subscriptions/RenameTodoSubscription";
import uuid from "uuid";
const propTypes = {
  viewer: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  relay: PropTypes.object.isRequired
};

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
      open: false,
      selectedFile: ""
    };
  }
  onChange = e => {
    switch (e.target.name) {
      case "selectedFile":
        this.setState({ selectedFile: e.target.files[0], open: false });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };
  onNewTodoSave = text => {
    const { selectedFile } = this.state;
    const file = selectedFile.name || 'Null';
    const uploadables = { nfile: selectedFile };
    const { relay, viewer, todo } = this.props;
    AddTodoMutation.commit(
      relay.environment,
       viewer, 
       text,
       file,
       uploadables);
    
   
  };

  componentDidMount = () => {
    const { relay, viewer } = this.props;
    ChangeTodoStatusSubscription.request(relay.environment, viewer);
    RemoveTodoSubscription.request(relay.environment, viewer);
    RenameTodoSubscription.request(relay.environment, viewer);
  };

  render() {
    const { viewer, children } = this.props;
    const { open } = this.state;

    return (
      <div data-framework="relay">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <TodoTextInput
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              onSave={this.onNewTodoSave}
            />
            <input id="Uploading" className="Uploading" />
            <label htmlFor="Uploading" onClick={this.onOpenModal}>
              {this.state.selectedFile ? (
                <svg height="50"  width="50"style={{ fill: "#2c0ace", marginLeft: "68px" }}>
                  <path d="m35.8 30.9q0 2.6-1.7 4.4t-4.4 1.8q-3 0-5.2-2.3l-17.4-17.3q-2.5-2.6-2.5-6.1 0-3.5 2.4-6t6-2.5q3.6 0 6.1 2.6l13.5 13.5q0.3 0.2 0.3 0.5 0 0.3-0.7 1t-1.1 0.7q-0.2 0-0.5-0.2l-13.5-13.6q-1.8-1.7-4-1.7-2.4 0-4 1.7t-1.7 4q0 2.4 1.7 4.1l17.4 17.3q1.4 1.4 3.2 1.4 1.4 0 2.4-0.9t0.9-2.4q0-1.8-1.4-3.2l-13-13q-0.6-0.5-1.3-0.5-0.7 0-1.1 0.4t-0.4 1.1q0 0.7 0.6 1.3l9.1 9.1q0.2 0.3 0.2 0.5 0 0.4-0.7 1.1t-1 0.7q-0.3 0-0.5-0.3l-9.2-9.1q-1.4-1.4-1.4-3.3 0-1.9 1.3-3.1t3.1-1.3q2 0 3.3 1.4l13 13q2.2 2.2 2.2 5.2z" />
                </svg>
              ) : (
                <svg height="50" width="50" style={{ fill: "#c86969", marginLeft: "68px" }} >
                  <path d="m35.8 30.9q0 2.6-1.7 4.4t-4.4 1.8q-3 0-5.2-2.3l-17.4-17.3q-2.5-2.6-2.5-6.1 0-3.5 2.4-6t6-2.5q3.6 0 6.1 2.6l13.5 13.5q0.3 0.2 0.3 0.5 0 0.3-0.7 1t-1.1 0.7q-0.2 0-0.5-0.2l-13.5-13.6q-1.8-1.7-4-1.7-2.4 0-4 1.7t-1.7 4q0 2.4 1.7 4.1l17.4 17.3q1.4 1.4 3.2 1.4 1.4 0 2.4-0.9t0.9-2.4q0-1.8-1.4-3.2l-13-13q-0.6-0.5-1.3-0.5-0.7 0-1.1 0.4t-0.4 1.1q0 0.7 0.6 1.3l9.1 9.1q0.2 0.3 0.2 0.5 0 0.4-0.7 1.1t-1 0.7q-0.3 0-0.5-0.3l-9.2-9.1q-1.4-1.4-1.4-3.3 0-1.9 1.3-3.1t3.1-1.3q2 0 3.3 1.4l13 13q2.2 2.2 2.2 5.2z" />
                </svg>
              )}
            </label>
            <Modal open={open} onClose={this.onCloseModal} center>
              <h2>Upload image</h2>
            
              <form className="mm_ImgUpload">
                <input
                  type="file"
                  name="selectedFile"
                  onChange={this.onChange}
                />
               
              </form>
            </Modal>
          </header>

          {children}

          <TodoListFooter viewer={viewer} />
        </section>
      </div>
    );
  }
}

TodoApp.propTypes = propTypes;

export default createFragmentContainer(
  TodoApp,
  graphql`
    fragment TodoApp_viewer on User {
      id
      ...TodoListFooter_viewer
    }
  `
);
