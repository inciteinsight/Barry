export const simplify = str => str.replace(/[^\w\s]+/g, '').toLowerCase()

export const rgColorIndicator = (percentage, scheme) => {
  const max = 255
  let increment = max / 100
  switch (scheme) {
    case 'red-yellow-green':
      increment *= 2
      return `rgb(${Math.min(0, max - increment * percentage)},${Math.max(
        0,
        increment * percentage - max
      )},0)`
    case 'green':
      return `rgb(${percentage === 100 ? 0 : 255 - percentage},255,${
        percentage === 100 ? 0 : 255 - percentage
      })`
    default:
      return `rgb(0, 255, 0)`
  }
}

const levenshteinDistance = (a, b) => {
  if (a.length == 0) return b.length
  if (b.length == 0) return a.length

  let matrix = []
  let i, j

  for (i = 0; i <= b.length; i++) {
    matrix[i] = [i]
  }

  for (j = 0; j <= a.length; j++) {
    matrix[0][j] = j
  }

  for (i = 1; i <= b.length; i++) {
    for (j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) == a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        )
      }
    }
  }
  return matrix[b.length][a.length]
}

export const calculator = (correct, newLine) => {
  return String(
    Math.max(
      0,
      Math.round(
        (correct.length - levenshteinDistance(correct, newLine)) /
          correct.length *
          100
      )
    )
  )
}
