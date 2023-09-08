const btn = document.querySelector('button')
const input = document.querySelector('.text')
const inputColor = document.querySelector('.color')
const pageTitle = document.querySelector('head title')
const box = document.querySelector('.box')

btn.addEventListener('click', function(){
    const value = input.value
    box.style.borderRadius = value
})
btn.addEventListener('click', function(){
    const value = inputColor.value
    box.style.background = value
})
box.addEventListener('mouseover', function(){
    box.style.flexDirection = 'column'
    box.style.gap = '20px'
})
