function solution(s) {
    let answer = '';
    let tmp = s.split(' ');
    
    let res = tmp.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
    
    answer = res.join(' ');
    
    return answer;
}