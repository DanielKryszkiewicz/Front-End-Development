const plusBtn = document.querySelector('.sizeUp')
const minusBtn = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 36 

const biggerP = () => {
	fontSize +=5
	p.style.fontSize = fontSize + 'px' 
}
const smallerP = () => {
	fontSize -=5
	p.style.fontSize = fontSize + 'px'
}

const changeColor = () =>{
	const r = Math.floor(Math.random()*255)
	const g = Math.floor(Math.random()*255)
	const b = Math.floor(Math.random()*255)
 p.style.color = `rgb(${r},${g},${b})`
}
 
plusBtn.addEventListener('click', biggerP)
minusBtn.addEventListener('click', smallerP)
colorBtn.addEventListener('click', changeColor)

