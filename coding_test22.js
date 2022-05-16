// 자릿수 더하기
function solution(n){ //매개변수 n 선언
    let answer = 0; // answer 초기값 0 할당
    let number = n.toString(); //변수 number에 매개변수 n을 문자열로 바꾸어 값 할당
    
    for (let i = 0; i< number.length; i++) { //i 의 초기값 0, i는 number변수 길이만큼 1씩 증가하며 반복
        answer += Number(number[i]); // 변수 answer에 number[i]의 문자열을 숫자로 변환하여 값을 할당
    }
    return answer; // answer 리턴 
}
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(123)
    console.log(987)