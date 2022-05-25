// 하샤드 수
function solution(x) {
    var answer = true;
    let count = (x + '') // 정수를 문자열로 변환
    .split('') // 각각의 문자로 나눈 배열로 만든다.
    .map((n) => +n) //문자배열을 숫자배열로 변환
    .reduce((acc, curr) => acc + curr); 
    //reduce()메서드 사용해서 각 숫자들을 모두 더해준 값을 반환
    if (x % count !== 0) { // x와 count를 나눈 나머지 값이 0이 아니라면 
        answer = false; // false 반환
    }
    return answer;
}
console.log(solution(10))