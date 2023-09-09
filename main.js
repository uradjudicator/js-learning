const btn = document.querySelector('button')
const input = document.querySelector('.text')
const inputColor = document.querySelector('.color')
const pageTitle = document.querySelector('head title')
const box = document.querySelector('.box')
const inpTopL = document.querySelector('.inputLeftTop')
const inpTopR = document.querySelector('.inputRightTop')
const inpBottomL = document.querySelector('.inputLeftBottom')
const inpBottomR = document.querySelector('.inputRightBottom')
const info = document.querySelector('.info')

btn.addEventListener('click', function(){
    const value = inputColor.value
    box.style.background = value
})

btn.addEventListener('click', function(){
    const value = inpTopL.value
    box.style.borderTopLeftRadius = value
})
btn.addEventListener('click', function(){
    const value = inpTopR.value
    box.style.borderTopRightRadius = value
})

btn.addEventListener('click', function(){
    const value = inpBottomL.value
    box.style.borderBottomLeftRadius = value
})

btn.addEventListener('click', function(){
    const value = inpBottomR.value
    box.style.borderBottomRightRadius = value
})
btn.addEventListener('click', function(){
    const value = inpBottomR.value && inpBottomL.value && inpTopR.value && inpTopL.value
    info.innerText = value
})