/**
 * @flow
 * @relayHash 0473f4a60a2bc9fc3a50841a34af1274
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type renameTodoInput = {|
  id: string,
  text: string,
  clientMutationId?: ?string,
|};
export type RenameTodoMutationVariables = {|
  input: renameTodoInput
|};
export type RenameTodoMutationResponse = {|
  +renameTodo: ?{|
    +todo: ?{|
      +id: string,
      +text: ?string,
    |}
  |}
|};
export type RenameTodoMutation = {|
  variables: RenameTodoMutationVariables,
  response: RenameTodoMutationResponse,
|};
*/


/*
mutation RenameTodoMutation(
  $input: renameTodoInput!
) {
  renameTodo(input: $input) {
    todo {
      id
      text
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "renameTodoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "renameTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "renameTodoInput!"
      }
    ],
    "concreteType": "renameTodoPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todo",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
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
            "name": "text",
            "args": null,
            "storageKey": null
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
    "name": "RenameTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RenameTodoMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RenameTodoMutation",
    "id": null,
    "text": "mutation RenameTodoMutation(\n  $input: renameTodoInput!\n) {\n  renameTodo(input: $input) {\n    todo {\n      id\n      text\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f575fc055d7851640508e042194641b';
module.exports = node;
