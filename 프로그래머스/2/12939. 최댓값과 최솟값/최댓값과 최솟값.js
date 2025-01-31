function solution(s) {
    let answer = '';
    const tmp = s.split(" ");
    let max = Math.max(...tmp);
    let min = Math.min(...tmp);
    
    return min + " " + max;
}