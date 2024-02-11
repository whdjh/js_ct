function solution(n) {
    let res = 0;
    const flag = new Array(n + 1).fill(true); 
    const last = Math.sqrt(n) 
    
    for(let i = 2; i <= last; i++) {
        // 소수 아닌건 건너뜀
        if(flag[i] === false) continue; 
        
        // 소수가 아니면 false
        for(let k = i * i; k <= n; k += i) {
            flag[k] = false;
        }
    }
    
    // 소수 갯수
    for(let i = 2; i <= n; i++) {
        if(flag[i] === true) res++;
    }
    
    return res;
}