function solution(A,B){
    let answer = 0;
    // A의 최소 -> B의 최대
    // A의 최대 -> B의 최소
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    for(let i = 0; i < A.length; i++) answer += A[i] * B[i];

    return answer;
}