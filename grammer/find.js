const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 콜백이 참인 조건을 만족하는 가장 첫 번째 요소 반환
const evenNumbers = numbers.find(num => num % 2 == 0)
console.log(evenNumbers)

const users = [
    {name: 'john', age: 25},
    {name: 'mike', age: 20},
    {name: 'jihyun', age: 19},
]
const adults = users.find(user => user.age >= 20)
console.log(adults)