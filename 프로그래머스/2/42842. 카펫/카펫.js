// 카펫의 가로 세로 최소 길이는 3부터 시작
// x(가로) * y(세로)
// (brown + yellow) / x = y
// (x-2) * (y-2) === yellow
function solution(brown, yellow) {
    let answer = [];

    for(var y = 0; y <= (brown + yellow); y++) {
        var x = Math.floor((brown + yellow) / y);
        
        if((x - 2) * (y - 2) === yellow) break;
    }
    
    return [x, y];
}