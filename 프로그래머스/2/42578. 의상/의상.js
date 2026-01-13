// 옷종류만 사용하면됨
// 옷종류는 갯수의 + 1: why?안입는 경우
// 그치만 모두 안입는 경우가 있으므로 -1이 진행
function solution(clothes) {
    const map = {}
    let answer = 1
    
    // 1. clothes를 돌면서 '종류별 개수'를 센다
    for(let i = 0; i < clothes.length; i++) {
        const type = clothes[i][1]
        
        if(map[type]) map[type] += 1
        else map[type] = 1
    }
    
    for (const type in map) {
      const count = map[type]
      // 2. 각 종류마다 (개수 + 1)을 하고 모든 종류의 선택지를 곱한다
      answer *= (count + 1)
    }

    // 3. 전부 안 입는 경우 1가지를 제거
    return answer - 1
}