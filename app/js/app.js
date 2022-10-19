'use strict'

let deadline = new Date()
deadline.setHours(0, 14, 49, 0) // по дефолту 14 мин 49 сек

const countdown = () => {
	if ((deadline.getSeconds() + deadline.getMinutes() * 60) < 1) {
		document.querySelector('#timer').classList.add('timeout')
		document.querySelector('#timer').innerHTML = 'Время вышло'
		clearInterval(timerHandler)
	} else {
		deadline.setSeconds(deadline.getSeconds() - 1)
		document.querySelector('#minutes').innerHTML = deadline.getMinutes()
		document.querySelector('#seconds').innerHTML = deadline.getSeconds()
	}
}

let timerHandler = setInterval(function () {
	countdown()
}, 1000)

window.addEventListener('DOMContentLoaded', () => {
	console.log('[ DOM loaded! ༼ つ ◕_◕ ༽つ ]')

	countdown()
});