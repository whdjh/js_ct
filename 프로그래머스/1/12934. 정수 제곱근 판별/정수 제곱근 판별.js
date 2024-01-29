function solution(n) {
    let a = Math.sqrt(n);
    let res = 0;
    
    if (a % 1 !== 0) { 
        res = -1;
    } 
    else {
        res = Math.pow(a + 1, 2);
    }
    
    return res
}