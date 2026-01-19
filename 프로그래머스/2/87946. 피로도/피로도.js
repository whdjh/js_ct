function solution(k, dungeons) {
    let answer = 0
    const flags = Array(dungeons.length).fill(false)

    function dfs(current, count) {
        // 지금까지 온 개수로 최대값 갱신
        answer = Math.max(answer, count)

        for (let i = 0; i < dungeons.length; i++) {
            const [need, cost] = dungeons[i]

            // 아직 안 갔고, 갈 수 있으면
            if (!flags[i] && current >= need) {
                flags[i] = true
                dfs(current - cost, count + 1)
                flags[i] = false
            }
        }
    }

    dfs(k, 0)
    
    return answer
}
