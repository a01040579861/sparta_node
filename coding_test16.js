// 문자열 내 p와 y의 개수
let s = "pPoooyY" // 변수 s에 문자열 값 할당
function solution(s){
    var answer = true; // 변수 answer 에 true 값 할당
    let word = s.toUpperCase(); // toUpperCase(): 문자열을 대문자로 변환한 값을 반환
    
    answer = word.split('P').length === word.split('Y').length;
    // split(): 문자열을 일정한 구분자로 잘라서 배열로 저장
    // word.split('P').length word문자를 P로 자른길이와 
    // word.split('Y').length word문자를 P로 자른길이가 같은 값을 answer에 저장

    console.log(word)
    console.log(word.split('P'))
    console.log(word.split('Y'))
    console.log(answer)
    
    return answer;
}
console.log(solution(s))