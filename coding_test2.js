// 짝수와 홀수
// 짝수 = Even
// 홀수 = Odd
function solution(num) {
    //변수 answer 의 초기값을 문자열로 정의
    var answer = '';
    if (num % 2 === 0) {
        // 정수를 2로 나눈 나머지가 0일 경우 짝수이고,
        return answer = "Even"
    } else {
        // 0이 아닐 경우 홀수
        return answer = "Odd"
    }
    return answer;
}
console.log(solution())