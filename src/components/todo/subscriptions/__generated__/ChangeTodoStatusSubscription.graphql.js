/**
 * @flow
 * @relayHash afec0f7294408f4021105b39fd6fd1a5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ChangeTodoStatusSubscriptionVariables = {||};
export type ChangeTodoStatusSubscriptionResponse = {|
  +todoChangedStatus: ?{|
    +id: string,
    +complete: ?boolean,
  |}
|};
export type ChangeTodoStatusSubscription = {|
  variables: ChangeTodoStatusSubscriptionVariables,
  response: ChangeTodoStatusSubscriptionResponse,
|};
*/


/*
subscription ChangeTodoStatusSubscription {
  todoChangedStatus {
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
    "name": "todoChangedStatus",
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
    "name": "ChangeTodoStatusSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ChangeTodoStatusSubscription",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "ChangeTodoStatusSubscription",
    "id": null,
    "text": "subscription ChangeTodoStatusSubscription {\n  todoChangedStatus {\n    id\n    complete\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a3cbd32321ddce2edbfcd26f09477e34';
module.exports = node;
