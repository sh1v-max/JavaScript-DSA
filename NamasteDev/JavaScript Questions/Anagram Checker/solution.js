function isAnagram(str1, str2) {
  // Your implementation
  const sortStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').sort().join('');
  const sortStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').sort().join('');

  return sortStr1 === sortStr2;
}

//For the purpose of user debugging.
isAnagram("listen", "silent");
module.exports = isAnagram