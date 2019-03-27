/**
 * @flow
 * @relayHash a3fe935272afe1af20428d390359ee09
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type App_viewer$ref = any;
export type routes_App_QueryVariables = {||};
export type routes_App_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: App_viewer$ref
  |}
|};
export type routes_App_Query = {|
  variables: routes_App_QueryVariables,
  response: routes_App_QueryResponse,
|};
*/


/*
query routes_App_Query {
  viewer {
    ...App_viewer
    id
  }
}

fragment App_viewer on User {
  id
  email
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "routes_App_Query",
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
            "name": "App_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "routes_App_Query",
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
    "name": "routes_App_Query",
    "id": null,
    "text": "query routes_App_Query {\n  viewer {\n    ...App_viewer\n    id\n  }\n}\n\nfragment App_viewer on User {\n  id\n  email\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '0cbf88fe703c3b585c8f6215d6850996';
module.exports = node;
