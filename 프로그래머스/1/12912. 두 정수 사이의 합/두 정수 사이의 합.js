function solution(a, b) {
    let res = 0;
    
    if(a >= b) {
        for(let i = b; i <= a; i++) {
            res += i;
        }
    }
    else {
        for(let j = a; j <= b; j++) {
            res += j;
        }
    }
    
    return res;
}