// 직사각형 별 찍기
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); //split() : 문자열 나누는 함수
    const a = Number(n[0]), b = Number(n[1]); 
    for(let i = 0; i < b; i++){ //변수 i는 a줄만큼 반복
        let str = "" //출력할 변수 선언
        for(let j = 0; j < a; j++){ // 변수 j는 b줄만큼 반복
            str = str + "*" //출력할 변수에 별을 담는다
        } 
        console.log(str) // 출력
    }
});