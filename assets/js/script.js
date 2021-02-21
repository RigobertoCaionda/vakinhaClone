let searchInput = document.querySelector('.searchInput');
let alertDiv = document.querySelector('.alertDiv');
let containerItemTitle = document.querySelectorAll('.container--item--titulo');
for(let i = 0; i < containerItemTitle.length; i++) {
	if(containerItemTitle[i].innerHTML.length > 34) {
		let newText = containerItemTitle[i].innerHTML.substr(0, 34) + '...';
		containerItemTitle[i].innerHTML = newText;
	}
}
let currentSlide = 0;
let totalSliders = document.querySelectorAll('.container--item').length;
document.querySelector('.container').style.width = `calc(100vw * ${totalSliders})`;
document.querySelector('.slider--controls').style.height = 
`${document.querySelector('.vakinhaWon').clientHeight}px`;
function goPrev(){
	currentSlide--;
	if(currentSlide < 0){
		currentSlide = totalSliders - 1;
	}
	updateMargin();
}
function goNext(){
	currentSlide++;
	if(currentSlide > (totalSliders - 1)){
		currentSlide = 0;
	}
	updateMargin();
}
function updateMargin(){
	let newMargin = (currentSlide * document.body.clientWidth);
	document.querySelector('.container').style.marginLeft = `-${newMargin}px`;
}
	function threeCaracters(){
		if(searchInput.value.length > 2){
			alertDiv.style.backgroundColor = '#cce4ff';
		alertDiv.innerHTML = `Procurar por ${searchInput.value}`;
	}else{
		alertDiv.innerHTML = "Digite ao menos 3 caracteres";
		alertDiv.style.backgroundColor = '#fff';
	}
	}

function onClique(){
		if(alertDiv.style.opacity == 0){
				searchInput.style.outline = 'none';
				searchInput.style.border = "4px solid #bfdeff";
				alertDiv.style.opacity='1';
			}else{
				alertDiv.style.opacity='0';
			}
}
function changeBorder(){
	alertDiv.style.opacity = '0';
	searchInput.style.border = "1px solid #ced4da";
}
function openMenu(){
	let ul = document.querySelector('.menuRight nav ul');
	let menuOpener = document.querySelector('.menuOpener');
	let menuOpenerImg = document.querySelector('.menuOpener img');
	if(ul.style.display=='none'){
		ul.style.opacity='0';
		ul.style.display='flex';
		setInterval(()=>{
			ul.style.opacity='1';
		},200);
		menuOpenerImg.src = 'assets/images/sair.png';

	}else{
		ul.style.display='none';
		menuOpenerImg.src = 'assets/images/menu.png';
	}
}

/*START OF IMAGES SWIPE MOVEMENT*/
	var startingX , startingY , movingX , movingY ;
						function touchStart(evt){
						startingX = evt.touches[0].clientX ;
						startingY = evt.touches[0].clientY ;
						}
						function touchMove(evt){
						movingX = evt.touches[0].clientX ;
						movingY = evt.touches[0].clientY ;
						}
						function touchEnd(){
						if(startingX+100 < movingX){
												goNext();
						} else if(startingX-100 > movingX){
												goPrev();
												}
					 
					 
						}
/*END OF IMAGES SWIPE MOVEMENT*/