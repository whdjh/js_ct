function solution(name, yearning, photo) {
    const nameAndYearning = {};
    const res = []  
  
    for(let i = 0; i<name.length; i++) {
         nameAndYearning[name[i]] = yearning[i]
    }  
    
    for(let i = 0; i < photo.length; i++) {
        let point = 0;
        for(let j = 0; j < photo[i].length; j++) {
            point += nameAndYearning[photo[i][j]] || 0
        } 
        res.push(point);
    } 
    
    return res 
}