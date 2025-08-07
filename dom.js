const element = document.getElementById("demo")
console.log(element.innerText)
element.innerHTML = "<b>Change</b>"
const st = element.style
st.color = "red"
st.fontSize ="30px"

// const elements = document.querySelector("")
// console.log(elements.innerText)
// const t = elements.style
// t.color = "blue"
// t.fontFamily = "arial"
// t.fontSize ="20px"

const error = document.querySelectorAll(".error")
function handleClearErrors() {
    for (let i = 0; i < error.length; i++) {
        error[i].innerHTML = ""
    }
}
function handleForm() {
    const frm = document.signup
    const name = frm.name.value
    const email = frm.email.value
    if (name == "") {
        error[0].innerHTML = "Name is required"
        return false
    }
    if (email == "") {
        error[1].innerHTML = "email is required"
        return false
    }
    
    return false
}