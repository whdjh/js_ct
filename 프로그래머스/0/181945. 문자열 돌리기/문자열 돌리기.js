const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
	str = input[0]
	for(let i = 0; i < str.length; i++) {
		console.log(str[i]);
	}
	// forEach() : 배열 순회하기
	// str.forEach(function(현재값, 인덱스, 배열)); 인덱스와 배열은 선택사항)
	// [...str].forEach(c => console.log(c))
});