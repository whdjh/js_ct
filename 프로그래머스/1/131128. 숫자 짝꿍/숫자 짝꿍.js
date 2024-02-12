function solution(X, Y) {
    let res = "";
    X = X.split('');
    Y = Y.split('');

    
    for(let i = 0; i < 10; i++) {
        // X 안에 i가 몇개 있는지 알아냄
        let x_cnt = X.filter(x => Number(x) === i).length; 
        // Y 안에 i가 몇개 있는지 알아냄
        let y_cnt = Y.filter(y => Number(y) === i).length; 
        
        // 두개의 숫자중 더 적은게 겹치는 숫자 
        res += i.toString().repeat(Math.min(x_cnt, y_cnt)); 
    } 
    
    // 겹치는게 없을 경우
    if(res === "") { 
        return "-1";
    }
    
    // 전부 0 밖에 없다면
    else if(res.split('').filter(x => x === "0").length === res.length) {  
        return "0";
    }
    
    // 내림차순 정렬
    else {
        return res.split('').sort().reverse().join(''); 
    }
}