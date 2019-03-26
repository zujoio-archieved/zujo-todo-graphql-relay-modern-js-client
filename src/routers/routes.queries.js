
import { graphql } from 'react-relay';

const AppQuery = graphql`
  query routes_App_Query {
    viewer{
      ...App_viewer
    }
  }
`;

const TodoAppQuery = graphql`
query routes_TodoApp_Query {
  viewer {
    ...TodoApp_viewer
  }
}
`;

const TodoListQuery = graphql`
  query routes_TodoList_Query($status: String!, $count: Int!) {
    viewer {
      ...TodoList_viewer @arguments(count: $count, cursor: null, status: $status)
    }
  }
`;

const RegisterQuery = graphql`
    query routes_Register_Query { 
        viewer {
            ...Register_viewer
        }
    }
`;

const LoginQuery = graphql`
  query routes_Login_Query {
    viewer{
      ...Login_viewer
    }
  }
`

export { 
    AppQuery,
    TodoAppQuery,
    TodoListQuery,
    RegisterQuery,
    LoginQuery
}