function solution(numbers) {
    const tmp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            tmp.push(numbers[i] + numbers[j])
        }
    }

    const res = [...new Set(tmp)]

    return res.sort((a, b) => a - b)
}