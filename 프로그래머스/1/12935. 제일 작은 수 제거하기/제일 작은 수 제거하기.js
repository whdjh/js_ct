function solution(arr) {
    let res = [];
    if(arr.length <= 1) {
        return [-1];
    }
    else {
    // splice(시작인덱스, 몇번째까지(0 ~), 뭘로 바꿔?)
    // indexOf 함수는, 문자열(string)에서 특정 문자열(searchvalue)을 찾고, 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    res =  arr;
    }
    return res;
}