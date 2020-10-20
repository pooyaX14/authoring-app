/**
 * @typedef {Object} Standard
 * @property {string} id
 * @property {string} text
 * @property {number} indentation
 * @returns {boolean}
 */

/**
 * Fetch the indexes of all the nodes indented within the given index
 * @constructor
 * @param {Standard[]} standards - Array of standards
 * @param {number} index - index
 * @returns {number[]}
 */
export function getDescendantNodeIndexes(standards, currentIndex) {
    const descendantNodeIndexes = [];

    for (let i=currentIndex+1; i<standards.length; i++) {
        if (standards[i].indentation > standards[currentIndex].indentation) {
            descendantNodeIndexes.push(i);
        } else {
            break;
        }
    }
    return descendantNodeIndexes;
}