function solution(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            arr.push(i);           
        }
    }
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result
}