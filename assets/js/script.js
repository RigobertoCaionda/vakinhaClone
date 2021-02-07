let containerItemTitle = document.querySelector('.container--item--titulo');
if(containerItemTitle.innerHTML.length > 35){
	let newText = containerItemTitle.innerHTML.substr(0, 35) + '...';
	document.querySelector('.container--item--titulo').innerHTML = newText;
}
function onFocus(){
	let searchInput = document.querySelector('.searchInput');
		let alertDiv = document.createElement('div');
		alertDiv.classList.add('alertDiv');
		alertDiv.innerHTML = 'Digite ao menos 3 caracteres.';
		searchInput.parentElement.insertBefore(alertDiv, searchInput.ElementSibling);
		searchInput.style.outline = 'none';
		searchInput.style.border = "4px solid #bfdeff";
		alert == true;
}
function changeBorder(){
	let remove = document.querySelector('.alertDiv');
	remove.remove(remove);
	let searchInput = document.querySelector('.searchInput');
	searchInput.style.border = "1px solid #ced4da";
}