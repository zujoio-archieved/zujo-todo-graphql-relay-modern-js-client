import {
    graphql,
    requestSubscription
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime';

const subscription = graphql`
    subscription RemoveTodoSubscription{
        todoRemoved{
            id
            complete
        }
    }
`

function sharedUpdater(store, user, deletedId){
    const userProxy = store.get(user.id);

    ['any', 'active', 'completed'].forEach(status => {
        const connection = ConnectionHandler.getConnection(
            userProxy,
            'TodoList_todos',
            { status }
        );
        if(connection){
            ConnectionHandler.deleteNode(connection, deletedId);
        }
    });
}

function request(enviroment, viewer){
    const subscriptionConfig = {
        subscription: subscription,
        variables: {},
        updater: proxyStore => {
            const payload = proxyStore.getRootField('todoRemoved');
            const deletedId = payload.getValue('id')
            sharedUpdater(proxyStore, viewer, deletedId)

            const complete = payload.getValue('complete')
            const userProxy = proxyStore.get(viewer.id);
            const numTodos = userProxy.getValue('numTodos');
            if(numTodos != null){
                userProxy.setValue(numTodos - 1, 'numTodos');
            }
            const numCompletedTodos = userProxy.getValue('numCompletedTodos');
            if(numCompletedTodos != null){
                if(complete != null){
                    if(complete){
                        userProxy.setValue(numCompletedTodos - 1, 'numCompletedTodos');
                    }
                    else if(numTodos != null){
                        // Note this is the old numTodos.
                        if(numTodos - 1 < numCompletedTodos){
                            userProxy.setValue(numTodos - 1, 'numCompletedTodos');
                        }
                    }
                }
            }
        },
        onError: error => { throw new Error(error) }
      };

    return requestSubscription(enviroment, subscriptionConfig);
}

export default { request }