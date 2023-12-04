// // const body = document.body
// // const bodyChildNodes = body.childNodes
// // const bodyChildren = body.children
// // console.log(bodyChildNodes)
// // console.log(bodyChildren)

// // bodyChildNodes.forEach((bcn) => {
// //         console.log(bcn)
// // })

// // Array.from(bodyChildren).forEach((bcn) => {
// //         console.log(bcn)
// // })

// // console.log(body.firstChild)
// // console.log(body.firstElementChild)
// // console.log(body.lastChild)
// // console.log(body.lastElementChild)

// // console.log(document.documentElement) //element ของ html / root element
// // console.log(document.firstElementChild) //element ของ root node
// // console.log(document.documentElement === document.firstElementChild)

// // //id # ข้างหน้า
// // //class . ข้างหน้า

// // const course201Element = document.getElementById("int201")
// // const course101Element = document.querySelector("#int101")
// // console.log(course201Element)
// // console.log(course101Element)

// // //find with css selector
// // const progElement = document.querySelectorAll("#int201, .programming")
// // const liElement = document.querySelectorAll("li")

// // //find with tag name
// // const liElement2 = document.getElementsByTagName("li")
// // console.log(progElement)
// // console.log(liElement)
// // console.log(liElement2)

// // //find with class name
// // const courseElement = document.getElementsByClassName("courses")
// // console.log(courseElement)

// const firstDiv = document.body.firstElementChild
// console.log(firstDiv)
// const firstDivAttributes = firstDiv.attributes //get all attribute of any element
// console.log(firstDivAttributes) //length=2, id and class attributes
// Array.from(firstDivAttributes).forEach((attr) => {
//   console.log(attr.name)
//   console.log(attr.value)
// })
// console.log(firstDiv.getAttribute('id')) //return value of specified attribute 'id'
// console.log(firstDiv.getAttribute('class'))

// //return value of specified attribute 'name'
// const firstAttribute = firstDivAttributes[0]
// console.log(firstAttribute.ownerDocument)
// console.log(firstAttribute.ownerElement)

// //create a new attributes nameed 'owner' with value 'phatcharadol'
// firstDiv.setAttribute("owner", 'phatcharadol')

// //create new <p> under div.courses
// const newPEle = document.createElement('p') //<p></p>
// // newPEle.textContent = 'Client Web Programming' //<p>Client Web Programming</p>
// newPEle.setAttribute('id', 'int203') //<p id='int203'>Client Web Programming</p>
// newPEle.setAttribute('class', 'courses')//<p id='int203' class='courses'>Client Web Programming</p>

// const divCoursesParent = document.getElementById('bscit-courses')
// divCoursesParent.appendChild(newPEle) //ต่อท้าย

// const refNode = divCoursesParent.lastElementChild //แทรกก่อนหน้า reference node อันไหน
// divCoursesParent.insertBefore(newPEle, refNode)
// divCoursesParent.replaceChild(newPEle, refNode)
// divCoursesParent.removeChild(newPEle)

window.alert('do you want to exit?')
const username = window.prompt('please enter your name')
window.confirm(`Good Bye ${username}`)