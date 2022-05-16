// 가운데 글자 가져오기
function solution(s) {
    var answer = '';
    if (s.length % 2 === 0) {//짝수일 경우
        answer = s[s.length / 2 - 1] + s[s.length / 2];
    } else {
        answer = s[Math.floor(s.length / 2)];//홀수일 경우, 반내림 하기
        // Math.floor() 함수는 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
    } 
    return answer;
}
console.log(solution("abcde"));
console.log(solution("qwer"));