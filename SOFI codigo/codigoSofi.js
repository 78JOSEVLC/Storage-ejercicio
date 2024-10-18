

// var a = 1;
// let b = 2;
// const c = 3;
// function prueba() {

//   console.log("a",a);
// }
// prueba()
//  var a = 5
// const array  = [3,5,9,2]
// for (let index = 0; index < array.length; index++) {
//     var a = 1;
//     let b = 2;
//     const c = 3;
// }
// console.log(a);

// console.log("Global Scope: ", a, b, c);
// var a = 1;
// let b = 2;
// const c = 3;

// for(var a = 0; a<10; a++){
//     console.log('Loop: ',a)//0-9
// }

// console.log("Global Scope: ", a, b, c);//9,2,3

//** Local Storage */

//guardar info
// localStorage.setItem("Nombre","Joan")
localStorage.Nombre = "Luis";
localStorage.Apellido = "Rioja";

//traernos la info
const nombre = localStorage.getItem("Nombre");

// console.log(nombre)
// localStorage.clear()

// console.log(localStorage.key(1))
// console.log(localStorage.getItem(localStorage.key(0)));

// for(let i=0; i<localStorage.length; i++) {
//     let key = localStorage.key(i);
//     console.log(`${key}: ${localStorage.getItem(key)}`);
//   }

const user = {
  firstname: "Alberto",
  lastName: "Santos",
};

localStorage.setItem("user", JSON.stringify(user));

const user1 = JSON.parse(localStorage.getItem("user"));
console.log(user1.firstname);

//ARRAY
let personajesAnime = ['Goku','Levi', 'Mikasa', 'Zoro', 'Luffy', 'Tanjiro', 'Nezuko'];

localStorage.setItem("anime", JSON.stringify(personajesAnime));

let data = JSON.parse(localStorage.getItem("anime"));

console.log("Mi array", data);

//*PRACTICA FORMULARIO*/
const inputName = document.getElementById("nombre")
const btn = document.getElementById("btn")
const printP = document.getElementById("pintarNombre")

function printName() {
    const nameLocalStorage = localStorage.getItem("Name")
    printP.innerText = nameLocalStorage
}
function greeting(e) {
    e.preventDefault()
    console.log(inputName.value)
    localStorage.setItem("Name",inputName.value)
    printName()
}

printName()

btn.addEventListener("click",greeting)
