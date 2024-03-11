function solution(keymap, targets) {
    const map = new Map();
    let res = [];
    
    for(let i = 0; i < keymap.length; i++) {
        for(let j = 0; j < keymap[i].length; j++) {
            // map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환
            // map.set(key, value) – key를 이용해 value를 저장
            if(!map.has(keymap[i][j])) map.set(keymap[i][j], j + 1);
            // map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환
            else map.set(keymap[i][j], j < map.get(keymap[i][j]) ? j + 1 : map.get(keymap[i][j]));
        }
     }
    
    for(let i = 0; i < targets.length; i++) {
        let tmp = 0;
        
        for(let j = 0; j < targets[i].length; j++) {
            if(!map.has(targets[i][j])) {
                tmp = -1;
                break;
            }
            else { 
                tmp += map.get(targets[i][j]);
            }
        }
        res.push(tmp);
    }
    
    return res;
}