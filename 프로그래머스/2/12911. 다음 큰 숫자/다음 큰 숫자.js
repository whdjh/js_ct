function solution(n) {
    let answer = n.toString(2).split('1').length;
    while(1) {
        n++;
        if(n.toString(2).split('1').length === answer) return n;
    }
}