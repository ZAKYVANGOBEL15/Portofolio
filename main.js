
let hours = new Date().getHours() 

if(hours < 10) {
	hours = 'Selamat Pagi'
}else if(hours > 17 ){
	hours = 'Selamat Malam'
}else {
	hours = 'Selamat Siang'
}

// alert(hours)

document.getElementById('toggle1').onclick = function() {

	let ul2 = document.getElementById('demo2')


	ul2.classList.toggle('ul3') 



}

document.getElementById('mode1').onclick = function() {

	let mode = document.getElementById('bulat1')

	mode.classList.toggle('bulat2')


	let body = document.getElementById('cont_demo')

	body.classList.toggle('darkmode1')

	

}

document.getElementById('mode2').onclick = function() {

	let mode = document.getElementById('bulat2')

	mode.classList.toggle('bulat3')


	let body = document.getElementById('cont_demo')

	body.classList.toggle('darkmode2')

	

}