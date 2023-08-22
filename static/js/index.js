let nav = document.getElementById('navbar')
window.addEventListener('scroll', () => {
    if (window.scrollY > 200){
        nav.classList.add('fixed-top')
    }
    else {
        nav.classList.remove('fixed-top')
    }
})

let navItem = document.querySelectorAll('.nav-link')
navItem[0].classList.add('active')
navItem.forEach((item) => {
    item.addEventListener('click', () => {
        resetLinks()
        navItem[0].classList.remove('active')
        item.classList.add('active')
    })
})

function resetLinks(){
    navItem.forEach(item => {
        item.classList.remove('active')
    })
}
// let amountRanges = [100, 1000, 5000, 15000, 50000];    //values to step to
// let periodRanges = [1, 7, 14, 30, 60, 180, 360];    //values to step to

let periodInput = document.querySelector('input#period-input')
let input = document.getElementById('input')
let output = document.getElementById('output');

let proForm = document.getElementById('profit-form')

proForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let amountVal = 0
    let periodVal = 0
    switch (parseInt(input.value)) {
        case 0:
            amountVal = 100
            break;
        case 1:
            amountVal = 1000
            break;
        case 2:
            amountVal = 5000
            break;
        case 3:
            amountVal = 15000
            break;
        case 4:
            amountVal = 50000
            break;
        default:
            console.log("value error!")
            break;
    }
    switch (parseInt(periodInput.value)) {
        case 0:
            periodVal = 1
            break;
        case 1:
            periodVal = 7
            break;
        case 2:
            periodVal = 14
            break;
        case 3:
            periodVal = 30
            break;
        case 4:
            periodVal = 60
            break;
        case 5:
            periodVal = 180
            break;
        case 6:
            periodVal = 360
            break;
        default:
            console.log("value error!!!")
            break;
    }
    output.value = `${amountVal * periodVal}$`
}
)
//input.oninput(); //set default value