//var uwu = new XMLHttpRequest();

//const getData = async ()=>{
//	let input = await fetch("data.txt");
//	let output = await input.json();
//}

//uwu.open("GET","data.txt", true);
//uwu.send();


//-------------------------------->UwU<----------------------------------//


let valor = prompt("Tu nombre:");
const ins = document.getElementById('kk');
let saludo = document.getElementById("saludo");
let texto = document.getElementById("texto");
let exit = document.getElementById("uwu");
let con = document.querySelector(".con__modal");

ins.addEventListener("click",saludar)
exit.addEventListener("click",quit)

function saludar(){
		let modal = document.querySelector(".modal");
		let body = document.querySelector(".body");
		con.style.animation = "aparecer 1s forwards";
		con.style.display = "flex";
		return true
//		body.style.overflow = "hidden";
	}

function quit(){
	con.style.display = "none"
}


if (valor == "" || valor == null || !isNaN(valor)){
	ins.innerHTML += "BIENVENIDOS!";
	saludo.innerHTML = `Hola <i>Desconocido.</i> :) <br>`;
	texto.innerHTML = `:v si eres curioso mano XDD`;

}else{
	ins.innerHTML += `BIENVENIDO <span>${valor}</span>.`;
	saludo.innerHTML = `Hola <span>${valor}</span>. :) <br>`;
	texto.innerHTML = `:v si eres curioso mano XDD`;
}

//switch (valor){
//	case "":ins.innerHTML += "BIENVENIDOS!"; 
//	break;
//	case null:ins.innerHTML += "BIENVENIDOS!"; 
//	break;
//	default:ins.innerHTML += `BIENVENIDO <span>${valor}</span>`; 
//	break;
//}

let array = [
	{nombre:"Artemis Fowl",src:"af.jpg",multi:""},
	{nombre:"Dragon Ball Z: los 3 Androides",src:"dbz3a.jpg",multi:""},
	{nombre:"Dragon Ball Z: Broly",src:"dbzb.jpg",multi:""},
	{nombre:"Dragon Ball Z: Broly 2",src:"dbzb2.jpg",multi:""},
	{nombre:"Dragon Ball Z: Broly 3",src:"dbzb3.jpg",multi:"",},
	{nombre:"Dragon Ball Z: El Guerrero Del Futuro",src:"dbzf.jpg",multi:"",},
	{nombre:"Dios No Está Muerto",src:"dnem.jpg",multi:"",},
	{nombre:"En Busca De La Felicidad",src:"ebdlf.jpg",multi:"",},
	{nombre:"Forrest Gump",src:"fg.jpg",multi:""},
	{nombre:"Los Aeronautas",src:"la.jpg",multi:""},
	{nombre:"Piratas Del Caribe: La Maldición Del Perla Negra",src:"pdc1.jpg",multi:"",},
	{nombre:"Piratas Del Caribe: El Cofre Del Hombre Muerto",src:"pdc2.jpg",multi:"",},
	{nombre:"iratas Del Caribe: En El Fin Del Mundo",src:"pdc3.jpg",multi:"",},
	{nombre:"Piratas Del Caribe: En Aguas Misteriosas",src:"pdc4.jpg",multi:"",},
	{nombre:"Piratas Del Caribe: La Venganza De Salazar",src:"pdc5.jpg",multi:""},
	{nombre:"Michael Jackson: Searching For Neverlad",src:"sfn.jpg",multi:""},
	{nombre:"Your Name",src:"yn.jpg",multi:""},
]

const hola = document.getElementById("box");
let div = "";

for (var i = 0; i < array.length; i++) {
	div += `<div class="flex">
				<a href="vid/${array[i]["multi"]}">
					<div>
						<img src="img/${array[i]["src"]}" alt="">
					</div>
					<h4>${array[i]["nombre"]}</h4>
				</a>
			</div>`;
}

hola.innerHTML = div;


console.log(i)

let nombre = "pedro"; 