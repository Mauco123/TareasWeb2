//calculadora

//agregar los valores a la pantalla cuando se apriete el boton
function agregarPantalla(value){
    document.getElementById("pantalla").value+=value;
}

//limpiar pantalla
function limpiarPantalla(){
    document.getElementById("pantalla").value=""
}

//calcular
function calcular(){
    try{
        let result=eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value=result;
    }catch{
        document.getElementById("pantalla").value="Error";
    }
}




