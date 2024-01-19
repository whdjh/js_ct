function solution(num_list) {
    // filter 메서드는 배열의 각 원소에 대해 주어진 함수를 실행하고, 그 함수가 true를 반환하는 원소만으로 이루어진 새 배열을 생성
    const a = num_list.filter(n => (n % 2 === 1))
    const b = num_list.filter(n => (n % 2 === 0))
    
    return Number(a.join('')) + Number(b.join(''))
}