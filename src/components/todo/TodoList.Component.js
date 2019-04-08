import PropTypes from 'prop-types';
import React from 'react';
import { createFragmentContainer, createPaginationContainer, graphql } from 'react-relay';
import Todo from './Todo.Component'
import MarkAllTodosMutation from './mutations/MarkAllTodosMutation'
import TodoAddedSubscription from './subscriptions/TodoAddedSubscription'

import enviroment from '../../Environment'
import { DEFAULT_TODO_PAGE_LIMIT } from '../../common/common.constant'

const propTypes = {
    viewer: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired
}

const contextTypes = {
    relay: PropTypes.shape({
        variables: PropTypes.shape({
            status: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

class TodoList extends React.Component{
    onToggleChange = e => {
        const { relay, viewer } = this.props;
        const { variables } = this.context.relay;
        const complete = e.target.checked;
       
        MarkAllTodosMutation.commit(
            relay.environment,
            viewer,
            viewer.todos,
            complete
        )
    }

    componentDidMount = () =>{
        const { relay, viewer } = this.props;
        TodoAddedSubscription.request(relay.environment, viewer)
    }

    _loadMore() {
        if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
          return;
        }
        this.props.relay.loadMore(
          DEFAULT_TODO_PAGE_LIMIT, 
          error => {
            console.log(error);
          },
        );
    }



    render() {
        const { viewer } = this.props;
      
        const { todos, numTodos, numCompletedTodos } = viewer

        if(!numTodos){
            return null;
        }

        return (
            <section className="main">
                {
                  /** <div><pre>{JSON.stringify(todos.edges, null, 2) }</pre></div>*/
                }
                <input
                    id="toggle-all"
                    type="checkbox"
                    checked={numTodos === numCompletedTodos}
                    className="toggle-all"
                    onChange={this.onToggleChange}
                />
                
                <label htmlFor="toggle-all">Mark all as complete</label>
                
              
                <ul className="todo-list">
                    {todos.edges.map(({ node }) => (
                       
                        <Todo key={node.id} viewer={viewer} todo={node} />
                    ))}
                </ul>

                <button
                    className="load-more-btn"
                    onClick={() => this._loadMore()}
                    title="Load More">
                      {'Load More'}
                </button>
            </section>
        )
    }
}

TodoList.propTypes = propTypes;
TodoList.contextType = contextTypes;


export default createPaginationContainer(
    TodoList,
    graphql`
        fragment TodoList_viewer on User
        @argumentDefinitions(
            count: {type: "Int", defaultValue: 2}
            cursor: {type: "String"}
            status: {type: "String"}
        ){
            todos(
                status: $status, 
                first: $count
                after: $cursor
            ) @connection(key: "TodoList_todos"){
                edges{
                    node{
                        id
                        complete
                        ...Todo_todo
                    }
                }
            }
            id
            numTodos
            numCompletedTodos
            ...Todo_viewer
        }   
    `,
    {
        direction: 'forward',
        getConnectionFromProps(props) {
            return props.viewer && props.viewer.todos;
        },
        // This is also the default implementation of `getFragmentVariables` if it isn't provided.
        getFragmentVariables(prevVars, totalCount) {
            return {
                ...prevVars,
                count: totalCount,
            };
        },
        getVariables(props, args, fragmentVariables) {
       
            const {count, cursor} = args
            return {
              count,
              cursor,
              status: fragmentVariables["status"]
            };
        },
        query: graphql`
            query TodoListPaginationQuery($count: Int!, $cursor: String!, $status: String) {
                viewer {
                    ...TodoList_viewer @arguments(count: $count, cursor: $cursor, status: $status)
                }
            }
        `
    }
)

/*
export default createFragmentContainer(
    TodoList,
    graphql`
        fragment TodoList_viewer on User{
            todos(status: $status, first: 2147483647)
            @connection(key: "TodoList_todos"){
                edges{
                    node{
                        id
                        complete
                        ...Todo_todo
                    }
                }
            }
            id
            numTodos
            numCompletedTodos
            ...Todo_viewer
        }   
    `,
)
*/