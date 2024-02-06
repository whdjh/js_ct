function solution(s) {
    let res_arr = [];
    let s_str = s; 
    s = s.split('');
    
    for(let i = 0; i < s.length; i++) {
        // 중복 문자가 없으면 -1을 반환
        let res = -1; 
        
        for(let j = 0; j < i; j++) {
            if(s[i] == s[j]) { 
                // 기준 인덱스에 비교 인덱스를 뺀 값
                res = i - s_str.substr(0, i).lastIndexOf(s[j]); 
            }    
        }
        // 가장 큰 인덱스 배열에 저장
        res_arr.push(res);
    }  
    return res_arr;
}