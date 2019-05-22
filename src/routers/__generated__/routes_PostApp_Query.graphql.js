/**
 * @flow
 * @relayHash dfd5422fa6345c16a23db6dd534ccd06
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PostApp_viewer$ref = any;
export type routes_PostApp_QueryVariables = {||};
export type routes_PostApp_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: PostApp_viewer$ref
  |}
|};
export type routes_PostApp_Query = {|
  variables: routes_PostApp_QueryVariables,
  response: routes_PostApp_QueryResponse,
|};
*/


/*
query routes_PostApp_Query {
  viewer {
    ...PostApp_viewer
    id
  }
}

fragment PostApp_viewer on User {
  id
  ...PostListFooter_viewer
}

fragment PostListFooter_viewer on User {
  id
  numPosts
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "routes_PostApp_Query",
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
            "name": "PostApp_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "routes_PostApp_Query",
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
            "name": "numPosts",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "routes_PostApp_Query",
    "id": null,
    "text": "query routes_PostApp_Query {\n  viewer {\n    ...PostApp_viewer\n    id\n  }\n}\n\nfragment PostApp_viewer on User {\n  id\n  ...PostListFooter_viewer\n}\n\nfragment PostListFooter_viewer on User {\n  id\n  numPosts\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '7f09f108b5dfa6b3dfa1c306ad9ba612';
module.exports = node;
