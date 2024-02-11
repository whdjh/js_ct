function solution(k, m, score) {
    let res = 0;
    
    score.sort((a, b) => b-a);   
    
    let box = Math.floor(score.length / m);

    for(let i = 1; i <= box; i++) {
        res += score[m * i - 1] * m;
    }
    
    return res;
}