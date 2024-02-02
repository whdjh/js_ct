function solution(s) {
    let res = '';
    let words = s.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            if(j % 2 === 0) res += words[i][j].toUpperCase();
            else res += words[i][j].toLowerCase();
        }
        
        if (i < words.length -1) res += ' ';
    }
    
    return res;
}