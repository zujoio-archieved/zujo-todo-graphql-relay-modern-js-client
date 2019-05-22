import {
    graphql,
    requestSubscription
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime';

const subscription = graphql`
    subscription PostAddedSubscription{
      postAdded{
        postEdge{
          node{
            id
            title
            description
          }
          cursor
        }
        clientSubscriptionId
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
       
        // Check record already exists
        const existingRecords = connection.getLinkedRecords('edges');
        const recordAlreadyExists = existingRecords.some((existingRecord) => {
          const node = existingRecord.getLinkedRecord('node');
          const existingId = node.getValue('id');           
          return existingId === postId;
        });
        if(!recordAlreadyExists){
          const edge = ConnectionHandler.createEdge(store, connection, post);
          ConnectionHandler.insertEdgeAfter(connection, edge, cursor);
        }
      }
   
   
   
   
}


function request(enviroment, viewer){
    if(enviroment){
      const subscriptionConfig = {
          subscription: subscription,
          variables: {},
          updater: proxyStore => {
              const payload = proxyStore.getRootField('postAdded');
              const postEdge = payload.getLinkedRecord('postEdge')
              sharedUpdater(proxyStore, viewer, postEdge)
              const userProxy = proxyStore.get(viewer.id);
              const numPosts = userProxy.getValue('numPosts');
              if(numPosts != null){
                  userProxy.setValue(numPosts + 1, 'numPosts')
              }
          },
          onError: error => { throw new Error(error) }
        };

      return requestSubscription(enviroment, subscriptionConfig);
    }
}

export default { request }

  

