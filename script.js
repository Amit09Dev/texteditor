
// getting text from textarea and updating text output
function updateText() {
    let inputValue = document.getElementById('text-input').value
    document.getElementById('text-output').innerText = inputValue
}

function makeBold(elem) {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('bold')
}


function makeItalic(elem) {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('italic')
}

function makeUnderline(elem) {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('underline')
}

function upperCase(elem) {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('uppercase')
}

function lowerCase(elem) {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('lowercase')
}

function capitalize(elem) {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('capitalize')
}

// aligning text and removing active class
function alignText(elem, alignType) {
    document.getElementById('text-output').style.textAlign = alignType
    let buttonList = document.getElementsByClassName('align')
    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].classList.remove('active');
    }
    elem.classList.add('active')
}