function solution(n, arr1, arr2) {
    let new_arr1 = [];
    let new_arr2 = [];
    let answer = [];
    
    for(let x of arr1) {
        let tmp = [];
        x = x.toString(2);
        
        for(let i = 0; i < n - x.length; i++) tmp.push(0);
        
        tmp.push(x);
        new_arr1.push(tmp.join(''));
    }
    
    for(let x of arr2) {
        let tmp = [];
        x = x.toString(2);
        
        for(let i = 0; i < n - x.length; i++) tmp.push(0);
        
        tmp.push(x);
        new_arr2.push(tmp.join(''));
    }
    
    for(let i = 0; i < n; i++) {
        let str = '';
        
        for(let j = 0; j < n; j++) {
            if(new_arr1[i][j] === '0' && new_arr2[i][j] === '0') str += ' ';
            else str += '#';
        }
        
        answer.push(str);
    }
    
    return answer;
}