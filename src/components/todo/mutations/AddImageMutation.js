// import { commitMutation, graphql } from 'react-relay';
// import { ConnectionHandler } from 'relay-runtime';
// import uuid from 'uuid'
// import environment from '../../../Environment'

// const mutation = graphql`
//     mutation AddImageMutation($input: addImageInput!){
//         addImage(input: $input){
//             viewer{
//                 node{
//                     type
//                     path
//                 }
//             cursor
//             }
//         }
//     }
// `
// function commit(environment, input, uploadables, onCompleted, onError) {
     

//     return commitMutation(environment, {
//       mutation,
//       variables: { input },
//       uploadables,
//       onCompleted,
//       onError
//     })
//   }
  
//   export default { commit }
// // export default ({input, post, file, onCompleted, onError }) => {
// //     let uploadables;

// //     if (file) {
// //         uploadables = {
// //             file,
// //         };
// //     }

// //     return commitMutation(environment, {
// //         mutation,
// //         variables : { input },
// //         uploadables,
// //         onCompleted,
// //         onError,
// //     });
// // };
