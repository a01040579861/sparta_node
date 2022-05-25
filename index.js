function solution(n){
  let result = ''
  let answer = []
  let num = 0
  let str = (n + '')

  for (let i = 0; i < str.length; i++) {
    answer.push(str[i])
    num += parseInt(str[i])
  }
  answer = answer.reverse()
  for(let i = 0; i < answer.length; i++) {
    if (i < answer.length - 1) {
      result += `${answer[i]}`
    }
    if (i === answer.length - 1) {
      result += `${answer[i]}= ${num}`
    }
  }
	return result;
}
console.log(solution(718253))