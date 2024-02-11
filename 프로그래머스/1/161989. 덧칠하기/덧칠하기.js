function solution(n, m, sections) {
    let res = 0;
    let painted = 0;
    
    // for of 반복문은 ES6에 추가된 새로운 컬렉션 전용 반복 구문
    // for of 구문을 사용하기 위해선 컬렉션 객체가 
    // [Symbol.iterator] 속성을 가지고 있어야함.(직접 명시 가능)
    // 파이썬에서의 for문과 비슷하게 생각하면 될듯
    for(let section of sections) {
        if(painted < section) {
            res++;
            painted = section + m - 1;
        }
    }
    
    return res;
}