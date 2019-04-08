import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import TodoTextInput from './Todo.Input.Component'
import RemoveTodoMutation from './mutations/RemoveTodoMutation'
import RenameTodoMutation from './mutations/RenameTodoMutation'
import ChangeTodoStatusMutation from './mutations/ChangeTodoStatusMutation';


const propTypes = {
    viewer: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired
}

class Todo extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            isEditing: false,
           
           
        }
          
    }
   onCompleteChange = e => {
        const { relay, viewer, todo } = this.props
        const conplete = e.target.checked
        ChangeTodoStatusMutation.commit(relay.environment, viewer, todo, conplete)
    }

    onDestroyClick = () => {
        this.removeTodo();
    }

    onLabelDoubleClick = () => {
        this.setEditMode(true);
    }

    onTextInputCancel = () => {
        this.setEditMode(false);
    }

    onTextInputDelete = () => {
        this.setEditMode(false)
        this.removeTodo();
    }

    onTextInputSave = text => {
        const { relay, todo } = this.props
        this.setEditMode(false);
        RenameTodoMutation.commit(relay.environment, todo, text)
    }

    
    setEditMode(isEditing){
        this.setState({ isEditing });
    }

    removeTodo() {
        const { relay, viewer, todo } = this.props;
       
        RemoveTodoMutation.commit(relay.environment, viewer, todo);
    }
   
    render() {
        const { complete, text } = this.props.todo;
        const { isEditing } = this.state
     
       
        return (
            
            <li
                className={classNames({
                    completed: complete,
                    editing: isEditing
                })}
            >
          
                <div className="view">
                    <input
                        type="checkbox"
                        checked={complete}
                        className="toggle"
                        onChange={this.onCompleteChange}
                    />
                    <label onDoubleClick={this.onLabelDoubleClick}>{text}</label>
                    <button className="destroy" onClick={this.onDestroyClick} />
                    <a className="Download_File" target="_blank" href={`${'http://localhost:3000/'}`+this.props.todo.attachmentpath}> 
                        <svg fill="currentColor"  height="30" width="30" viewBox="0 0 40 40" style={{verticalAlig:"middle",fill:"#c86969"}} ><g>
                            <path d="m30.1 30q0-0.6-0.5-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.5-1z m5.7 0q0-0.6-0.4-1t-1-0.4-1 0.4-0.5 1 0.5 1 1 0.4 1-0.4 0.4-1z m2.8-5v7.1q0 0.9-0.6 1.6t-1.5 0.6h-32.9q-0.8 0-1.5-0.6t-0.6-1.6v-7.1q0-0.9 0.6-1.5t1.5-0.6h10.4l3 3q1.3 1.2 3.1 1.2t3-1.2l3-3h10.4q0.9 0 1.5 0.6t0.6 1.5z m-7.2-12.7q0.4 0.9-0.3 1.6l-10 10q-0.4 0.4-1 0.4t-1-0.4l-10-10q-0.7-0.7-0.3-1.6 0.3-0.9 1.3-0.9h5.7v-10q0-0.6 0.4-1t1-0.4h5.7q0.6 0 1 0.4t0.5 1v10h5.7q0.9 0 1.3 0.9z"></path></g>
                        </svg>
                    </a>
              </div>
                {!!this.state.isEditing && (
                    <TodoTextInput 
                        className="edit"
                        commitOnBlur
                        initialValue={this.props.todo.text}
                       
                        onCancel={this.onTextInputCancel}
                        onDelete={this.onTextInputDelete}
                        onSave={this.onTextInputSave}
                    />
                )}
            </li>
        );
        /* eslint-enable jsx-a11y/label-has-for */
    }
}

Todo.propTypes = propTypes

export default createFragmentContainer(Todo, {
    viewer: graphql`
        fragment Todo_viewer on User{
            id
        }
    `,
    todo: graphql`
        fragment Todo_todo on Todo {
            id
            complete
            text
            attachmentpath
        }
    `
});
