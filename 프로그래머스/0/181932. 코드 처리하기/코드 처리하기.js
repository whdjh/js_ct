function solution(code) {
    let mode = 0;
    let ret = "";
    for(let idx = 0; idx < code.length; idx++) {
        if(code[idx] === "1") {
            mode === 0 ? mode = 1 : mode = 0;
        }
        if(mode === 0) {
            (code[idx] !== "1") && ((idx % 2 === 0) && (ret += code[idx]));
        }
        else {
            (code[idx] !== "1") && ((idx % 2 !== 0) && (ret += code[idx]));
        }
    }
     return ret === "" ? "EMPTY" : ret;
}

// 생각해보면 좋은 풀이
/*
function solution(a, d, included) {
    return included.reduce((acc, flag, i) => {
        return flag ? acc + a + d * i : acc
    }, 0)
}
*/
// arr.reduce(callback[, initialValue])
// 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환하는 함수
// 구성요소
// accumulator - 반환값 누적
// currentValue - 배열의 현재 요소
// index(선택) - 배열의 현재 요소의 인덱스
// array(선택) - 호출할 배열