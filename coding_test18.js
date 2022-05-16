// 서울에서 김서방 찾기
function solution(seoul) {
    for (let i = 0; i < seoul.length; i++) { // seoul 배열의 길이만큼 for문 사용
        if (seoul[i] === 'Kim') return `김서방은 ${i}에 있다`
        // 배열 요소를 돌면서 Kim을 찾았을때 index 반환
    }
}
console.log(["Jane", "Kim"])