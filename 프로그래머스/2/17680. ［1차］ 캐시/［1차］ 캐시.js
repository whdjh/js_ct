function solution(cacheSize, cities) {
    // 캐시 크기가 0이면 전부 miss
    if (cacheSize === 0) return cities.length * 5
    

    let cache = []
    let time = 0

    for (let city of cities) {
        city = city.toLowerCase()

        const index = cache.indexOf(city)

        if (index !== -1) {
            // cache hit, 기존 위치 제거후 가장 최근 사용으로 이동
            cache.splice(index, 1)
            cache.push(city)
            time += 1
        } else {
            // cache miss, LRU 제거
            if (cache.length >= cacheSize) cache.shift()
            
            cache.push(city)
            time += 5
        }
    }

    return time
}
