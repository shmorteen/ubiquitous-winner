const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
const score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  squares.forEach(square => {
    square.classList.remove('mole')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  //assign the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition){
      result = result + 1
squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition=null
      hitPosition = null
    }
  })
})


function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 500)
}

moveMole()


function countDown() {
  currentTime--
  timeLeft.textContent = currentTime
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
 }

  if(currentTime === 0 ) {
    clearInterval(timerId)
    alert('GAME OVER! Your final score is' + result)
  }
}

let timerId = setInterval(countDown, 1000)
let countDownTimerId = setInterval(countDown, 1000)