import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';
import { graphql } from 'react-relay';

import TodoApp from '../components/todo/TodoApp.Component'
import TodoList from '../components/todo/TodoList.Component'

import { DEFAULT_TODO_PAGE_LIMIT } from '../common/common.constant'


const TodoListQuery = graphql`
  query routes_TodoList_Query($status: String!) {
    viewer {
      ...TodoList_viewer @arguments(count: 5, cursor: null, status: $status)
    }
  }
`;

export default makeRouteConfig(
<Route
    path="/"
    Component={TodoApp}
    query={graphql`
      query routes_TodoApp_Query {
        viewer {
          ...TodoApp_viewer
        }
      }
    `}
    prepareVariables={params => ({ ...params, status: 'any', count: DEFAULT_TODO_PAGE_LIMIT })}
  >
    <Route
      Component={TodoList}
      query={TodoListQuery}
      prepareVariables={params => ({ ...params, status: 'any', count: DEFAULT_TODO_PAGE_LIMIT })}
    />
    <Route path=":status" Component={TodoList} query={TodoListQuery} />
    <Route path="home" Component={TodoList} query={TodoListQuery} prepareVariables={params => ({ ...params, status: 'any', count: DEFAULT_TODO_PAGE_LIMIT })} ></Route>
  </Route>,
);