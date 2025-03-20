function solution(k, tangerine) {
    let answer = 0;
    const max = Math.max(...tangerine);
    let arr = new Array(max + 1).fill(0);
    let current = k;
    let index = 0;
    
    for(let i = 0; i < tangerine.length; i++) arr[tangerine[i]]++;
    
    arr.sort((a, b) => b - a);
    
    while(current > 0) {
        current -= arr[index];
        index++;
    }
    
    return index;
}