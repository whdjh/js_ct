function solution(n, words) {
    const usedWords = new Set()
    // 첫번째 단어 주입(비교를 위해)
    usedWords.add(words[0])
    
    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i]
        const lastWord = words[i - 1]
        
        // 조건: 중복X or 끝말을 이어야함
        // at(-1): 마지막 글자
        if(usedWords.has(currentWord) || lastWord.at(-1) !== currentWord[0]) {
            return [(i % n) + 1, Math.floor(i / n) + 1]
        }
        
        usedWords.add(currentWord)

    }    
    return [0, 0]
}