function solution(s) {
    let resP = 0;
    let resY = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "p" || s[i] === "P") {
            resP += 1;
        }
        else if(s[i] === "y" || s[i] === "Y") {
            resY += 1;
        }
        else {
            continue;
        }
    }
    
    if(resP === resY) {
        return true;
    }
    else {
        return false;
    }
}