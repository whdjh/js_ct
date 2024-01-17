const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    // 결과를 담을 변수 result
    let result = ""; 
    
    for(let i = 0; i < str.length; i++) {
        // 문자열.charCodeAt(인덱스) : 문자 > 아스키
        let ascii = str.charCodeAt(i);
        
        if(ascii >= 65 && ascii <= 90) {
            ascii += 32;
        } 
		else {
            ascii -= 32;
        }
        
        // String.fromCharCode(아스키) : 아스키 > 문자
        result += String.fromCharCode(ascii);
    }
    console.log(result);
});

/* 이렇게도 연습해보자..
rl.on('line', (line) => {
  input = [...line];
}).on('close', () => {
  console.log(
	// 1. 배열에 대해 map()을 사용해 각 문자를 변환
	// 2. 정규표현식을 /패턴/.test(문자열)을 사용해 현재 문자가 소문자인지 검사
	// 3. 만약 소문자라면 대문자로 변환하고 대문자라면 소문자로 변환 
	// a ? b : c a는 조건, 조건이 참이면 b, 거짓이면 c
	// 4. 배열.join(구분자)를 사용해 지정된 구분자로 하나의 문자열 사용
    input.map((char) => (/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())).join(''),
  );
});
*/