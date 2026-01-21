function solution(topping) {
    let answer = 0

    // 오른쪽 토핑 개수 Map 만들기
    const right = new Map()
    for (const t of topping) right.set(t, (right.get(t) || 0) + 1)
    

    // 왼쪽 토핑 Map
    const left = new Map()
    // 자르는 위치를 왼쪽부터 이동
    for (let i = 0; i < topping.length - 1; i++) {
        const t = topping[i]

        // 왼쪽에 추가
        left.set(t, (left.get(t) || 0) + 1)

        // 오른쪽에서 제거
        right.set(t, right.get(t) - 1)
        if (right.get(t) === 0) right.delete(t)
        

        // 서로 다른 토핑 종류 수 비교
        if (left.size === right.size) answer++
        
    }

    return answer
}
