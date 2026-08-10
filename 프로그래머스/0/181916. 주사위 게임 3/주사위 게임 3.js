function solution(a, b, c, d) {
    let arr = [a, b, c, d].sort((x, y) => x - y)
    
    // [0] == [3]
    if (arr[0] === arr[3]) return 1111 * arr[0]
    
    // [0] == [2] or [1] == [3]
    else if (arr[0] === arr[2] || arr[1] === arr[3]) return (10 * arr[1] + (arr[0] === arr[2] ? arr[3] : arr[0])) ** 2
    
    // [0] == [1] && [2] == [3]
    else if (arr[0] === arr[1] && arr[2] === arr[3]) return (arr[0] + arr[2]) * Math.abs(arr[0] - arr[2])
    
    // [0] == [1] or [1] == [2] or [2]==[3] 중 하나만 해당
    else if (arr[0] === arr[1]) return arr[2] * arr[3]
    else if (arr[1] === arr[2]) return arr[0] * arr[3]
    else if (arr[2] === arr[3]) return arr[0] * arr[1]
    
    else return arr[0] 
}