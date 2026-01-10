function solution(n,a,b) {
    let round = 0
    
    while (1) {
        // 다음 경기에 만나는 순간
        if (Math.abs(a - b) === 1 && Math.max(a, b) % 2 === 0) {
            return round + 1
        }
        
        a = Math.ceil(a / 2)
        b = Math.ceil(b / 2)
        round++
    }
}