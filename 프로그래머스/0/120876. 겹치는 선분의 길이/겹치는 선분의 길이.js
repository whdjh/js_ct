function solution(lines) {
    let answer = 0
    let count = {}
    
    // lines 배열 순회
    for (let i = 0; i < lines.length; i++) {
        for (let j = lines[i][0]; j < lines[i][1]; j++) {
            count[j] = (count[j] || 0) + 1
        }
    }
    
    // 카운트가 2 이상인 구간 개수    
    for (let key in count) {
        if (count[key] >= 2) answer++    
    }
    
    return answer
}