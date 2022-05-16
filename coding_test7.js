//음양 더하기
function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) { //반복문을 통해 absolutes길이 만큼 순회
        if (signs[i] === true) { //signs 배열의 값이 true면 +
            answer = answer + absolutes[i];
        } else { //signs 배열 값이 false면 - 
            answer = answer - absolutes[i];
        }
    }
    return answer //더한 값 리턴
}
console.log([4, 7, 12], [1, 2, 3])