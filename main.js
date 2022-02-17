const add = (numb1, numb2) => {
  const sum = numb1 + numb2
  return sum
}

const subtract = (numb1, numb2) => {
  const difference = numb1 - numb2
  return difference
}

const divide = (numb1, numb2) => {
  const remainder = numb1 / numb2
  return remainder
}

const multiply = (numb1, numb2) => {
  const product = numb1 * numb2
  return product
}

const square = (number) => {
  const root = number / number
  return root
}

const solveProblem = () => {
  let fourLegs = divide(60,4)
  let twoLegs = subtract (60, fourLegs)
  let fourLegAnimals = divide (fourLegs, 4)
  let twoLegAnimals = divide (twoLegs, 2)
  let answer = add (fourLegAnimals, twoLegAnimals)
  console.log(answer)
}

solveProblem()