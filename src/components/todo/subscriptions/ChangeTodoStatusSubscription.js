import {
    graphql,
    requestSubscription
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime';

const subscription = graphql`
    subscription ChangeTodoStatusSubscription{
        todoChangedStatus{
            id
            complete
        }
    }
`

function sharedUpdater(store, user, todoProxy){
    // In principle this could add to the active connection, but such an
    // interaction is not possible from the front end.
    const userProxy = store.get(user.id);
    const status = todoProxy.getValue('complete') ? 'active' : 'completed';
    const connection = ConnectionHandler.getConnection(
        userProxy,
        'TodoList_todos',
        { status },
    );
    if(connection){
        ConnectionHandler.deleteNode(connection, todoProxy.getValue('id'));
    }
}

function request(enviroment, viewer){
    const subscriptionConfig = {
        subscription: subscription,
        variables:{},
        updater: proxyStore =>{
            const todo = proxyStore.getRootField('todoChangedStatus');
            const todoId = todo.getValue('id');
            const complete = todo.getValue('complete');
            const todoProxy = proxyStore.get(todoId);
            todoProxy.setValue(complete, 'complete');
            sharedUpdater(proxyStore, viewer, todoProxy);

            const userProxy = proxyStore.get(viewer.id);
            const numCompletedTodos = userProxy.getValue('numCompletedTodos');
            if(numCompletedTodos != null){
                userProxy.setValue(
                    numCompletedTodos + (complete ? 1 : -1),
                    'numCompletedTodos'
                )
            }
        },
        onError: error => { throw new Error(error) }
    }
    requestSubscription(enviroment, subscriptionConfig)
}

export default { request }