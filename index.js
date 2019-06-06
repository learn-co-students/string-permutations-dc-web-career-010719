function findAllPermutations(string) {
  let permutations = []
  if (string.length < 2) {
    return string
  } else {
    for (let i = 0; i < string.length; i++) {
      let char = string[i]
      let subString = string.substring(0, i) + string.substring(i + 1)
      let subPermutations = findAllPermutations(subString)
      for (let j = 0; j < subPermutations.length; j++) {
        permutations.push(char + subPermutations[j])
      }
    }
  }
  return permutations
}
