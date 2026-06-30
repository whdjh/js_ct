function solution(common) {
    const [first, second, third] = common

    // 등차가 아니면 무조건 등비
    return (second - first) === (third - second) 
        ? common[common.length - 1] + (second - first) 
        : common[common.length - 1] * (second / first)
}