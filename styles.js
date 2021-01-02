let swic = document.querySelector('#swic')

let bool = false
swic.onclick = function() {
    let switchIcon = document.querySelector('#switchIcon')
    let content = document.querySelector('.content')
    bool = !bool
    if(bool==true) { 
        switchIcon.style.transform = 'rotate(90deg)'
        switchIcon.style.transition = 'all ease 0.5s'
        content.style.left  = '0px'
        content.style.transition = 'all ease 1s'
    } else {
        switchIcon.style.transform = 'rotate(0deg)'
        switchIcon.style.transition = 'all ease 0.5s'
        content.style.left  = '3rem'
        setTimeout(function(){
            content.style.left  = '-10000px'
            content.style.transition = 'all ease 1.5s'
        }, 700)
       
    }
}

let light = document.querySelector('#light')

let bool1 = false
light.onclick = function() {
    bool1 = !bool1
    let body = document.querySelector('body')
    if(bool1 == true) {    
        body.style.backgroundColor = '#3f3f3f'
        this.innerHTML = '<img src="lamp_icon2.png" alt="lampIcon" id="lampIcon" class="navItems">'
    } else {        
        body.style.backgroundColor = null
        this.innerHTML = '<img src="lamp_icon1.png" alt="lampIcon" id="lampIcon" class="navItems">'
    }
    
}