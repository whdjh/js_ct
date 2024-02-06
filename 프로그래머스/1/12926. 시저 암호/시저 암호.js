function solution(s, n) {
    let res = '';
    
    for (let i = 0; i < s.length; i++) {
        // charcodeat메서드를 사용하여 아스키코드 값으로 이용
        let sASCII = s.charCodeAt(i)
        
        if (sASCII >= 65 && sASCII <= 90) {
            sASCII += n;
            
            // 소문자 처리
            if (sASCII > 90) {
                sASCII -= 26;
            }
        }
        else if (sASCII >= 97 && sASCII <= 122) {
            sASCII += n;
            
            // 대문자처리
            if (sASCII > 122) {
                sASCII -= 26;
            }
        }
        sString = String.fromCharCode(sASCII);
        //String.fromCharCode로 아스키코드값을 문자열로 
        res += sString;
    }
    return res;
  }