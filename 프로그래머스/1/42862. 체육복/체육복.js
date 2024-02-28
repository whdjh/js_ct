function solution(n, lost, reserve) {    
    const suit = Array(n).fill(1);
    
    // 잃어버림
    lost.map((lost) => { suit[lost - 1] = 0 });
    
    // 여분을 가져옴
    reserve.map(reserve => {suit[reserve - 1] += 1});

    for(let i = 0; i < n; i++){
        // 앞사람한테 받음
        if(suit[i] === 0 && suit[i  - 1] === 2) {
            suit[i] = 1;
            suit[i - 1] = 1;
        }
        // 뒷사람한테 받음
        else if(suit[i] === 0 && suit[i + 1] === 2){
            suit[i] = 1;
            suit[i + 1]=1;
        }
    }
    
    return suit.filter(c => c > 0).length;
}