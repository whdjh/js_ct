function solution(arr, queries) {
    var answer = [];
    for(let [s, e, k] of queries) {
        //v -> 요소값, i-> 순회하는 인덱스
        let temp = arr.filter((v, i) => (i >= s && i <= e && v > k)).sort((a, b) => a - b)[0];
        answer.push(temp ? temp : -1)
    }
    return answer
}