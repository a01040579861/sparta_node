function solution(num) {
    //변수 answer의 초기값을 0으로 선언
    let answer = 0;

    for(let i=0; i<10; i++){
        //Array.includes(값) : 배열에서 값이 존재하면 true, 존재하지 않으면 false 반환
        if(!num.includes(i)) 
        answer += i;
    }

    return answer;
}

// let numbers = [5,8,4,0,6,7,9]; // 6
let numbers = [1,2,3,4,6,7,8,0]; // 14
console.log(solution(numbers));