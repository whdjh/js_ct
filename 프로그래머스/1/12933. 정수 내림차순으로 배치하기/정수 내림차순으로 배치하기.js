function solution(n) {
    n = String(n);
    n = n.split('');
    n = n.sort((a, b) => b - a).join('');
    n = Number(n);
    
    return n;
}