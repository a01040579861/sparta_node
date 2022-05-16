// 완주하지 못한 선수
function solution(participant, completion) { //매개변수 participant, completion 할당
    participant.sort(); //참가자 배열 정렬
    completion.sort(); //완주자 배열 정렬
    for(let i = 0; i < participant.length; i++){ //i는 0부터, i는 participant길이만큼 1씩 증가 
        if(participant[i] !== completion[i]){ // participant[i] 와 completion[i]이 같지 않거나, 같은 자료형이 아닐때 true 반환
            //인덱스 0부터 순차적으로 두 배열 비교
            return participant[i];
            //비완주자가 참가자 배열에 나올 경우 출력
        }
    }
}
console.log(["leo", "kiki", "eden"])
console.log(["marina", "josipa", "nikola", "vinko", "filipa"])
console.log(["mislav", "stanko", "mislav", "ana"])