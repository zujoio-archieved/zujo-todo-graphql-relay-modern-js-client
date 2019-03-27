import PropTypes from 'prop-types';
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import TodoListFooter from './TodoListFooter.Component'
import TodoTextInput from './Todo.Input.Component'

import AddTodoMutation from './mutations/AddTodoMutation'

import ChangeTodoStatusSubscription from './subscriptions/ChangeTodoStatusSubscription'
import RemoveTodoSubscription from './subscriptions/RemoveTodoSubscription'
import RenameTodoSubscription from './subscriptions/RenameTodoSubscription'

const propTypes = {
    viewer: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    relay: PropTypes.object.isRequired
}


class TodoApp extends React.Component{
    onNewTodoSave = text => {
        const { relay, viewer } = this.props
        AddTodoMutation.commit(relay.environment, viewer, text);
    }

    componentDidMount = () =>{
        console.log("mounted")
        const { relay, viewer } = this.props;
        ChangeTodoStatusSubscription.request(relay.environment, viewer)
        RemoveTodoSubscription.request(relay.environment, viewer)
        RenameTodoSubscription.request(relay.environment, viewer)
    }

    render(){
        const { viewer, children } = this.props
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
                </header>
        
                {children}
        
                <TodoListFooter viewer={viewer} />
                </section>
            </div>
        )
    }
}

TodoApp.propTypes = propTypes;

export default createFragmentContainer(
    TodoApp,
    graphql`
        fragment TodoApp_viewer on User{
            id
            ...TodoListFooter_viewer
        }
    `
)