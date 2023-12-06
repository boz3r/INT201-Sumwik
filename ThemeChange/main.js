import { submitButton, nullInput, createElement, deleteElementByID, getInputValue } from "./manage.js"

submitButton.addEventListener("click", (e)=>{
        e.preventDefault()
        document.body.style.backgroundColor = getInputValue(0)
})