function gcd(a, b){
	return b === 0 ? a : gcd(b, a % b)
}

function solution(numer1, denom1, numer2, denom2) {    
    const resultNumer = (numer1 * denom2) + (numer2 * denom1)
    const resultDenom = denom1 * denom2
    
    const finalGcd = gcd(resultNumer, resultDenom)
    
    return [resultNumer / finalGcd, resultDenom / finalGcd]
}