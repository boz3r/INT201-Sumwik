const submitButton = document.getElementById("submitColor")
const inputColor = document.querySelectorAll("input")

/*
        x = document.createElement('p');
        x.setAttribute("id", "pp1");
*/
function createElement(element) { document.createElement(element) }

function deleteElementByID(element) { document.getElementById(element).remove() }

function getInputValue(index) { 
        let setInputColor = inputColor[index].value
        return setInputColor.toLowerCase()
}

function nullInput() {
        if (inputColor[0].value.length === 0 ) {
                window.alert("Input should not be null!!!")
        }
}

export { submitButton, nullInput, createElement, deleteElementByID, getInputValue }