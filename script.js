var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}
function createListElement() {	
	let li = document.createElement("li");
    li.textContent = input.value;

    ul.appendChild(li);
    input.value = "";

    li.addEventListener("click", crossOut);

    var delButton = document.createElement("button");
    delButton.textContent = "X";
    li.appendChild(delButton);

    delButton.addEventListener("click", deleteListItem);

	function crossOut() {
		if (li.style.textDecoration != 'line-through')
			li.style.textDecoration = 'line-through';
		else
			li.style.textDecoration = 'none';
        li.classList.toggle("done");
	}

	function deleteListItem() {
		li.classList.add("delete");
	}
}


function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) {
		createListElement();
	} 
}


enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

