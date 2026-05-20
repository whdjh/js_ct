function solution(chicken) {
    let answer = 0
    let coupons = chicken
    
    // 쿠폰이 10장 이상 있는 동안은 계속 반복
    while (coupons >= 10) {
        let serviceChicken = Math.floor(coupons / 10) // 새로 받은 서비스 치킨
        answer += serviceChicken // 총 서비스 치킨 수에 누적
        
        // 새 쿠폰(서비스 치킨 수) + 바꾸고 남은 자투리 쿠폰
        coupons = serviceChicken + (coupons % 10)
    }
    
    return answer
}