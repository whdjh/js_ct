function solution(s) {
    let ans = "";
    a = s.length / 2
    
    
    if(s.length % 2 === 0) {
        return `${s[a - 1]}${s[a]}`;
    }
    else {
        return s[a - 0.5];
    }
}