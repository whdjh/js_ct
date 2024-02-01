function solution(arr1, arr2) {
    let res = [[]];
    
    for (let i = 0; i < arr1.length; i++) {
        res[i] =[];
        
        for(let j = 0; j < arr1[i].length; j++) {
            res[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return res;
}