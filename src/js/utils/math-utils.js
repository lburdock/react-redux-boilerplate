/**
 * Returns a random index that exists in an array
 * @param {int} arrayLength Length of the array
 * @return {string} A random index within an array
 */
export function getRandomIndex(arrayLength) {
    return Math.round(Math.random() * (arrayLength - 1)) % arrayLength;
}
