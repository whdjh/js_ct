function solution(elements) {
  const extended = elements.concat(elements);
  const answer = new Set();

  for (let k = 1; k <= elements.length; k++) {
    let sum = 0;
      
    for (let i = 0; i < k; i++) {
      sum += extended[i];
    }

    for (let start = 0; start < elements.length; start++) {
      answer.add(sum);
      sum = sum - extended[start] + extended[start + k];
    }
  }

  return answer.size;
}
