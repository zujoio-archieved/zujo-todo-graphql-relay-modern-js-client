/**
 * @flow
 * @relayHash ba39d73a1934039a7930b1fcc935ed83
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RenameTodoSubscriptionVariables = {||};
export type RenameTodoSubscriptionResponse = {|
  +todoRenamed: ?{|
    +id: string,
    +text: ?string,
  |}
|};
export type RenameTodoSubscription = {|
  variables: RenameTodoSubscriptionVariables,
  response: RenameTodoSubscriptionResponse,
|};
*/


/*
subscription RenameTodoSubscription {
  todoRenamed {
    id
    text
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "todoRenamed",
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RenameTodoSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RenameTodoSubscription",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "RenameTodoSubscription",
    "id": null,
    "text": "subscription RenameTodoSubscription {\n  todoRenamed {\n    id\n    text\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b78f372a0e51b0d57f7b1212d82df3a0';
module.exports = node;
