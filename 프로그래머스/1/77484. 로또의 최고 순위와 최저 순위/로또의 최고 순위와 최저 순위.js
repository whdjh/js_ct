function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1]
    const matchedCnt = lottos.filter(num => win_nums.includes(num)).length
    const hiddenCnt = lottos.filter(num => num === 0).length

    return [rank[matchedCnt + hiddenCnt], rank[matchedCnt]]
}