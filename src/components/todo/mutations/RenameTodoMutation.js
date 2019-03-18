import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
    mutation RenameTodoMutation($input: renameTodoInput!){
        renameTodo(input: $input){
            todo{
                id
                text
            }
        }
    }
`

function getOptimisticResponse(todo, text){
    return {
        renameTodo: {
            todo:{
                id: todo.id,
                text
            }
        }
    }
}

function commit(enviroment, todo, text){
    return commitMutation(enviroment, {
        mutation,
        variables: {
            input: { id: todo.id, text }
        },
        optimisticResponse: () => getOptimisticResponse(todo, text)
    });
}

export default { commit };