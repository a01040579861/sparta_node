// 정수 내림차순으로 배치하기
function solution(n) {
    let answer = n.toString().split("").sort().reverse().join("");
    // 매개변수 n을 문자열로 형변환하고, 문자열을 자르며, 정렬하고, 
    // 순서를 뒤집으며, 원소를 문자열로 합친후 answer에 할당
    return parseInt(answer);
    // answer는 문자열이기 때문에 parseInt를 사용하여 정수형으로 형변환
}