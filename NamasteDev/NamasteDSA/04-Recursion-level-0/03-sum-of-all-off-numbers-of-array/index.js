// sum of all the odd numbers in an array using recursion

let arr = [5, 4, 3, 2, 1];

function sumOdd(n) {
    if (n < 0) return 0;
    if (arr[n] % 2 !== 0) {
        return arr[n] + sumOdd(n - 1);
    } else {
        return sumOdd(n - 1);
    }
}

console.log(sumOdd(arr.length - 1));
