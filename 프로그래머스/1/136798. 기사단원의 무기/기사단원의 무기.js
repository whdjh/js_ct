function solution(number, limit, power) {
    let res = 0;
    
    for(let i = 1; i <= number; i++) {
        let div = 0;
        
        // 약수 구하기
        for(let j = 1; j <= Math.sqrt(i); j++) {
            if(i % j === 0) {
                if(i / j === j) div += 1;
                else div += 2;
            }
            if(div > limit) {
                div = power;
                break;
            }
        }
        res += div;
    }
    
    return res;
}