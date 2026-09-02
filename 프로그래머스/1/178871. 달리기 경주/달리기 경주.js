function solution(players, callings) {
    const position = new Map()
    players.forEach((player, i) => position.set(player, i))

    callings.forEach(called => {
        const current = position.get(called)
        const prev = players[current - 1]

        players[current - 1] = called
        players[current] = prev

        position.set(called, current - 1)
        position.set(prev, current)
    })

    return players
}