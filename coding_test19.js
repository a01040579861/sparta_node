// 수박수박수박수박수박수?
function solution(n) {
    var answer = ''; // answer 초기값 빈 문자열 할당
    for (let i = 1; i <= n; i++) { // i는 1부터 시작해서, 매개변수 n보다 작거나 같고, 1씩 증가
        if (i % 2 === 0) { // 변수 i를 2로 나눈 나머지 값이 0과 같다면
            answer += '박' // answer 는 박
        } else { // 그렇지 않다면
            answer += '수' // answer 는 수
        }
    }
    return answer; // 리턴값은 answer
}
console.log(3)
console.log(4)