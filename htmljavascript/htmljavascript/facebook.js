const error = document.querySelectorAll(".error")
function handleClearErrors() {
    for (let i = 0; i < error.length; i++) {
        error[i].innerHTML = ""
    }
}
function handleForm() {
    const frm = document.signup
    const email = frm.email.value
    const password = frm.password.value
    
    console.log("email or phone number is:",email)
    console.log("password",password)

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

    if (email == "") {
        error[0].innerHTML = "email or phone number required"
        return false
    }
    if (!emailRegex.test(email) && !phoneRegex.test(email)) {
        error[0].innerHTML = "email or phone number invalid"
        return false
    }
    // // if (!phoneRegex.test(email)) {
    // //     error[0].innerHTML = "phone number invalid"
    // //     return false
    // }
    if (password == "") {
        error[1].innerHTML = "password required"
        return false
    }
    if (!passwordRegex.test(password)) {
        error[1].innerHTML = "password invalid"
        return false
    }
    alert("you have submitted")
    return false
}