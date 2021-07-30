const selector = name => document.querySelector(name)
const selectors = name => document.querySelectorAll(name)

const burger = selector('#burger')
const dropdownNav = selector('#dropdown')

const switches = selectors('.switch')


let isClicked = false
let switchState = false


const changeBtn = state => {
    if(state){
        burger.classList.add('cancel')
    }
    else{
        burger.classList.remove('cancel')
    }
}


const dropNav = state => {
    if(state){
        dropdownNav.classList.add('show')
    }
    else{
        dropdownNav.classList.remove('show')
    }
}


const toggleSwitch = (state, switchIndex) => {
    if(state){
        switches[switchIndex].classList.add('on')
        switches[switchIndex].classList.remove('off')
    }
    else{
        switches[switchIndex].classList.remove('on')
        switches[switchIndex].classList.add('off')
    }

    console.log(state, switches[switchIndex].classList)
}

toggleSwitch(true, 0)
toggleSwitch(true, 1)



burger.onclick = e => {
    e.stopPropagation()
    isClicked = !isClicked
    dropNav(isClicked)
    changeBtn(isClicked)
}


switches.forEach((switchBtn, index) => {
    switchBtn.onclick = e =>{
        switchState = !switchState
        toggleSwitch(switchState, index)
    }
})


window.onclick = () => {
    isClicked = false
}

