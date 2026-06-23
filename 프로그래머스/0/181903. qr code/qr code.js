// i=0부터 시작하는 for문 구성
// i % q === r -> answer += code[i]
function solution(q, r, code) {
    let answer = ''
    
    for(let i = 0; i < code.length; i++) {
        if(i % q === r) answer += code[i] 
    }
    
    return answer
}