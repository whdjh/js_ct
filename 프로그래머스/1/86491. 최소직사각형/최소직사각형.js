function solution(sizes) {
    let arr = [0, 0];
    
    for(let i = 0; i < sizes.length; i++) {
        // 왼쪽이 큰 값, 오른쪽이 작은 값
        let [big_num, small_num] = sizes[i].sort((a, b) => a - b);
        
        if(big_num > arr[0]) arr[0] = big_num;
        if(small_num > arr[1]) arr[1] = small_num;
    }
    return arr[0] * arr[1]
}