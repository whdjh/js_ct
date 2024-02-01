process.stdin.setEncoding('utf8');
// 입력받은 숫자를 'data에 받는다'
process.stdin.on('data', data => { 
    // data(입력받은 숫자)를 배열로 변경
    const n = data.split(" "); 
    // a는 한줄에대한 별의 갯수, b는 몇줄 출력
    const a = Number(n[0]), b = Number(n[1]);
    for(let i = 0; i < b; i++) {
        let str = "";
        
        for(let j = 0; j < a; j++) {
            str += "*";
        }
    console.log(str);
    }
});