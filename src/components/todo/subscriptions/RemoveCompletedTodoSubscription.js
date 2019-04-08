import {
    graphql,
    requestSubscription
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime';

const subscription = graphql`
    subscription RemoveCompletedTodoSubscription{
        todoRemovedCompleted{
            deletedIds
        }
    }
`

function sharedUpdater(store, viewer, deletedIds){
    const userProxy = store.get(viewer.id);

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


function request(enviroment, viewer){
    const subscriptionConfig = {
        subscription: subscription,
        varibles: {},
        updater: proxyStore => {
            const payload = proxyStore.getRootField('todoRemovedCompleted');
            const deletedIds = payload.getValue('deletedIds')
            sharedUpdater(proxyStore, viewer, deletedIds);
            
            const userProxy = proxyStore.get(viewer.id);
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
    }
    requestSubscription(enviroment, subscriptionConfig)
}

export default { request }



