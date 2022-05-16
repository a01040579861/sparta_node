// 이상한 문자 만들기
function solution(s) {
    let answer = ''; // answer 초기값 빈문자열
    let words = s.split(' '); //문자열 s를 split()함수로 나누어 변수 words에 할당
    
    for (let i = 0; i < words.length; i++) { //변수 i는 0에서부터, words변수 길이까지 1씩 증가 각 단어별로 반복문 실행
        for (let j = 0; j < words[i].length; j++) { //변수 j는 0에서부터, words변수 길이까지 1씩 증가 각 단어별로 반복문 실행
            if (j % 2 === 0) { // 2로 나눈 나머지 값이 0과 같을때
                answer += words[i][j].toUpperCase(); // 변수 answer에 toUpperCase()함수를 사용해서 대문자로 바꾸어준 값을 할당
            } else {
                answer += words[i][j].toLowerCase(); // 변수 answer에 toLowerCase()함수를 사용해서 소문자로 바꾸어준 값을 할당
            }
            // toUpperCase(): 문자열 대문자로 변환해서 반환
            // toLowerCase(): 문자열 소문자로 변환해서 반환
        }
        if (i < words.length - 1) { 
            // 단어사이의 공백은 변수 words 길이를 사용
            // 이때 try hello world 문자열 길이는 3이고,
            // 1을 빼준 2보다 i가 작을때 공백을 넣어준다.
            // 2보다 작은 index 0번째인 try 뒤와 1번째 hello 뒤에 공백이 추가
            answer += ' ';
        }
    }
    return answer;
}
console.log(solution("try hello world"));
// 이번 문제는 좀 어려웠다. 좀 더 정확하게 이해하고 넘기자
// 주석을 달았지만 설명이 이게 맞는지 모르겠다.. 내가 생각한대로 적은건데..