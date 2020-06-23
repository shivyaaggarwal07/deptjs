const clear = document.querySelector(".clear");
const dateelement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
function loading()
{
var username = document.getElementById("name");
username.innerHTML=localStorage.getItem('name');	
}
//variables
let LIST;
let id ;
//everytime we add new item to the list we need to increment the id by 1

//get item from the localstorage
let data = localStorage.getItem("TODO");
const check ="fa-check-circle";
const uncheck="fa-circle";
const linethrough = "linethrough";

//show today's date
const options = {weekday :"long", month:"short", day:"numeric"};
const today = new Date();
//check if data is not empty
if(data)
{
	//there is data
	LIST = JSON.parse(data);
	id=LIST.length; //set the id to the last one in the list
	loadList(LIST); //load the list to the user interface
}
//if data is empty
else
{
LIST=[];
id=0;
}

//load the items to the user's interface
function loadList(array)
{
	array.forEach(function(item){
		addToDo(item.name,item.id,item.done,item.trash);
	});
}

//clear the local storage
clear.addEventListener("click",function() {
	localStorage.clear();
	location.reload();
})

dateelement.innerHTML = today.toLocaleDateString("en-US", options); 


//add TODO
function addToDo(toDo, id, done, trash){

if(trash)
{
	return;
}
const Done = done ? check : uncheck;
const line = done ? linethrough: "";

const item = `<li class="item">
					<i class="far  ${Done} co" job="complete" id="${id}" onclick="completeTodo(${id})"></i>
					<p class="text ${line}"> ${toDo} </p>
					<i class="far fa-trash-alt de" job="delete" id="${id}" onclick="removetodo(${id})"></i>
			</li>`
const position = "beforeend";

// using insertAdjacentHTML(position,text) text here is the item or todo
list.insertAdjacentHTML(position,item);
}
// addToDo("Drink Coffee",1,false,false);


// //get the input value
document.addEventListener("keyup",function(event){
	if(event.keyCode === 13)
	{
		const toDo = input.value;
	//check if the input is empty or not
	if(toDo){
		addToDo(toDo,id,false,false); //when user enters the todo trash and done is automatically set to false as it is not done yet
		LIST.push(
		{
			name:toDo,
			id:id,
			done:false,
			trash:false
		});
		//add item to localstorage(code must be added where the list array is updated)
localStorage.setItem("TODO",JSON.stringify(LIST));

	id++; //after adding a item need to increment the id by 1
	}
	//then make the input value empty
	input.value="";
	}
});
// addToDo("Coffee" ,1,false,false);

function completeTodo(id)
{
	var element = document.getElementById(id);
	element.classList.toggle(check);
	element.classList.toggle(uncheck);
	element.parentNode.querySelector(".text").classList.toggle(linethrough);
	LIST[element.id].done = LIST[element.id].done ? false : true;
	 //add item to localstorage
	localStorage.setItem("TODO",JSON.stringify(LIST));
}

function removetodo(id)
{
	var element = document.getElementById(id);
	element.parentNode.parentNode.removeChild(element.parentNode);
	LIST[element.id].trash=true;
	 //add item to localstorage
	localStorage.setItem("TODO",JSON.stringify(LIST));

}
// list.addEventListener("click",function(event){
// 	const element = event.target; //this will return clicked element inside our list
// 	const elementjob = element.attributes.job.value; //delete or complete
// 	if(elementjob == "complete")
// 	{
// 	completeTodo(element);
// 	 }
// 	 else if(elementjob == "delete")
// 	 {
// 	 	removetodo(element);
// 	 }
	
// });
