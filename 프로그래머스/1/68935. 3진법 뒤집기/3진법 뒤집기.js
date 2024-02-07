function solution(n) {
    // Number.toString([radix]) : 숫자를 문자열로 변환
    // 진법을 나타내는 2~36 사이의 정수값을 인수로 전달
    // 인수 생략시 기본값 10진법
    let res = n.toString(3).split("").reverse().join("");
    
    // parseInt(string, radix) : 전달 받은 문자열을 전달 받은 radix로 분석한 정수를 반환
    return parseInt(res, 3);
}