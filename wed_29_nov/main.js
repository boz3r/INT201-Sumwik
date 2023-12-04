// const mycookies = document.cookie
// console.log(mycookies)

// document.cookie = `course=INT201;expires=${new Date(Date.now() + 1000 * 60 * 60 * 24)}`
// document.cookie = `student=phatcharadol;expires=${new Date(Date.now(2023, 11, 25))}`
// console.log(mycookies)

// let count = localStorage.getItem("counter")

// if (count === null) {
//         localStorage.setItem("counter", 1)
// } else {
//         localStorage.setItem("counter", ++count)
// }

// alert(localStorage.getItem("counter"))

// let count = sessionStorage.getItem("counter")

// if (count === null) {
//         sessionStorage.setItem("counter", 1)
// } else {
//         sessionStorage.setItem("counter", ++count)
// }

// alert(sessionStorage.getItem("counter"))

// sessionStorage.setItem("color", "green")
//sessionStorage.removeItem("color")
//sessionStorage.clear() //remove all sessionStorage

const submitColorButton = document.getElementById('submit-color')
submitColorButton.addEventListener('click', (e) => {
        e.preventDefault()
        const inputText = document.querySelectorAll('input')
        localStorage.setItem('set-color', inputText[0].value)
        window.alert(`You choose color ${inputText[0].value}`)
})