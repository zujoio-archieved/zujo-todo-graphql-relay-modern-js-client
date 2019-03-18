/**
 * @flow
 * @relayHash b98f4c9aae8dd7b08f015e747d1294d2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveTodoSubscriptionVariables = {||};
export type RemoveTodoSubscriptionResponse = {|
  +todoRemoved: ?{|
    +id: string,
    +complete: ?boolean,
  |}
|};
export type RemoveTodoSubscription = {|
  variables: RemoveTodoSubscriptionVariables,
  response: RemoveTodoSubscriptionResponse,
|};
*/


/*
subscription RemoveTodoSubscription {
  todoRemoved {
    id
    complete
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "todoRemoved",
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RemoveTodoSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveTodoSubscription",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "RemoveTodoSubscription",
    "id": null,
    "text": "subscription RemoveTodoSubscription {\n  todoRemoved {\n    id\n    complete\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cd725125bee0a15863f601743acf6417';
module.exports = node;
