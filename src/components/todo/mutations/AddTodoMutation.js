import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import uuid from 'uuid'

const mutation = graphql`
    mutation AddTodoMutation($input: addTodoInput!){
        addTodo(input: $input){
            viewer{
                id
                numTodos
            }
            todoEdge{
                cursor
                node {
                    id
                    complete
                    text
                }
            }
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
    
          const existingRecords = connection.getLinkedRecords('edges');
          const recordAlreadyExists = existingRecords.some((existingRecord) => {
            const node = existingRecord.getLinkedRecord('node');
            if(node){
                const existingId = node.getValue('id');
                return existingId === todoId;
            }
            return false
          });
          if(!recordAlreadyExists){
            const edge = ConnectionHandler.createEdge(store, connection, todoEdge);
            ConnectionHandler.insertEdgeBefore(connection, edge, cursor);
          }
          
        }
      });
}


function commit(environment, user, text,file,uploadables){
    if(environment){
      const clientMutationId = uuid.v4();

      return commitMutation(environment, {
          mutation,
          variables: {
              input: { text, clientMutationId,file  }
          },
          uploadables,
          
          updater(store){
              const payload = store.getRootField('addTodo');
              sharedUpdater(store, user, payload.getLinkedRecord('todoEdge'))
          },

        
          optimisticUpdater: (store) => {
              const id = `client:addTodo:Todo:${clientMutationId}`;
              const todo = store.create(id, 'Todo');
              todo.setValue(text, 'text');
              todo.setValue(id, 'id')

              const todoEdge = store.create(
                  `client:addTodo:TodoEdge:${clientMutationId}`,
                  'TodoEdge'
              )
              todoEdge.setLinkedRecord(todo, 'node');
              sharedUpdater(store, user, todoEdge);

              const userProxy = store.get(user.id);
              const numTodos = userProxy.getValue('numTodos');
              if(numTodos != null){
                  userProxy.setValue(numTodos + 1, 'numTodos')
              }
          }
      });
  }
}

export default { commit }