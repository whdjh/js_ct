function solution(s) {
    let res = same_words = dif_words = 0;
    let tmp = '';
    let flag = true;
    
    for(let i = 0; i < s.length; i++) {
        if(flag) {
            tmp = s[i];
        }
        if(tmp === s[i]) {
            same_words++;
            flag = false;
        }
        else {
            dif_words++;
        }
        if(same_words === dif_words) {
            res++;
            same_words = dif_words = 0;
            flag = true;
        }
    }
    return same_words === 0 & dif_words === 0 ? res : res + 1;
}