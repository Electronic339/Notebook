

let count =1;
let ul = document.getElementById("list");



function add() {
	let val = document.getElementById("form").value;
	if (val) {
		let item = document.createElement('li');
		item.textContent = val;
		item.id = 'Item';
		item.setAttribute('onclick', `changeStatus(${count})`);
		count++;
		ul.append(item);
		document.getElementById('text').value = ' ';
	}
}

	$(document).ready(function(){
$("html").on('click', '#Item', function(){
$(this).fadeOut(500);
	count--;
});

	});
