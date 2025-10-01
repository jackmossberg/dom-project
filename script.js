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
	input_field = document.getElementById("userInput");

	ul = document.querySelector("ul");
	li = document.createElement("li");

	ul.appendChild(li);
	li.textContent = input_field.value;

	input_field.value = "";

	function crossOut() {
		li.style.textDecoration = 'line-through';
	}

	li.addEventListener("click", crossOut);

	del_button = document.createElement("button");
	del_button.textContent = "X";

	li.appendChild(del_button);
	del_button.addEventListener("click", deleteListItem);

	function deleteListItem() {
		li.classList.add("delete");
	}
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}


enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

