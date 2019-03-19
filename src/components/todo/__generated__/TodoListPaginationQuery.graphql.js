/**
 * @flow
 * @relayHash 4b943b94d91896ea1d66f2c97de2c193
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TodoList_viewer$ref = any;
export type TodoListPaginationQueryVariables = {|
  count: number,
  cursor: string,
  status?: ?string,
|};
export type TodoListPaginationQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: TodoList_viewer$ref
  |}
|};
export type TodoListPaginationQuery = {|
  variables: TodoListPaginationQueryVariables,
  response: TodoListPaginationQueryResponse,
|};
*/


/*
query TodoListPaginationQuery(
  $count: Int!
  $cursor: String!
  $status: String
) {
  viewer {
    ...TodoList_viewer_4qXjrI
    id
  }
}

fragment TodoList_viewer_4qXjrI on User {
  todos(status: $status, first: $count, after: $cursor) {
    edges {
      node {
        id
        complete
        ...Todo_todo
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
  numTodos
  numCompletedTodos
  ...Todo_viewer
}

fragment Todo_todo on Todo {
  id
  complete
  text
}

fragment Todo_viewer on User {
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "status",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count",
    "type": "Int"
  },
  {
    "kind": "Variable",
    "name": "status",
    "variableName": "status",
    "type": "String"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TodoListPaginationQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
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
            "name": "TodoList_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "status",
                "variableName": "status",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoListPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
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
            "kind": "LinkedField",
            "alias": null,
            "name": "todos",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "TodoConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "TodoEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Todo",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "complete",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "text",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "todos",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "TodoList_todos",
            "filters": [
              "status"
            ]
          },
          (v2/*: any*/),
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
    "name": "TodoListPaginationQuery",
    "id": null,
    "text": "query TodoListPaginationQuery(\n  $count: Int!\n  $cursor: String!\n  $status: String\n) {\n  viewer {\n    ...TodoList_viewer_4qXjrI\n    id\n  }\n}\n\nfragment TodoList_viewer_4qXjrI on User {\n  todos(status: $status, first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        complete\n        ...Todo_todo\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n  numTodos\n  numCompletedTodos\n  ...Todo_viewer\n}\n\nfragment Todo_todo on Todo {\n  id\n  complete\n  text\n}\n\nfragment Todo_viewer on User {\n  id\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8ce54323dd788c21c31d0bbdb113e658';
module.exports = node;
