/**
 * @flow
 * @relayHash a5830f4b103eaa226b5da3a76e11e49e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PostAddedSubscriptionVariables = {||};
export type PostAddedSubscriptionResponse = {|
  +postAdded: ?{|
    +postEdge: ?{|
      +node: ?{|
        +id: string,
        +title: ?string,
        +description: ?string,
      |},
      +cursor: string,
    |},
    +clientSubscriptionId: ?string,
  |}
|};
export type PostAddedSubscription = {|
  variables: PostAddedSubscriptionVariables,
  response: PostAddedSubscriptionResponse,
|};
*/


/*
subscription PostAddedSubscription {
  postAdded {
    postEdge {
      node {
        id
        title
        description
      }
      cursor
    }
    clientSubscriptionId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "postAdded",
    "storageKey": null,
    "args": null,
    "concreteType": "postAdded",
    "plural": false,
    "selections": [
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
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Post",
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
        "kind": "ScalarField",
        "alias": null,
        "name": "clientSubscriptionId",
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
    "name": "PostAddedSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "PostAddedSubscription",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "PostAddedSubscription",
    "id": null,
    "text": "subscription PostAddedSubscription {\n  postAdded {\n    postEdge {\n      node {\n        id\n        title\n        description\n      }\n      cursor\n    }\n    clientSubscriptionId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1d4bc73c498d79bc5a59c4ff5ab8ceb1';
module.exports = node;
