//평균 구하기
function solution(arr) {
    var answer = 0;
    let sum = 0; // 더해준 배열값을 넣어줄 변수 선언
    for (let i = 0; i < arr.length; i++) { //변수 i는 arr길이만큼 증가
        sum += arr[i];   // 배열의 요소들을 하나씩 더한다.
    }
    return answer = sum / arr.length; // 더한 값과 배열의 길이(=요소 갯수)를 나눈다.
}
console.log([1, 2, 3, 4])
console.log([5, 5])