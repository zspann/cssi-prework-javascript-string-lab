var encode = function(userString){
  //1. Add code to turn string to lowercase
  userString.toLowerCase()
  // 2. Add code to change each instance of a, e, i, o to the appropriate number based on l33n rules
  userString.replace(/a/g, 4)
  userString.replace(/e/g, 3)
  userString.replace(/i/g, 1)
  userString.replace(/o/g, 0)
  // 3. Add code to replace spaces with dollar signs.
  userString.replace(/ /g, $)
  //This line assigns the variable encode to the value userString
  return userString
}
