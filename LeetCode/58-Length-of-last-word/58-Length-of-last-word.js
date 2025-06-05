/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let words = s.split(' ');
    let len = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            len = words[i].length;
        }
    }

    return len;
};