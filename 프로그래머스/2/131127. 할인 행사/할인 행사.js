// XYZ마트 -> 회원권판매, 10일간 유지
// 매일 한가지 상품 할인
// 할인 상품은 하루에 하나만 구매가능
// want: 원하는 제품
// number: 원하는 제품의 수량
// discount: 할인 제품들 배열 -> 14가지가 들어옴
// 모두 할인 받을 수 있는 회원등록 날짜의 총 일수를 return, 단 없다면 0을 return
function solution(want, number, discount) {
    const required = new Map();
    let cnt = 0;
    
    // [...required] 로 출력하면 매핑되어있음
    want.forEach((item, i) => {
        required.set(item, number[i]);
    });
    
    for(let i = 0; i <= discount.length - 10; i++) {
        const window = discount.slice(i, i + 10);
        const windowMap = new Map();
        
        window.forEach((item) => {
            windowMap.set(item, (windowMap.get(item) || 0) + 1)
        })

        let flag = true;
        required.forEach((reqCount, item) => {
            if ((windowMap.get(item) || 0) < reqCount) {
                flag = false;
            }
        });
  
        if (flag) cnt++;
    }
    
    return cnt;
}