function solution(s, skip, index) {
    let res = '';
    let arr = s.split("");
    
    arr.map((item) => {
        let ascii = item.charCodeAt();
        
        for(let i = 0; i < index; i++) {
            ascii++; 
            if (ascii > 122) ascii = 97;
            
            // fromCodePoint() -> 아스키코드를 해당 문자로 출력해줌.
            while (skip.includes(String.fromCodePoint(ascii))) {
                ascii++;
                if (ascii > 122) ascii = 97;
            }
        }
        res += String.fromCodePoint(ascii);
    });
    
    return res;
}