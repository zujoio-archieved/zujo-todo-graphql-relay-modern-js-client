import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
    mutation RemoveCompletedTodoMutation($input: removeCompletedTodosInput!){
        removeCompletedTodos(input: $input){
            viewer{
                numTodos
                numCompletedTodos
            }
            deletedIds
        }
    }
`;

function sharedUpdater(store, user, deletedIds){
    const userProxy = store.get(user.id);

    ['any', 'completed'].forEach(status => {
        const connection = ConnectionHandler.getConnection(
            userProxy,
            'TodoList_todos',
            { status }
        );
        if(connection){
            deletedIds.forEach(deletedId => {
                ConnectionHandler.deleteNode(connection, deletedId);
            });
        }
    });
}

function commit(enviroment, user, todos){
    return commitMutation(enviroment, {
        mutation,
        variables:{
            input: {}
        },

        updater(store){
            const payload = store.getRootField('removeCompletedTodos');
            sharedUpdater(store, user, payload.getValue('deletedIds'));
        },

        optimisticUpdater(store){
            const userProxy = store.get(user.id);

            let deletedIds;
            if(todos && todos.edges){
                deletedIds = todos.edges
                    .filter(({ node }) => node.complete)
                    .map(({ node }) => node.id);
                sharedUpdater(store, user, deletedIds);
            }

            const numTodos = userProxy.getValue('numTodos');
            if(deletedIds){
                userProxy.setValue(numTodos - deletedIds.length, 'numTodos');
            }
            else{
                const numCompletedTodos = userProxy.getValue('numCompletedTodos');
                userProxy.setValue(numTodos - numCompletedTodos, 'numTodos');
            }
            userProxy.setValue(0, 'numCompletedTodos');
        }
    });
}

export default { commit };