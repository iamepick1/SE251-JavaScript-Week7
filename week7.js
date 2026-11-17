// JavaScript Document

const form = document.getElementById("form")

const formItems = document.getElementsByTagName("input")
const errorItems = document.getElementsByTagName("span")
const ps = document.getElementsByTagName("p")
const butt = document.getElementById("button")
const info = document.getElementById("info")
const conf = document.getElementById("confirmation")

// console.log(form)
// console.log(butt)
console.log(formItems)
// console.log(formItems[0].value)

const regex = [/^[A-Za-z-]+$/, /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[a-z]{2,6}$/, /^[0-9]{10}$/]

butt.addEventListener("click", clicked)
function clicked() {
    let fail = false
    for (let i = 0; i < errorItems.length; i++) {
        errorItems[i].innerText = ""
        ps[i].classList.remove("red")
    }
    let txt = []
    for (let i = 0; i < formItems.length; i++) {
        txt.push(formItems[i].value)


    }
    console.log(txt)

    console.log(regex[0].test(txt[0]))
    if (!txt[0]) {
        errorItems[0].innerText += "*Name must not be empty. "
        ps[0].classList.add("red")
        fail = true
    } else {
        if (regex[0].test(txt[0])) {
            //remove red
        } else {
            errorItems[0].innerText += "*Name must have no special characters. "
            ps[0].classList.add("red")
            fail = true
        }
    }
    if (!txt[1]) {
        errorItems[1].innerText += "*Name must not be empty. "
        ps[1].classList.add("red")
        fail = true
    } else {
        if (regex[0].test(txt[1])) {
            //remove red
        } else {
            errorItems[1].innerText += "*Name must have no special characters. "
            ps[1].classList.add("red")
            fail = true
        }
    }

    if (!txt[2]) {
        errorItems[2].innerText += " *Email must not be empty. "
        ps[2].classList.add("red")
        fail = true
    } else {
        if (regex[1].test(txt[2])) {
            //remove red
        } else {
            errorItems[2].innerText += " *Must be a valid email. "
            ps[2].classList.add("red")
            fail = true
        }
    }
    if (!txt[3]) {
        errorItems[3].innerText += " *Email must not be empty. "
        ps[3].classList.add("red")
        fail = true
    } else {
        if (regex[1].test(txt[3])) {
            //remove red
        } else {
            errorItems[3].innerText += " *Must be a valid email. "
            ps[3].classList.add("red")
            fail = true
        }
    }
    if (txt[2] != txt[3]) {
        errorItems[2].innerText += " *Email and confirmation email must be the same. "
        ps[2].classList.add("red")
        errorItems[3].innerText += " *Email and confirmation email must be the same. "
        ps[3].classList.add("red")
        fail = true
    }
    if (!txt[4]) {
        errorItems[4].innerText += " *Phone number must not be empty. "
        ps[4].classList.add("red")
        fail = true
    } else {
        if (regex[2].test(txt[4])) {
            //remove red
        } else {
            errorItems[4].innerText += " *Must be a valid 10 digit phone number (no spaces or special characters). "
            ps[4].classList.add("red")
            fail = true
        }
    }
    if (!fail) {
        form.classList.add("hidden")
        conf.classList.remove("hidden")

        info.innerText += `${txt[0]} ${txt[1]}\n${txt[2]}\n${txt[4].substring(0,3)}-${txt[4].substring(3,6)}-${txt[4].substring(6,10)}`

    }
}

