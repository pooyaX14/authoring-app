/**
 * @typedef {import('./common.js').Standard} Standard
 */

import { getDescendantNodeIndexes } from './common';

/**
 * Checks whether a node can be right-indented
 * @constructor
 * @param {Standard[]} standards - Array of standards
 * @param {number} index - Index of the standard to be indented
 */
function canIndentRight(standards, index) {
    if(standards[index-1]){
        if(standards[index-1].indentation === standards[index].indentation ||
            standards[index-1].indentation > standards[index].indentation) {
                return true;
        }
    }
    return false;
}

/**
 * Checks whether a node can be left-indented
 * @constructor
 * @param {Standard[]} standards - Array of standards
 * @param {number} index - Index of the standard to be indented
 * @returns {boolean}
 */
function canIndentLeft(standards, index) {
    if(standards[index].indentation === 0) {
        return false;
    } else {
        return true;
    }
}

/**
 * Indents a node to the right
 * @constructor
 * @param {Standard[]} standards - Array of standards
 * @param {number} index - Index of the standard to be indented
 * @param {number} indentAmount - Amount to indent
 * @returns {Standard[] | false} Standards array after indentation
 */
export function indentRight(standards, index, indentAmount) {
    if (canIndentRight(standards, index)) {
        const updatedStandards = [
            ...standards
        ];

        const descendantNodeIndexes = getDescendantNodeIndexes(updatedStandards, index);
        descendantNodeIndexes.forEach(index => {
            updatedStandards[index].indentation += indentAmount;
        });

        updatedStandards[index].indentation += indentAmount;

        return updatedStandards;
    }
    return false;
}

/**
 * Indents a node to the left
 * @constructor
 * @param {Standard[]} standards - Array of standards
 * @param {number} index - Index of the standard to be indented
 * @param {number} indentAmount - Amount to indent
 * @returns {Standard[] | false} Standards array after indentation
 */
export function indentLeft(standards, index, indentAmount) {
    if(canIndentLeft(standards, index)) {
        const updatedStandards = [
            ...standards
        ];

        const descendantNodeIndexes = getDescendantNodeIndexes(updatedStandards, index);
        descendantNodeIndexes.forEach(index => {
            updatedStandards[index].indentation -= indentAmount;
        });

        updatedStandards[index].indentation -= indentAmount;

        return updatedStandards;
    }
    return false;
}