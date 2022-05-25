// 자연수 뒤집어 배열로 만들기
function solution(n) {
    let str = n.toString(); // 매개변수 ndmf string으로 형변환해주어 str변수에 할당
    let answer = []; // 초기값 빈배열
    
    for (let i = str.length - 1; i >= 0; i--) { 
        // i는 str길이에서 -1 만큼까지고, i는 0보다 크거나 같으며, 1씩 감소
        answer.push(Number(str.charAt(i))) // 가장 마지막 자릿수 숫자부터 차례로 배열에 push
    }
    
    return answer;
}