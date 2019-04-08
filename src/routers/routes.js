import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';

import {PrivateRoute} from './PrivateRoute'

import TodoApp from '../components/todo/TodoApp.Component'
import TodoList from '../components/todo/TodoList.Component'
import Register from '../components/auth/Register.Component'
import Login from '../components/auth/Login.Component'

import { DEFAULT_TODO_PAGE_LIMIT } from '../common/common.constant'
import { 
  AppQuery,
  TodoAppQuery, 
  TodoListQuery, 
  RegisterQuery,
  LoginQuery
} from './routes.queries'
import App from '../components/App';


export default makeRouteConfig(
  <Route path="/"Component={App}
  query={AppQuery}>
    <Route 
      path="/" 
      Component={Login} 
      query={LoginQuery} 
      prepareVariables={params => ({ ...params, status: 'any', })} 
    ></Route>
      <Route 
        path="/register" 
        Component={Register} 
        query={RegisterQuery} 
        prepareVariables={params => ({ ...params, status: 'any' })} 
      ></Route>
      <PrivateRoute
        path="/todo"
        Component={TodoApp}
        query={TodoAppQuery}
        prepareVariables={params => ({ ...params, status: 'any', count: DEFAULT_TODO_PAGE_LIMIT })}
      >
        <PrivateRoute
          Component={TodoList}
          query={TodoListQuery}
          prepareVariables={params => ({ ...params, status: 'any', count: DEFAULT_TODO_PAGE_LIMIT })}
        />
        <PrivateRoute 
          path=":status" 
          Component={TodoList} 
          query={TodoListQuery} />
        <PrivateRoute 
          path="/home" 
          Component={TodoList} 
          query={TodoListQuery} 
          prepareVariables={params => ({ ...params, status: 'any', count: DEFAULT_TODO_PAGE_LIMIT })} 
        />
      </PrivateRoute>
  </Route>
,
);