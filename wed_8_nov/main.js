// const rootNode = document

// console.log(rootNode)
// console.log(rootNode.nodeName)
// console.log(rootNode.nodeType)
// console.log(rootNode.nodeValue)

// console.log(document.documentElement)
// console.log(document.documentElement.nodeType)
// console.log(document.head)
// console.log(document.head.nodeType)
// console.log(document.body)
// console.log(document.body.nodeType)
// console.log(document.title)
// console.log(document.title.nodeType)

// // เก็บ object ของ tag head
const headElement = document.head
// console.log(headElement)
// console.log(headElement.childNodes) // เอาทุก node type ที่เป็นลูก, return เป็น NodeList
// console.log(headElement.children) // เอาลูกที่เป็น element type เท่านั้นมา, return เป็น HTMLCollection

const headChildNodes = headElement.childNodes
Array.from(headChildNodes).forEach ((hc) => {
        console.log(hc.nodeName)
        console.log(hc.nodeType)
        console.log(hc.nodeValue)
})

// first child
console.log(headElement.firstElementChild)
console.log(headElement.firstChild)

// last child
console.log(headElement.lastElementChild)
console.log(headElement.lastChild)

// parent
console.log(headElement.parentElement)
console.log(headElement.parentNode)

// previous sibling
console.log(headElement.previousElementSibling) // node ก่อนหน้ามีไหมที่เป็น element type
console.log(headElement.previousSibling) // node ก่อนหน้ามีไหมที่เป็นอะไรก็ได้

// next sibling
console.log(headElement.nextElementSibling) // node ต่อไปมีไหมที่เป็น element type
console.log(headElement.nextSibling) // node ต่อไปมีไหมที่เป็นอะไรก็ได้