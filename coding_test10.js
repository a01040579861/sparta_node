function solution(arr1, arr2) {
    var answer = [[]]; //answer 초기값을 배열로 할당
    for(let i=0; i<arr1.length; i++) { //첫번째 배열의 크기만큼 반복문을 돌린다.
        answer[i] = []; //answer 에 i번째 행을 추가
            for(let j=0; j<arr1[i].length; j++) { //행의 갯수만큼 반복문을 돌린다.
                answer[i][j] = arr1[i][j] + arr2[i][j]; //같은 행렬끼리 덧셈한다.
            } 
        } 
    return answer; 
}
console.log(solution([[1,2], [2,3]], [[3,4],[5,6]]))
