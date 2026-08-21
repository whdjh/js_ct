function solution(n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0))
    let tmp = 1
    let [top, bottom, left, right] = [0, n - 1, 0, n - 1]

    while (tmp <= n * n) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = tmp
            tmp++
        }
        top++
        
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = tmp
            tmp++
        }
        right--

        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = tmp
            tmp++
        }
        bottom--

        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = tmp
            tmp++
        }
        left++
    }

    return matrix
}