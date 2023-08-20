const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const navItem = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')

const handleNav = () => {
	nav.classList.toggle('nav--active')

	if (nav.classList.contains('nav--active')) {
		navBtnBars.classList.add('black-bars-color')
	} else {
		navBtnBars.classList.remove('black-bars-color')
	}

	navItem.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	navItem.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

navBtn.addEventListener('click', handleNav)
