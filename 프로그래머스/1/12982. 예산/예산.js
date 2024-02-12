function solution(d, budget) {
    let res = 0;
    let sum = 0;
    
    d.sort((a, b) => a - b);
    
    for(let i = 0; i < d.length; i++) {
        res++;
        sum += d[i];
        
        if(sum > budget) res--;
    }
    
    return res;
}