/**
 * @typedef {import('./common.js').Standard} Standard
 */

import { getDescendantNodeIndexes } from './common';

/**
 * Move nodes from one index to another index
 * @constructor
 * @param {Standard[]} standards - Array of standards
 * @param {number} index - Index of the standard to be moved
 * @param {number} index - New index
 * @returns {Standard[]} nodes
 */
export function moveNodes(standards, from, to) {

    // For v1, we'll only allow to move if both from and to positions have same indentation level
    if (standards[from].indentation === standards[to].indentation ) {
        const updatedStandards = [
            ...standards
        ];
        // descendant nodes + current node
        const numberOfNodesToMove = getDescendantNodeIndexes(updatedStandards, from).length + 1;
    
        updatedStandards.splice(
            to, 0, ...updatedStandards.splice(from, numberOfNodesToMove)
        );
        
        return updatedStandards;
    } else {
        return standards;
    }
}

/**
 * Delete nodes from index
 * @constructor
 * @param {Standard[]} standards - Array of standards
 * @param {number} index - Index of the standard to be moved
 * @returns {Standard[]} nodes
 */
export function deleteNodes(standards, index) {
    const updatedStandards = [...standards]

    const nodesToDelete = getDescendantNodeIndexes(updatedStandards, index);
    
    updatedStandards.splice(index, nodesToDelete.length+1);

    return updatedStandards;
}
