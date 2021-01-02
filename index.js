let mas = []

let add = document.querySelector('#add')
let count = 0;
add.onclick = function() {
    let dateNow = dateFn()
    count++
    let val = document.querySelector('.val')
    if(val.value == '') {
        alert('You must write something!!!')
    } else {
        let temp = {
            val: `<p class="items"><input type="checkbox" class="checker" data-tab="${count}"><span class="todoText ${this.clue}"> ${val.value}</span><img src="waste.png" alt="waste" class="waste" data-tab="${count}"></p> <em>${dateNow}</em> <hr>`,
            identifer: count,
            bool: true
        }
        mas.unshift(temp)
        draw(mas)
        wasterSw()
        checkerSw()
    }
}

function dateFn() {
    options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false
      };
    let date =new Date()
    return new Intl.DateTimeFormat('ru-Ru', options).format(date)
}

function wasterSw() {
    let waste = document.querySelectorAll('.waste')
    for(let i=0; i<waste.length; i++) {
        waste[i].onclick = del
    }
}
function checkerSw() {
    let checker = document.querySelectorAll('.checker')
    for(let i=0; i<checker.length; i++) {
        checker[i].onclick = che
    }
}
function del(event) {
    let atr = event.target.getAttribute('data-tab')
    let ind = mas.findIndex(function(cv){
        return cv.identifer == parseInt(atr)
    })
    mas[ind].bool = false
    mas = mas.filter(function(cv){
        return cv.bool != false
    })
    draw(mas)
    wasterSw()
}
function che(event) {
    let atr = event.target.getAttribute('data-tab')
    let ind = mas.findIndex(function(cv){
        return cv.identifer == parseInt(atr)
    })
    let todoText = document.querySelectorAll('.todoText')
    for(let i=0; i<todoText.length; i++) {
        if(this.checked == true){
            todoText[ind].style.textDecoration = 'line-through'
        } else {
            todoText[ind].style.textDecoration = null
        }
    }
}
function draw(arr) {
    let tasks = document.querySelector('.tasks')
    let val = document.querySelector('.val')
    let out = document.querySelector('.container')
    let outer = ''
    for(let i = 0; i < arr.length; i++) {
            outer += arr[i].val
    }
   
    if(mas.length == 0) {
        out.innerHTML = '<p class="hh">What are your plans for today?</p>'
    } else {
        out.innerHTML = outer
    }
    tasks.innerHTML = `<span> Tasks: ${mas.length}</span>`
    val.value = ''
}
draw(mas)



