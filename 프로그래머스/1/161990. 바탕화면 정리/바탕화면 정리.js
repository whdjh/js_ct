function solution(wallpaper) {
    let [minX, minY, maxX, maxY] = [50, 50, 0, 0]
    
    wallpaper.forEach((row, r) => {
        [...row].forEach((ch, c) => {
            if (ch === '#') {
                minX = Math.min(minX, r)
                minY = Math.min(minY, c)
                maxX = Math.max(maxX, r + 1)
                maxY = Math.max(maxY, c + 1)
            }
        })
    })

    return [minX, minY, maxX, maxY]
}