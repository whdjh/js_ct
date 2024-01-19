function solution(a, d, included) {
    const arr = [a]
    for(let i = 1; i < included.length; i++) {
        arr[i] = arr[i - 1] + d
    }
    return arr.reduce((acc, cur, idx) => {
        return included[idx] ? acc + cur : acc
    }, 0)
}

// arr.reduce(callback[, initialValue])
// 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환하는 함수
// 파라미터
// accumulator - 반환값 누적
// currentValue - 배열의 현재 요소
// index(선택) - 배열의 현재 요소의 인덱스
// array(선택) - 호출할 배열