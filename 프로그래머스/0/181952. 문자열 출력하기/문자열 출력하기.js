// readline모듈은 사용자의 입력을 console.log로 출력할 수 있도록 해주는 역할
// 모듈을 불러오기 위해서는 require("모듈 이름")을 선언하고, 변수를 선언하여 저장
const readline = require('readline');
// readline interface 객체 만들기
// 1. 정의한 변수를 이용해 readline 인터페이스 객체를 하나 만듬
// 2. readline interface 객체를 이용해 콘솔에서 표준 입출력을 처리
// 3. createInterface()를 이용해 객체를 만듬
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// input을 받음
let input = [];

// on()은 생성한 변수 rl 객체로 입출력과 관련된 여러 이벤트 처리를 할 수 있음
// line 이벤트는 사용자가 콘솔에 입력을 할 때 발생
// 또 다른 이벤트로는 close는 readable스트림 종료를 제어함
rl.on('line', function(line) {
    input = [line];
}).on('close',function() {
    str = input[0];
    console.log(str);
});