function solution(a, b) {
    str1 = `${a}` + `${b}`;
    str2 =  `${b}`+ `${a}`;
    
    if (Number(str1) > Number(str2)) {
        return Number(str1);
    }
    else if (str1 < str2) {
        return Number(str2);
    }
    else { 
        return Number(str1);
    }
}