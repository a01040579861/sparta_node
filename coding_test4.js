// 두 정수 사이의 합 구하기
function solution(a, b) {
    var answer = 0; // answer 초기값 0으로 할당
    if (a>=b) { //조건식 a는 b보다 크거나 작다
        for (let i=b; i <= a; i++) { //변수 i는 a보다 크거나 작다
            answer += i; //answer에 i를 더한 후, 그 결괏값을 answer에 대입
        }
    } else {
        for (let j = a; j <= b; j++) { //변수 j는 b보다 크거나 작다
            answer += j; //answer에 j를 더한 후, 그 결괏값을 answer에 대입
        }
    }
    return answer; 
}
console.log(solution(3, 5))