function solution(array) {
    const counts = new Array(1000).fill(0)
    array.forEach(num => counts[num]++)

    const maxCount = Math.max(...counts)
    const mode = counts.indexOf(maxCount)

    return counts.lastIndexOf(Math.max(...counts)) === mode ? mode : -1
}