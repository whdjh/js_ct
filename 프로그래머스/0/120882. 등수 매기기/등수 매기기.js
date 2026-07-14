function solution(score) {
    // 각 학생의 점수 합
    const sums = score.map(student => student[0] + student[1])
    
    // 다른 학생들의 점수 합과 비교하여 나보다 큰 값이 몇 개인지 세어 등수 계산
    return sums.map(currentSum => {
        const countBetterThanMe = sums.filter(sum => sum > currentSum).length
        
        return countBetterThanMe + 1
    })
}