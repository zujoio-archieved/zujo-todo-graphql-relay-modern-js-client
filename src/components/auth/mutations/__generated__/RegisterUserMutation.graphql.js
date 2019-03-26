/**
 * @flow
 * @relayHash 2db5d70dbcbcd703cd54ae6a55a3cabc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type registerInput = {|
  email: string,
  password: string,
  clientMutationId?: ?string,
|};
export type RegisterUserMutationVariables = {|
  input: registerInput
|};
export type RegisterUserMutationResponse = {|
  +register: ?{|
    +viewer: ?{|
      +id: string,
      +email: ?string,
    |},
    +token: ?string,
  |}
|};
export type RegisterUserMutation = {|
  variables: RegisterUserMutationVariables,
  response: RegisterUserMutationResponse,
|};
*/


/*
mutation RegisterUserMutation(
  $input: registerInput!
) {
  register(input: $input) {
    viewer {
      id
      email
    }
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "registerInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "register",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "registerInput!"
      }
    ],
    "concreteType": "registerPayload",
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
            "name": "email",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RegisterUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RegisterUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RegisterUserMutation",
    "id": null,
    "text": "mutation RegisterUserMutation(\n  $input: registerInput!\n) {\n  register(input: $input) {\n    viewer {\n      id\n      email\n    }\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '45408f364c287536a5423262072c0858';
module.exports = node;
