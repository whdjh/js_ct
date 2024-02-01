function solution(price, money, count) {
    let sum = 0;
    
    for(let i = 1; i <= count; i++) {
        sum += price * i;
    }
    
    let res = sum - money;
    
    if(res > 0) return res;
    else return 0;
}