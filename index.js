
let email = document.querySelector(".email")

let btn = document.querySelector(".btnn")

let error = document.querySelector(".Invaild")

let pass = document.querySelector(".pass")

let Invaildpass = document.querySelector(".Invaildpass")

let check2 = document.querySelector(".check2")


btn.addEventListener("click", (e) => {

    e.preventDefault()

    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        error.style.display = "block"
        return false
    }


    else if (!pass.value.match(/^[A-Za-z0-9]\w{8,}$/)) {
        Invaildpass.style.display = "block"
        return false
    }




    else if (email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) && pass.value.match(/^[A-Za-z0-9]\w{8,}$/)) {

        error.style.display = "none"
        window.location.assign(`welcome.html`)
    }


})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








check2.addEventListener("click", () => { showPassword() })

function showPassword() {

    if (pass.type == "password") { pass.type = "text" }

    else { pass.type = "password" }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////