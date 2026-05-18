// aya, ye, woo, ma가 최대 1번 등장(소문자)
function solution(babbling) {
    let cnt = 0
    
    for(let i = 0; i < babbling.length; i++) {
        if(babbling[i] !== "") {
            let tmp = babbling[i]
                .replace("aya", " ")
                .replace("ye", " ")
                .replace("woo", " ")
                .replace("ma", " ")
            tmp = tmp.split(" ").join("")
            if(tmp == "") cnt++
        }
    }
    return cnt
}