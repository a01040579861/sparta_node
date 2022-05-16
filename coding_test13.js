// 2016년
function solution(a, b) {
    var answer = '';
    var month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 달마다 날짜 수
    var week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]; // 요일
    
    for(let i = 1; i < a; i++){ // 변수 i는 1부터, i는 a보다 작으며, i는 1씩 증가.
        let day = month[i] % 7; // month[i]를 7로 나눈 나머지 값을 day 변수에 할당
        for(let j = 0; j < day; j++){ // 변수 j는 0부터, j는 day보다 작으며, j는 1씩 증가.
            let back = week.shift(); 
            // shift() : 배열의 첫 번째 아이템을 제거, 따라서 week 배열에서 첫번째 요소를 변수 back에 할당
            week.push(back); // 뺀 요소 다시 추가
        }
    }
    let d = b % 7; // 요일 인덱스 값
    answer = week[d]; // 요일 찾기
    return answer;
}
console.log(5, 24)