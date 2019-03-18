/**
 * @flow
 * @relayHash e47eafc8992b84a642af0b4d523c7da2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodoAddedSubscriptionVariables = {||};
export type TodoAddedSubscriptionResponse = {|
  +todoAdded: ?{|
    +todoEdge: ?{|
      +node: ?{|
        +id: string,
        +complete: ?boolean,
        +text: ?string,
      |},
      +cursor: string,
    |},
    +clientSubscriptionId: ?string,
  |}
|};
export type TodoAddedSubscription = {|
  variables: TodoAddedSubscriptionVariables,
  response: TodoAddedSubscriptionResponse,
|};
*/


/*
subscription TodoAddedSubscription {
  todoAdded {
    todoEdge {
      node {
        id
        complete
        text
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
    "name": "todoAdded",
    "storageKey": null,
    "args": null,
    "concreteType": "todoAdded",
    "plural": false,
    "selections": [
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
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
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
    "name": "TodoAddedSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoAddedSubscription",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "TodoAddedSubscription",
    "id": null,
    "text": "subscription TodoAddedSubscription {\n  todoAdded {\n    todoEdge {\n      node {\n        id\n        complete\n        text\n      }\n      cursor\n    }\n    clientSubscriptionId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '547a6761bbcb5cebba5257d4d12d499e';
module.exports = node;
