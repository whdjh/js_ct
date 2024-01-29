function solution(absolutes, signs) {
    let res = 0;
    
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            res += absolutes[i];
        } 
        else {
            res -= absolutes[i];
        }
    }
    
    return res
}