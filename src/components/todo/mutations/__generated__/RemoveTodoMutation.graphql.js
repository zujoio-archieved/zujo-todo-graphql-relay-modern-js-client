/**
 * @flow
 * @relayHash 6ed62eb1dc855dbf4c01cd7e3c0cefd1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type removeTodoInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type RemoveTodoMutationVariables = {|
  input: removeTodoInput
|};
export type RemoveTodoMutationResponse = {|
  +removeTodo: ?{|
    +viewer: ?{|
      +numTodos: ?number,
      +numCompletedTodos: ?number,
    |},
    +deletedId: ?string,
  |}
|};
export type RemoveTodoMutation = {|
  variables: RemoveTodoMutationVariables,
  response: RemoveTodoMutationResponse,
|};
*/


/*
mutation RemoveTodoMutation(
  $input: removeTodoInput!
) {
  removeTodo(input: $input) {
    viewer {
      numTodos
      numCompletedTodos
      id
    }
    deletedId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "removeTodoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "removeTodoInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "numTodos",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "numCompletedTodos",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "deletedId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RemoveTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeTodo",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "removeTodoPayload",
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
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveTodoMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeTodo",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "removeTodoPayload",
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "RemoveTodoMutation",
    "id": null,
    "text": "mutation RemoveTodoMutation(\n  $input: removeTodoInput!\n) {\n  removeTodo(input: $input) {\n    viewer {\n      numTodos\n      numCompletedTodos\n      id\n    }\n    deletedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5ea6274837a2b3f15e0e7cab2ca58e91';
module.exports = node;
