function solution(s){
    let answer = [];

    for(let i = 0; i < s.length; i++) {
        if(answer[answer.length - 1] === '(' && s[i] === ')') answer.pop();
        else answer.push(s[i]);
    }

    return !answer.length;
}