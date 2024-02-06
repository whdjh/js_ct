function solution(a, b, n) {
    let res = 0;
    
    while(n >= a) {
        res += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + n % a;
    }
    
    return res;
}