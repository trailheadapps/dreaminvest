/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import { normalize, schema } from 'normalizr';
import sampleNodes from '../../../utilities/sample-data/tree';
/*
  [Normalizr](https://github.com/paularmstrong/normalizr) Many APIs, public or not, return JSON data that has deeply nested objects. Using data in this kind of structure is often very difficult for JavaScript applications, especially those using Flux or Redux.

  Normalizr is a small, but powerful utility for taking JSON with a schema definition and returning nested entities with their IDs, gathered in dictionaries.

  Hashmaps or hash tables more easily allow immutability because only one hash entry needs to be overwritten by changes. This prevents anti-patterns like `_.deepClone` or `forceUpdate` renders which update the whole tree instead of limiting the re-render to only the node that changed. React is cool like that.
 */
// Define Normalzr schema

var nodeEntity = new schema.Entity('nodes');
var nodes = new schema.Array(nodeEntity);
nodeEntity.define({
  nodes: nodes
}); // Convert nested objects to a hashmap

var base = normalize(sampleNodes.base, nodeEntity).entities.nodes;
var initialExpandedSelected = normalize(sampleNodes.initialState, nodeEntity).entities.nodes;
var large = normalize(sampleNodes.large, nodeEntity).entities.nodes;
var hashmap = {
  base: base,
  large: large,
  initialExpandedSelected: initialExpandedSelected
};
export default hashmap;
//# sourceMappingURL=dynamic-hashmap.js.map