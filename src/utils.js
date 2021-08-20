/**
 * Taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
export function fisherYatesArrayShuffle(array) {
    let count = array.length,
        randomNumber,
        temp;
    while (count) {
        randomNumber = Math.random() * count-- | 0;
        temp = array[count];
        array[count] = array[randomNumber];
        array[randomNumber] = temp
    }
}
