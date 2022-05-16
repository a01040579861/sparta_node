//핸드폰 번호 가리기
function solution(phone_number) {
    return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
    // phone_number의 길이를 뒤에서 4를 뺀 만큼 *을 붙이고 그 후에 뒤에서부터 4자리를 slice 함수를 사용하여 호출
    // repeat() : 문자열을 지정한 횟수만큼 반복
    // slice() : 배열의 일부분을 잘라내어, 새로운 배열로 리턴
}
console.log("01033334444")
console.log("027778888")