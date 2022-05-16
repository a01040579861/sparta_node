// 내적
function solution(a, b) {
    return a.reduce((q, w, e) => q + w * b[e], 0);
    // reduce(): 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
    // reduce에서 0으로 초기값을 설정해준다.
    // 첫번째 인자 변수 s에 배열의 각 값에 해당하는 두번째 인자 변수 v와
    // 현재 값의 index를 나타내는 세번째 인자 변수 i를 사용해 같은 b배열의 같은 
    // index값을 가지고와 모두 더해준 뒤 결과 반환
}
console.log([1,2,3,4])
console.log([-1,0,1])