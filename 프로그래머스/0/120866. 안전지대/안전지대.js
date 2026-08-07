function solution(board) {
    const n = board.length
    const dangerMap = Array.from({ length: n }, () => Array(n).fill(false))
    let answer = 0

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === 1) {
                // 지뢰 주변 (r-1 ~ r+1, c-1 ~ c+1) 탐색
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        const nr = r + dr
                        const nc = c + dc

                        // 배열 경계 체크 (0 이상, n 미만) -> 위험 지역
                        if (nr >= 0 && nr < n && nc >= 0 && nc < n) dangerMap[nr][nc] = true
                    }
                }
            }
        }
    }   
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (!dangerMap[r][c]) answer++
        }
    }
    return answer
}