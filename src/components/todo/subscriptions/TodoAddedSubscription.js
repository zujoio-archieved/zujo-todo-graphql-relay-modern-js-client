import {
    graphql,
    requestSubscription
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime';

const subscription = graphql`
    subscription TodoAddedSubscription{
      todoAdded{
        todoEdge{
          node{
            id
            complete
            text
          }
          cursor
        }
        clientSubscriptionId
      }
    }
  `


function sharedUpdater(store, user, todoEdge) {
    const userProxy = store.get(user.id);

    ['any', 'active'].forEach(status => {
        const connection = ConnectionHandler.getConnection(
          userProxy,
          'TodoList_todos',
          { status },
        );
        
        if (connection) {
          // Check record already exists
          const todo = todoEdge.getLinkedRecord('node');
          const cursor = todoEdge.getValue('cursor')
          const todoId = todo.getValue('id');
         
          // Check record already exists
          const existingRecords = connection.getLinkedRecords('edges');
          const recordAlreadyExists = existingRecords.some((existingRecord) => {
            const node = existingRecord.getLinkedRecord('node');
            const existingId = node.getValue('id');           
            return existingId === todoId;
          });
          if(!recordAlreadyExists){
            const edge = ConnectionHandler.createEdge(store, connection, todo);
            ConnectionHandler.insertEdgeAfter(connection, edge, cursor);
          }
        }
      });
}


function request(enviroment, viewer){
    const subscriptionConfig = {
        subscription: subscription,
        variables: {},
        updater: proxyStore => {
            const payload = proxyStore.getRootField('todoAdded');
            const todoEdge = payload.getLinkedRecord('todoEdge')
            sharedUpdater(proxyStore, viewer, todoEdge)
            const userProxy = proxyStore.get(viewer.id);
            const numTodos = userProxy.getValue('numTodos');
            if(numTodos != null){
                userProxy.setValue(numTodos + 1, 'numTodos')
            }
        },
        onError: error => { throw new Error(error) }
      };

    return requestSubscription(enviroment, subscriptionConfig);
}

export default { request }

  

