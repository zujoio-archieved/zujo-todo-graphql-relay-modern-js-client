/**
 * @flow
 * @relayHash a64b6775553fda46eb50204467e46666
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addPostInput = {|
  title: string,
  description: string,
  clientMutationId?: ?string,
|};
export type AddPostMutationVariables = {|
  input: addPostInput
|};
export type AddPostMutationResponse = {|
  +addPost: ?{|
    +viewer: ?{|
      +id: string,
      +numPosts: ?number,
    |},
    +postEdge: ?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +title: ?string,
        +description: ?string,
      |},
    |},
  |}
|};
export type AddPostMutation = {|
  variables: AddPostMutationVariables,
  response: AddPostMutationResponse,
|};
*/


/*
mutation AddPostMutation(
  $input: addPostInput!
) {
  addPost(input: $input) {
    viewer {
      id
      numPosts
    }
    postEdge {
      cursor
      node {
        id
        title
        description
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
    "type": "addPostInput!",
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
    "name": "addPost",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "addPostInput!"
      }
    ],
    "concreteType": "addPostPayload",
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
            "name": "numPosts",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "postEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "PostEdge",
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
            "concreteType": "Post",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "description",
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
    "name": "AddPostMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddPostMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddPostMutation",
    "id": null,
    "text": "mutation AddPostMutation(\n  $input: addPostInput!\n) {\n  addPost(input: $input) {\n    viewer {\n      id\n      numPosts\n    }\n    postEdge {\n      cursor\n      node {\n        id\n        title\n        description\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '823a350b369c43286f987627d44b560e';
module.exports = node;
