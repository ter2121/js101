function triangle(side) {
  star = '*'
  whitespace = " "
  for (let i = 1; i <= side; i++) {
   console.log(whitespace.repeat(side-i)+star.repeat(i))
  }
}
triangle(9)
