function solution(left, right) {
    let res = 0;
   
    for (let i = left; i <= right; i++) {
        // 주어진 값이 정수인지 판별
        // 특정수의 제곱근을 했을때 결과값이 정수라면 약수의 갯수가 홀수 -> why? 자기자신을 제곱하는 수가 1개 추가되므로
        if (Number.isInteger(Math.sqrt(i))) {
            res -= i;
        } 
        else {
            res += i;
        }
    }
    
    return res;
}