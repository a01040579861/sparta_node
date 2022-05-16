// 부족한 금액 계산하기
function solution(price, money, count) { // 매개변수 price, money, count 할당
    let totalPrice = 0;// 총 금액을 0으로 할당
    
    for(let i = 1; i <= count; i++){ // 변수 i는 1부터 시작하고, count만큼순회하며, 1씩 증가한다.
        totalPrice += price * i; //totalPrice에 price * 1 값을 넣는다.
    }
    
    return money > totalPrice ? 0 : totalPrice - money
    // 삼항 연산자를 사용하여 money가 totalPrice보다 크면 0,
    // 그렇지 않다면 totalPrice - money 를 리턴한다.
}
console.log(3, 20, 4)