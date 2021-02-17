let searchInput = document.querySelector('.searchInput');
let alertDiv = document.querySelector('.alertDiv');
let containerItemTitle = document.querySelectorAll('.container--item--titulo');
for(let i = 0; i < containerItemTitle.length; i++) {
	if(containerItemTitle[i].innerHTML.length > 34) {
		let newText = containerItemTitle[i].innerHTML.substr(0, 34) + '...';
		containerItemTitle[i].innerHTML = newText;
	}
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
	if(ul.style.opacity=='0'){
		ul.style.opacity='1';
		menuOpenerImg.src = 'assets/images/sair.png';

	}else{
		ul.style.opacity='0';
		menuOpenerImg.src = 'assets/images/menu.png';
	}
}