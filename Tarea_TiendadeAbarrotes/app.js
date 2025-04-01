let inventario = [];

//FUNCION PARA MENU
function mostrarMenu(){
    return parseInt(prompt(
        "Opciones disponibles \n"+
        "1.Agregar producto \n"+
        "2.Mostrar productos \n"+
        "3.Buscar poducto por nombre \n"+
        "4.Salir \n"+
        "Elige una opcion"
    ));
}

function agregarProducto(){
    let nombre = prompt("Introduce el nombre del producto: ");
    let cantidad = parseInt(prompt("Ingresa la contidad del producto: "));
    let precio = parseInt(prompt("Ingresa el precio del producto: "));

    if(cantidad > 0 && precio >0){
        //Generar el objeto e insertar los datos que ingreso el ususario
        let producto ={
            nombre:nombre,
            cantidad:cantidad,
            precio:precio
        }
        inventario.push(producto);
        alert("Producto agregado");  

    }else{
        alert("La cantidad y precio deben ser numeros positivos")
    }
        

}

function mostrarProductos(){
    if(inventario.length === 0){
        alert("No hay productos en el inventario")
    }else{

        let mensaje="Productos en inventario \n";
        for(let i = 0;i<inventario.length;i++){
            mensaje += `Producto  ${i+1}\n`+
                       `Nombre: ${inventario[i].nombre}\n`+
                       `Cantidad: ${inventario[i].cantidad}\n`+
                       `Precio: ${inventario[i].precio}\n`+
                       `-----------------------------------\n`;
        }
        alert(mensaje);
        
    }
    
}

function buscarProducto(){
    let resultadoBusqueda = "";
    let busqueda = prompt("Ingrese el nombre del producto que desea buscar");
    for (let j=0;j <inventario.length;j++){
        if(busqueda === inventario[j].nombre){
            resultadoBusqueda = `Producto  ${j+1}\n`+
                                `Nombre: ${inventario[j].nombre}\n`+
                                `Cantidad: ${inventario[j].cantidad}\n`+
                                `Precio: ${inventario[j].precio}\n`;                       
        }
    }
    if(resultadoBusqueda === ""){
        alert ("Producto no encontrado");
    }else{
        alert(resultadoBusqueda);
    }
    
    
}

function iniciarPrograma(){
    let continuar = true;
    while (continuar){
        let opcion  = mostrarMenu();
        switch (opcion){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProductos();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa ....");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intenta de nuevo");
        }
    }
    alert("Programa Finalizado");
    
}

iniciarPrograma()
