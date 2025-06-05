class Solution {
    palindromeCheck(s) {
        //your code goes here
        return this.isPalindrome(s, 0, s.length - 1)
    }

    isPalindrome(str, left = 0, right = str.length - 1) {
    if (left >= right) return true;

    if (str[left] !== str[right]) return false;

    return this.isPalindrome(str, left + 1, right - 1);
}
}