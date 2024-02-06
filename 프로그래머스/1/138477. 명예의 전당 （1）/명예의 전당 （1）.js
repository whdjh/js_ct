function solution(k, score) {
    let stack = [];
    let res = [];
    
    for(let i = 0; i < score.length; i++) {
        stack.push(score[i]);
        stack.sort((a, b) => b - a);
        
        if(stack.length >= k) {
            res.push(stack[k - 1]);
            continue;
        }
        res.push(stack[stack.length - 1]);
    }
    
    return res;
}
