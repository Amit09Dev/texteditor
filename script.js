
// getting text from textarea and updating text output
const updateText = () => {
    let inputValue = document.getElementById('text-input').value
    document.getElementById('text-output').innerText = inputValue
}

const makeBold = (elem) => {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('bold')
}


const makeItalic = (elem) => {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('italic')
}

const makeUnderline = (elem) => {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('underline')
}

const upperCase = (elem) => {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('uppercase')
}

const lowerCase = (elem) => {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('lowercase')
}

const capitalize = (elem) => {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('capitalize')
}

// aligning text and removing active class
const alignText = (elem, alignType) => {
    document.getElementById('text-output').style.textAlign = alignType
    let buttonList = document.getElementsByClassName('align')
    for (let button of buttonList) {
        button.classList.remove('active')
    }
    elem.classList.add('active')
}