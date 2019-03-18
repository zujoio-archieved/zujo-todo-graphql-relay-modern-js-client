import {
    graphql,
    requestSubscription
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime';

const subscription = graphql`
    subscription RenameTodoSubscription{
        todoRenamed{
            id
            text
        }
    }
`

function sharedUpdater(store, user, todoProxy){
    // In principle this could add to the active connection, but such an
    // interaction is not possible from the front end.
    const userProxy = store.get(user.id);
    const text = todoProxy.getValue('text')
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
            const todo = proxyStore.getRootField('todoRenamed');
            const todoId = todo.getValue('id');
            const text = todo.getValue('text');
            const todoProxy = proxyStore.get(todoId);
            todoProxy.setValue(text, 'text');
            sharedUpdater(proxyStore, viewer, todoProxy);
        },
        onError: error => { throw new Error(error) }
    }
    requestSubscription(enviroment, subscriptionConfig)
}

export default { request }

