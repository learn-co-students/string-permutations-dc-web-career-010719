function findAllPermutations(string) {
  let permutations = []
  if (string.length < 2) {
    return string
  } else {
    for (let i = 0; i < string.length; i++) {
      let character = string[i]
      let subString = string.slice(0, i) + string.slice(i+1)
      let subPermutations = findAllPermutations(subString)
      for (let j = 0; j < subPermutations.length; j++) {
        permutations.push(character + subPermutations[j])
      }
    }
  }
  return permutations
}
