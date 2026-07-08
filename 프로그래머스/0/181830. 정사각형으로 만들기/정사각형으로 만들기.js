// 행이 많은 경우 -> 열 추가
// 열이 많은 경우 -> 행 추가
// 같은 경우 -> 그대로 리턴
function solution(arr) {
    const rowCnt = arr.length
    const colCnt = arr[0].length
    
    return rowCnt > colCnt 
        ? arr.map(row => [...row, ...Array(rowCnt - colCnt).fill(0)])
        : colCnt > rowCnt 
            ? [...arr, ...Array(colCnt - rowCnt).fill(0).map(() => Array(colCnt).fill(0))]
            : arr
}