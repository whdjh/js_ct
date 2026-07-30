function solution(num, total) {
    let answer = []    
    const firstValue = (total - (num * (num -1) / 2 )) / num
    
    for(let i = firstValue; i < firstValue + num; i++) {
        answer.push(i)
    }
    
    return answer
}