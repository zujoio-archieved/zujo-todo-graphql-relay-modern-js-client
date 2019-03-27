import { commitMutation, graphql } from 'react-relay';
import uuid from 'uuid'

import { LocalStorage } from '../../../common/common.localstorage'


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

function commit(environment,{
        email, 
        password, 
        onCompleted = () => {}, 
        onError = () => {}
    }){

    const mutationConfig = {
        mutation,
        variables:{
            input:{
                email,
                password,
                clientMutationId: uuid.v4()
            }
        },
        updater: (store) =>{
            const payload = store.getRootField('register');
            if (payload){
                const token = payload.getValue('token')
                if(token){
                    LocalStorage.storeToken(token);
                }
                else{
                    throw new Error("Authentication Failed!")
                }
            }
        },
        onCompleted,
        onError
    }

    return commitMutation(environment,mutationConfig);
}

export default { commit }

