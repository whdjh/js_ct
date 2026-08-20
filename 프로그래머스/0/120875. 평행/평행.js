function solution(dots) {
    // 구조 분해
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots
    
    // 1-2 & 3-4 / 1-3 & 2-4 / 1-4 & 2-3
    if (
        (y2 - y1) * (x4 - x3) === (y4 - y3) * (x2 - x1) ||
        (y3 - y1) * (x4 - x2) === (y4 - y2) * (x3 - x1) ||
        (y4 - y1) * (x3 - x2) === (y3 - y2) * (x4 - x1)
    ) return 1
    
    return 0
}