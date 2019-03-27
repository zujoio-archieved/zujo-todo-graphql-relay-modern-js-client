/**
 * @flow
 * @relayHash 6761d46b567756bc9d363fd78a55f91e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Register_viewer$ref = any;
export type routes_Register_QueryVariables = {||};
export type routes_Register_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Register_viewer$ref
  |}
|};
export type routes_Register_Query = {|
  variables: routes_Register_QueryVariables,
  response: routes_Register_QueryResponse,
|};
*/


/*
query routes_Register_Query {
  viewer {
    ...Register_viewer
    id
  }
}

fragment Register_viewer on User {
  id
  email
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "routes_Register_Query",
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
            "name": "Register_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "routes_Register_Query",
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
            "name": "email",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "routes_Register_Query",
    "id": null,
    "text": "query routes_Register_Query {\n  viewer {\n    ...Register_viewer\n    id\n  }\n}\n\nfragment Register_viewer on User {\n  id\n  email\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '5f7ea70e5a44594e3775a8c012a63f5d';
module.exports = node;
