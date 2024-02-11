function solution(babbling) {
    const pron = ["aya", "ye", "woo", "ma"];
    let cnt = 0;
    
    for(let i = 0; i < babbling.length; i++) {
        let babble = babbling[i];
        
        for(let j = 0; j < pron.length; j++) {
            // 같은 발음하는 경우
            if(babble.includes(pron[j].repeat(2))) break;
        babble = babble.split(pron[j]).join(" ");
        }
        if(babble.split(" ").join("").length ==- 0) cnt += 1;
    }
    return cnt;
}