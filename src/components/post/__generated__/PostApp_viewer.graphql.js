/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PostListFooter_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PostApp_viewer$ref: FragmentReference;
export type PostApp_viewer = {|
  +id: string,
  +$fragmentRefs: PostListFooter_viewer$ref,
  +$refType: PostApp_viewer$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PostApp_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PostListFooter_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '670173cd393311b8eeb933bf4e6faba8';
module.exports = node;
