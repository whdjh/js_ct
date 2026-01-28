function solution(priorities, location) {
  // 우선순위 비교용 정렬 배열
  const sorted = [...priorities].sort((a, b) => b - a)


  // 실제 큐
  const queue = priorities.map((p, i) => ({ p, i }))

  let count = 0

  while (queue.length) {
    const current = queue.shift()

    // 현재 프로세스가 가장 높은 우선순위라면 실행
    if (current.p === sorted[0]) {
      count++
      sorted.shift()

      // 우리가 찾는 프로세스라면 종료
      if (current.i === location) return count 
    } else queue.push(current)
  }
}
