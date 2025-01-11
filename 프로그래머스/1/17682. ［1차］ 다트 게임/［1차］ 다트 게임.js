function solution(dartResult) {
    let answer = [];
    let score = 0;
    let tmp = 0;

    for(let i = 0; i < dartResult.length; i++) {
        // 숫자 case
        if(dartResult[i] >= 0 && dartResult[i] <= 9) {
            // 숫자가 10일 경우
            if(dartResult[i] == 1 && dartResult[i + 1] == 0) {
                tmp = 10;
                i++;
            }
            else tmp = dartResult[i];
        }
        
        // 보너스 case
        else if(dartResult[i] === 'S') answer.push(tmp);
        else if(dartResult[i] === 'D') answer.push(tmp ** 2);
        else if(dartResult[i] === 'T') answer.push(tmp ** 3);
        
        // 옵션 case
        else if(dartResult[i] === '#') answer[answer.length - 1] *= -1;
        else if(dartResult[i] === '*') {
            answer[answer.length - 1] *= 2;
            answer[answer.length - 2] *= 2;
        }
    }
    
    for(let i = 0; i < answer.length; i++) score += Number(answer[i]);
    
    return score;
}