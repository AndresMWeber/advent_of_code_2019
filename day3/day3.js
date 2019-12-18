// Part One
const { data } = require('./input.json')

const op_table = {
    1: (a, b, i, arr) => arr[i] = arr[a] + arr[b],
    2: (a, b, i, arr) => arr[i] = arr[a] * arr[b],
}

const process_operators = integerArray => {
    for (let i = 0; i < integerArray.length; i += 4) {
        let [intcode, ...program] = integerArray.slice(i, i + 4)
        try {
            op_table[intcode](program[0], program[1], program[2], integerArray)
        } catch (e) {
            if (intcode == 99) break;
        }
    }
    return integerArray
}

console.log(process_operators([...data])[0])

// Part Two
const findNounAndVerb = () => {
    for (let noun = 0; noun <= 99; noun++) {
        for (let verb = 0; verb <= 99; verb++) {
            let input = [...data]
            input[1] = noun
            input[2] = verb
            if (process_operators(input)[0] === 19690720) return 100 * noun + verb
        }
    }
    return false
}
console.log(findNounAndVerb())