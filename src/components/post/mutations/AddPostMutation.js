import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import uuid from 'uuid'

const mutation = graphql`
    mutation AddPostMutation($input: addPostInput!){
        addPost(input: $input){
            viewer{
                id
                numPosts
            }
            postEdge{
                cursor
                node {
                    id
                    title
                    description
                }
            }
        }
    }
`

function sharedUpdater(store, user, postEdge) {
    const userProxy = store.get(user.id);

    
   
        const connection = ConnectionHandler.getConnection(
          userProxy,
          'PostList_posts',
        );
        if (connection) {
            // Check record already exists
            const post = postEdge.getLinkedRecord('node');
            const cursor = postEdge.getValue('cursor')
            const postId = post.getValue('id');
      
            const existingRecords = connection.getLinkedRecords('edges');
            const recordAlreadyExists = existingRecords.some((existingRecord) => {
              const node = existingRecord.getLinkedRecord('node');
              if(node){
                  const existingId = node.getValue('id');
                  return existingId === postId;
              }
              return false
            });
            if(!recordAlreadyExists){
              ConnectionHandler.insertEdgeBefore(connection, postEdge, cursor);
            }
          }
}


function commit(environment, user, title,description){
    if(environment){
      const clientMutationId = uuid.v4();

      return commitMutation(environment, {
          mutation,
          variables: {
              input: { title,description, clientMutationId  }
          },
          
          updater(store){
              const payload = store.getRootField('addPost');
              sharedUpdater(store, user, payload.getLinkedRecord('postEdge'))
          },

          
          optimisticUpdater: (store) => {
              const id = `client:addPost:TPostEdge:Post:${clientMutationId}`;
              const post = store.create(id, 'Post');
              post.setValue(title, 'text');
              post.setValue(description,'text');
              post.setValue(id, 'id')

              console.log("client:addPost:PostEdge:${clientMutationId}", `client:addPost:PostEdge:${clientMutationId}`)
              const postEdge = store.create(
                  `client:addPost:PostEdge:${clientMutationId}`,
                  'PostEdge'
              )
              postEdge.setLinkedRecord(post, 'node');
              sharedUpdater(store, user, postEdge);

              const userProxy = store.get(user.id);
              const numPosts = userProxy.getValue('numPosts');
              if(numPosts != null){
                  userProxy.setValue(numPosts + 1, 'numPosts')
              }
          }
          
      });
  }
}

export default { commit }