// Arguments function
// function arg(n1, n2, n3) {
//         console.log(arguments[0])
//         console.log(arguments[2])
//         console.log(`lenght = ${arguments.length}`)
// }
// arg('dol', 1, false)

// Default parameter and Rest function
// function defaultParameter(name='Unknown', age=5000, money=200, ...priv) {
//         console.log(`arguments lenght: ${arguments.length}`)
//         console.log(name, age, money, priv)
//         return `my name is ${name} i am ${age} years old money income ${money} class ${priv}\n`
// }
// console.log(defaultParameter())
// console.log(defaultParameter('ddol'))
// console.log(defaultParameter('ddol', undefined, 100, 'Normal', 'MVP', 'DDOL', true))
// console.log(defaultParameter('ddol', 18, undefined))

// Destructure array
// const [a, ...b] = ['a', 'b', 'c', 'd']
// console.log(a)
// console.log(b)
// Destructure object ต้องใช้ชื่อให้ตรงจะได้รู้ว่าจะเอา property ไหน
// const {id: StudentID, ...n} = {id:1, title: 'DFIR', authors:'DDOL'}
// console.log(StudentID)
// console.log(n)

// Spread Function
// function sum(n1, n2, n3) {
//         return n1+n2+n3
// }
// number = [10, 20, 30]
// console.log(sum(...number)) //แยก item 1 ไปเป็น n1 item 2 ไป n2 ต่อไปเรื่อยๆ
// console.log(sum(number))

// Unpacking elements
// const a = [5, 8]
// const b = [2, 7]
// function arrayAdd([x1], [y1]) {
//         return x1 + y1
// }
// console.log(arrayAdd(a, b))
// function arraySub([, x1], [, y1]) {
//         return x1 - y1
// }
// console.log(arraySub(a, b))
// function arrayAdd2([x1, y1], [x2, y2]) {
//         return [x1 + y1, x2 + y2]
// }
// console.log(arrayAdd2(a, b))
// function arrayAdd3([x1, y1], [x2, y2]) {
//         return x1 + x2 + y1 + y2
// }
// console.log(arrayAdd3(a, b))

// Unpacking property
// const student = { id: 65130500046, name: "phatcharadol thangplub"}
// /*
//         อันนี้มันก็จะแยกออกมาไม่เกี่ยวกับ student แล้ว
// */
// const {id: StudentID} = student 
// let {name: StudentName} = student 
// StudentName = 'John'
// console.log(StudentID)
// console.log(StudentName)
// console.log(student.name)