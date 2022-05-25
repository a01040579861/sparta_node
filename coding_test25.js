// 정수 제곱근 판별
function solution(n) {
    let answer = 0; // 초기값 0
    let int = Math.sqrt(n); // n의 제곱근인 int 선언
    // sqrt() : 특정숫자의 제곱근 값을 계산해주는 함수
    (int % 1 == 0) ? answer = Math.pow((int + 1), 2) : answer = - 1;
    // pow() : 특정숫자의 거듭제곱 값을 계산해주는 함수
    // int 가 정수라면(int % 1 == 0) (제곱근 + 1)^2를 return하고, 그렇지 않다면 -1을 return한다.
    
    return answer;
}