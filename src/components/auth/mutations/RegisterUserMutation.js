import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import uuid from 'uuid'

const mutation = graphql`
    mutation RegisterUserMutation($input: registerInput!){
        register(input: $input){
            viewer{
                id
                email
            }
            token
        }
    }
`

function commit(environment,
    email, 
    password, 
    onCompleted = () => {}, 
    onError = () => {}){
    const clientMutationId = uuid.v4()

    const mutationConfig = {
        mutation,
        variables:{
            input:{
                email,
                password,
                clientMutationId
            }
        },
        updater: (store) =>{
            const payload = store.getRootField('register');
            if (payload){
                const token = payload.getValue('token')
                const error = payload.getValue('error')
                console.log("token", token)
            }
        },
        onCompleted,
        onError
    }

    return commitMutation(environment,mutationConfig);
}

export default { commit }

