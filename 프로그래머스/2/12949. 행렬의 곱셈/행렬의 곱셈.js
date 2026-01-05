// (arr1[0, 0] * arr2[0, 0]) + (arr1[0, 1] * arr2[1, 0]) + (arr1[0, 2] * arr2[2, 0])

function solution(arr1, arr2) {
    const res = []

    for(let i = 0; i < arr1.length; i++) {
        let tmp = []
        for(let j = 0; j < arr2[0].length; j++) {
            let sum = 0
            for(let k = 0; k < arr2.length; k++) {
                sum += arr1[i][k] * arr2[k][j]
            }
            tmp.push(sum)
        }
        res.push(tmp)
    }
    return res
}