// 제일 작은 수 제거하기
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    //arr의 Math.min 메소드로 최소값을 구한 뒤 해당 값의 인덱스를 알아내어 배열에서 제거
    //splice() : 원하는 위치에 요소를 추가하거나 삭제할 수 있다.
    //indexOf() : 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환
    //Math.min() : 0 이상의 최소 숫자를 반환
    if(arr.length < 1) 
    return[-1];
    //arr 길이가 1보다 작다면 [-1]을 리턴한다.
    return arr;
}