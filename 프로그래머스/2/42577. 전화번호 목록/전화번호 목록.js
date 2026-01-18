function solution(phone_book) {
    // 문자열 기준 정렬
    phone_book.sort()
    
    // 인접한 번호끼리만 비교
    for (let i = 0; i < phone_book.length - 1; i++) {
        const current = phone_book[i]
        const next = phone_book[i + 1]
        
        if (next.startsWith(current)) return false
    }

    return true
}