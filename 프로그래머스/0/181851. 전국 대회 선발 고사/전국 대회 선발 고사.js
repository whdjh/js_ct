// map을 활용해 [학생 번호, 등수] 형태로 데이터를 가공
// filter를 활용해 attendance가 true인 항목만
// sort를 활용해 등수(1번째 인덱스 값) 기준으로 정렬하기
function solution(rank, attendance) {
    const candidates = rank
    .map((r, i) => [i, r])
    .filter(([i, r]) => {
        return attendance[i]
    })
    
    const sortedCandidates = candidates.sort((a, b) => a[1] - b[1])
    
    const a = sortedCandidates[0][0]
    const b = sortedCandidates[1][0]
    const c = sortedCandidates[2][0]

    return 10000 * a + 100 * b + c
}