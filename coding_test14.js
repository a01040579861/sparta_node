//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    var answer = [];
    for(let i = 0; i < arr.length; i++){ //매개변수 arr의 길이만큼 i 는 증가
        if(arr[i] % divisor === 0){ // arr[i]를 divisor로 나누고 나머지가 0이 되는 요소를
         answer.push(arr[i]);  // answer변수에 push()함수를 사용하여 넣어준다.
         //push()함수는 Array(배열)의 마지막에 새로운 요소를 추가하고 난후 변경된 배열의 길이를 반환하는 함수
        };
    };
    answer.sort(function(a, b){return a - b}); //answer 변수를 sort 정렬함수를 사용하여 정렬한다.
    if (answer.length === 0){ // answer 길이가 0일때
        answer.push(-1); // answer - 1 해준다.
    };
    return answer; 
};

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3,2,6], 10));