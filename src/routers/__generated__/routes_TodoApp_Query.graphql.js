/**
 * @flow
 * @relayHash 09a9a206f5e33dbf58f1dd5e7c19b0bd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TodoApp_viewer$ref = any;
export type routes_TodoApp_QueryVariables = {||};
export type routes_TodoApp_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: TodoApp_viewer$ref
  |}
|};
export type routes_TodoApp_Query = {|
  variables: routes_TodoApp_QueryVariables,
  response: routes_TodoApp_QueryResponse,
|};
*/


/*
query routes_TodoApp_Query {
  viewer {
    ...TodoApp_viewer
    id
  }
}

fragment TodoApp_viewer on User {
  id
  ...TodoListFooter_viewer
}

fragment TodoListFooter_viewer on User {
  id
  numTodos
  numCompletedTodos
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "routes_TodoApp_Query",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TodoApp_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "routes_TodoApp_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "numTodos",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "numCompletedTodos",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "routes_TodoApp_Query",
    "id": null,
    "text": "query routes_TodoApp_Query {\n  viewer {\n    ...TodoApp_viewer\n    id\n  }\n}\n\nfragment TodoApp_viewer on User {\n  id\n  ...TodoListFooter_viewer\n}\n\nfragment TodoListFooter_viewer on User {\n  id\n  numTodos\n  numCompletedTodos\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'e9925b532d021309a34926cb6c7e46cd';
module.exports = node;
