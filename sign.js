let email = document.querySelector("#email")

let password = document.querySelector(".Password")

let phone = document.querySelector(".phone")

let confirmP = document.querySelector(".confirmP")

let emailError = document.querySelector(".emailError")

let btn = document.querySelector(".register")

let body = document.querySelector(".body")

let darkMode = document.querySelector(".dark")

let passwordError = document.querySelector(".passwordError")

let good = document.querySelector(".good")

let phoneError = document.querySelector(".phoneError")

let passError = document.querySelector(".passError")

let reset = document.querySelector(".reset")

///////////////////////////////////////////////////////////////////////


reset.addEventListener("click", () => {
    good.style.display = "none"
    emailError.style.display = "none"
    phoneError.style.display = "none"
    passwordError.style.display = "none"
    passError.style.display = "none"
})




/////////////////////////////////////////////////////////////////////////
darkMode.addEventListener("click", () => {


    body.classList.toggle("dmood")

})

///////////////////////////////////////////////////////////////////////


btn.addEventListener("click", (e) => {

    e.preventDefault()

    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.style.display = "block"
        good.style.display = "none"
        return false
    }



    else if (!password.value.match(/^[A-Za-z0-9]\w{8,}$/)) {
        passwordError.style.display = "block"
        good.style.display = "none"
        return false
    }




    else if (confirmP.value != password.value) {
        passError.style.display = "block"
        good.style.display = "none"
        return false
    }




    else if (!phone.value.match(/^\d{11}$/)) {
        phoneError.style.display = "block"
        good.style.display = "none"
        return false
    }


    else if (email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) && password.value.match(/^[A-Za-z0-9]\w{8,}$/) && phone.value.match(/^\d{11}$/) && confirmP.value == password.value) {

        good.style.display = "block"
        emailError.style.display = "none"
        phoneError.style.display = "none"
        passwordError.style.display = "none"
        passError.style.display = "none"
    }

})


