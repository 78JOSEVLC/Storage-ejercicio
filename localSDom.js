// hacemos console.log para probar la coneccion entre JS y HTML mostrando *mje** en pantalla web
console.log('comenzando Ejerc Local Storage');
// instanciamos las variables a usar y le damos un valor que es traido 
// del HTML, identificado por "ID" usando identificador de etiquetas: "getElementById"
const btn = document.getElementById('btn')
const inputName = document.getElementById('name')
const email = document.getElementById('email')
const areaTexto = document.getElementById('areaTexto')
const parrafo = document.getElementById('pintar');
// evitar que se actualice con la recarga de pagina
function onSubmit(e) { // "al clicar" = "onSubmit"
    e.preventDefault() // preventDefault= evita actualizar pagina por Default
    //console.log(inputName)
    // creamos variables dentro de la funcion (solo se usaran aqui) 
    // toman valores "value" del HTML mediente metodo "getElementById"
    const inputName1 = inputName.value
    const email1 = email.value
    const areaTexto1 = areaTexto.value
    // creamos un "objeto" con 3 atributos
    const user={
      Nombre: inputName1,
      correo: email1,
      Texto: areaTexto1,
    }
    console.log(inputName1,' ',email1,' ',areaTexto1) // mostramos los valores traidos del HTML
    console.log(user) //muestra p/pantalla web el "objeto" con sus valores
    // convierte a dicho "objeto" en "tipo String" (metodo "stringify") 
    // para poder guardarlo en el Storage del navegador 
    localStorage.setItem("user", JSON.stringify(user));
    // luego creamos otra variable para guardar valor de "user" ("string" guardado en navegador) y 
    // que sacamos el Storage y convertimos nuevamente a su tipo original "objetc" mediante JSON.parse
    let objetoJose = JSON.parse(localStorage.getItem("user"));
    // mostramos por pantalla dicho "objeto"
    console.log("Jose array", objetoJose);
    // colocamos en un parrafo del HTML by ID (<p>) los valores del "objeto" mediante metodo "innerText"
    parrafo.innerText = objetoJose.Nombre +" "+ objetoJose.correo +" "+ objetoJose.Texto;
  }  
// luego de instanciar la variable "btn" le damos el valor 
// del boton "btn" que traemos del HTML con ElementById = "btn"
// esto le dice al boton "btn" que escuche/este atento a un **click** para ejecutar funcion "onSubmit" 
btn.addEventListener("click",onSubmit)

