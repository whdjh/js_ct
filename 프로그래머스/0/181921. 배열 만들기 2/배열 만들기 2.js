function solution(l, r) {
    let answer = []
    let startFive = [5]
    
    while (startFive.length > 0) {
        let current = startFive.shift()
        
        // 현재 숫자가 범위를 벗어나면 더 이상 볼 필요 없음
        if (current > r) continue
        
        // l 이상 r 이하 범위에 포함된다면 정답 배열에 추가
        if (current >= l) answer.push(current)
        
        // 다음 자릿수 숫자를 생성
        startFive.push(current * 10)
        startFive.push(current * 10 + 5)
    }
    
    // 조건에 맞는 숫자가 없다면 -1 리턴
    if (answer.length === 0) return [-1]
    
    return answer
}