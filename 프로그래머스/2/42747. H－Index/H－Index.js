// 정렬 후, citations[i] ≥ i+1 을 만족하는 가장 큰 i+1이 H-Index
function solution(citations) {
    citations.sort((a, b) => b - a)
    let res = 0
    
    for(let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) res++
        else break
    }
    
    return res
}