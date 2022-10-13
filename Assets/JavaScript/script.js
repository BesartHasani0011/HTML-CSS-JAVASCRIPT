let div_ads = document.getElementsByClassName('ads')[0]
let div_button = document.getElementsByClassName('button')[0]
let x_button = document.createElement('button')
let x_button_text = document.createTextNode('X')
x_button.appendChild(x_button_text)
div_button.appendChild(x_button)
let div_text = document.getElementsByClassName('text')[0]
let message = document.createElement('p')
div_text.appendChild(message)
let message_text = document.createTextNode('This is an ad.To remove it please press X button above')
message.appendChild(message_text)
div_text.appendChild(message)
let navBtn = document.querySelector(".icon")
let nav = document.querySelector("nav")


function hour_() {
    var z = new Date();
    var seconds = z.getSeconds(),
        minutes = z.getMinutes(),
        hours = z.getHours(),
        days = z.getDate(),
        months = z.getMonth(),
        years = z.getFullYear();

    seconds = seconds < 10 ? "0" + seconds.toString(): seconds
    minutes = minutes < 10 ? "0" + minutes.toString(): minutes
    hours = hours < 10 ? "0" + hours.toString(): hours 

    var tickets = ["hours", "minutes", "seconds", "days", "months", "years"]
    x = [hours, minutes, seconds, days, months+1, years]
    for (var i = 0; i < tickets.length; i++) document.getElementById(tickets[i]).firstChild.nodeValue = x[i]
}

function time() {
    hour_()
    window.setInterval("hour_()", 1)
}

function close() {
    div_ads.style.display = 'none'
}

x_button.addEventListener('click', close)

const image_slides = [
    "1.png", "2.png", "3.png", "4.png", "5.png"
]
const img = document.getElementById('img')

img.setAttribute('src', `Assets/Photos/${image_slides[0]}`)

function createSliderPages() {
    for (let i = 0; i < image_slides.length; i++) {
        const li = document.createElement('li')
        li.setAttribute('data-target', image_slides[i])
        li.textContent = (i + 1)

        document.getElementById('ul').appendChild(li)

        li.addEventListener('click', e => {
            img.src = `Assets/Photos/${e.target.getAttribute('data-target')}`
        })
    }
}
createSliderPages()

const sect = document.querySelector('.second-section')
window.addEventListener('scroll', checkSection)


function checkSection() {
    const triger = window.innerHeight / 5 * 4
    const boxTop = sect.getBoundingClientRect().top

    if(boxTop < triger){
        sect.classList.add('show')
    } else{
        sect.classList.remove('show')
    }
}

navBtn.addEventListener("click",() => {
    if(nav.className != "show"){
        nav.classList.add("show")
    } else {
        nav.classList.remove("show")
    }
})
