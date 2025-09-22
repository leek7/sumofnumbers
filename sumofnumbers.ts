export function sumFor(numbers: number[]): number {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i]
    }
    console.log("sumFor:", total)
    return total
  }
  
  export function sumWhile(numbers: number[]): number {
    let total = 0
    let i = 0
    while (i < numbers.length) {
      total += numbers[i]
      i++
    }
    console.log("sumWhile:", total)
    return total
  }
  
  export function sumRecursion(numbers: number[]): number {
    function helper(index: number): number {
      if (index >= numbers.length) {
        return 0
      }
      return numbers[index] + helper(index + 1)
    }
    const total = helper(0)
    console.log("sumRecursion:", total)
    return total
  }
  
  export function sumTheFunctionalWay(numbers: number[]): number {
    const total = numbers.reduce((acc, val) => acc + val, 0)
    console.log("sumTheFunctionalWay:", total)
    return total
  }
  
  const testArray = [1, 2, 3, 4]
  sumFor(testArray)
  sumWhile(testArray)
  sumRecursion(testArray)
  sumTheFunctionalWay(testArray)
  