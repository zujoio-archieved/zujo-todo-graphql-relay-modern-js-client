/**
 * @flow
 * @relayHash c6a88ccea9932ce7917b9e248574c302
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveCompletedTodoSubscriptionVariables = {||};
export type RemoveCompletedTodoSubscriptionResponse = {|
  +todoRemovedCompleted: ?{|
    +deletedIds: ?$ReadOnlyArray<?string>
  |}
|};
export type RemoveCompletedTodoSubscription = {|
  variables: RemoveCompletedTodoSubscriptionVariables,
  response: RemoveCompletedTodoSubscriptionResponse,
|};
*/


/*
subscription RemoveCompletedTodoSubscription {
  todoRemovedCompleted {
    deletedIds
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "todoRemovedCompleted",
    "storageKey": null,
    "args": null,
    "concreteType": "deletedIds",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedIds",
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
    "name": "RemoveCompletedTodoSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveCompletedTodoSubscription",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "RemoveCompletedTodoSubscription",
    "id": null,
    "text": "subscription RemoveCompletedTodoSubscription {\n  todoRemovedCompleted {\n    deletedIds\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0a8fb9ddd465bcb71c6f1da013fd0252';
module.exports = node;
