//alert("hello, stranger")

var sidebar = document.querySelector(".sidebar");
var menu = document.querySelector(".buttonmenu");

console.log('sidebar');
console.log('menu');

menu.addEventListener('click', function(){
	
	sidebar.classList.toggle("ativo");

});