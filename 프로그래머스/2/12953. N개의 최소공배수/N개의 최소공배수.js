function solution(arr) {
    var answer = 1;
    for(let i = 0; i < arr.length; i++) {
        answer = LCM(answer, arr[i]);
    };
    return answer
}

const GCD = (a, b) => {
    return b === 0 ? a : GCD(b, a % b);
}

const LCM = (a, b) => {
    return (a * b) / GCD(a, b);
}