// revers the first k char for every 2k char in string
// if there are less than k char in string, reverse the whole string
// if less than 2k but more or equal to k, reverse first k and leave rest as it is

// note:
// strings are immutable, and to change or reverse in string, we need to convert string into array
// s.split('') => convert string into array
// work on array, mutate it
// s.join() => convert array back to string