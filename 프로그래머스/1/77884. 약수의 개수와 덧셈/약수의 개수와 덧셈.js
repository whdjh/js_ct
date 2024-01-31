function solution(left, right) {
    let res = 0;
   
    for (let i = left; i <= right; i++) {
        // 주어진 값이 정수인지 판별
        if (Number.isInteger(Math.sqrt(i))) {
            res -= i;
        } 
        else {
            res += i;
        }
    }
    
    return res;
}