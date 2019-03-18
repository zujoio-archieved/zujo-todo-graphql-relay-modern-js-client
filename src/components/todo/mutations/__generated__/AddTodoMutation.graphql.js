/**
 * @flow
 * @relayHash 8e91e276fa3d29240e43ac8eab32f15a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addTodoInput = {|
  text: string,
  clientMutationId?: ?string,
|};
export type AddTodoMutationVariables = {|
  input: addTodoInput
|};
export type AddTodoMutationResponse = {|
  +addTodo: ?{|
    +viewer: ?{|
      +id: string,
      +numTodos: ?number,
    |},
    +todoEdge: ?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +complete: ?boolean,
        +text: ?string,
      |},
    |},
  |}
|};
export type AddTodoMutation = {|
  variables: AddTodoMutationVariables,
  response: AddTodoMutationResponse,
|};
*/


/*
mutation AddTodoMutation(
  $input: addTodoInput!
) {
  addTodo(input: $input) {
    viewer {
      id
      numTodos
    }
    todoEdge {
      cursor
      node {
        id
        complete
        text
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "addTodoInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "addTodoInput!"
      }
    ],
    "concreteType": "addTodoPayload",
    "plural": false,
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
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "numTodos",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todoEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "TodoEdge",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cursor",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Todo",
            "plural": false,
            "selections": [
              (v1/*: any*/),
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
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddTodoMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddTodoMutation",
    "id": null,
    "text": "mutation AddTodoMutation(\n  $input: addTodoInput!\n) {\n  addTodo(input: $input) {\n    viewer {\n      id\n      numTodos\n    }\n    todoEdge {\n      cursor\n      node {\n        id\n        complete\n        text\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0401c617c57dbf8e6d25142a0ac945e0';
module.exports = node;
