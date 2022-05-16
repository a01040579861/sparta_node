//x만큼 간격이 있는 n개의 숫자
function solution(x, n) { //x는 시작할값과 x만큼 증가하는 값, n은 몇개를 출력하는지 나타냄
    var answer = []; //배열을 뜻함
    for (let i = 1; i <= n; i++) {
    // 변수 i을 선언후 1을 할당하여 i를 n개만큼 출력을 할거니 n보다 작거나 같게하고, i는 1씩 증가
        answer.push(x * i); //push함수를 이용하여 배열에 값을 넣는데 값은 x * i값으로 할당
    }
    return answer;
}
console.log(2)
console.log(4)
console.log(-4)