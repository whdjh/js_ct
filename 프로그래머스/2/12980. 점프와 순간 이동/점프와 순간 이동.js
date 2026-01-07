// N에서부터 0으로 가는걸로 생각
// N이 짝수라면 무조건 순간이동, N이 홀수라면 N - 1
function solution(n) {
    let res = 0
    
    while(n > 0) {
        if(n % 2 == 0) {
            n /= 2
        }
        else {
            n -= 1
            res++
        }
    }
    return res
}