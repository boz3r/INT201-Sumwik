// //1. select HTML objects
// const outerDiv = document.getElementById('outer-div')
// const innerDiv = document.getElementById('inner-div')
// const submitButton = document.querySelector('button')
// //2. select event type "click"
// //3. register event type to HTML objects
// outerDiv.addEventListener('click', (e) => {
//         console.log('outer div clicked')
//         console.log(e.type) //click
//         console.log(e.target) //<button>Submit</button>
//         console.log(e.currentTarget)
//         console.log(e.eventPhase)
// })
// innerDiv.addEventListener('click', (e) => {
//         console.log('inner div clicked')
//         console.log(e.type) //click
//         console.log(e.target) //<button>Submit</button>
//         console.log(e.currentTarget)
//         console.log(e.eventPhase)
// })
// submitButton.addEventListener('click', (e) => {
//         console.log('submit button clicked')
//         console.log(e.type) //click
//         console.log(e.target) //<button>Submit</button>
//         console.log(e.currentTarget)
//         console.log(e.eventPhase)
// })

// const submitButton = document.getElementById('submit-btn-01')
// submitButton.addEventListener('click', (e) => {
//         e.preventDefault()
//         const inputText = document.querySelectorAll('input')

//         console.log(inputText[0].value)
//         console.log(inputText[1].value)
        
//         if (inputText[0].value.length === 0 || inputText[1].value.length === 0) {
//                 console.log('xd') 
//         } else {
//                 console.log('submit clicked')
//         }
// })