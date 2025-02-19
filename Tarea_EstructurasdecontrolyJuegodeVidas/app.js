//COMPARAR DOS NUMEROS

let num1 = parseInt(prompt("dame el primer numero"));
let num2 = parseInt(prompt("dame el segundo numero numero"));
//SI EL VALOR 1 ES MENOR QUE EL VALOR 2
if (num1 < num2){
    console.log(num2 + " es mayor que " + num1);
    alert(num2 + " es mayor que " + num1);

//SI LOS VALORES SON IGUALES
}else if(num1 == num2){
    console.log(num1 + " es igual a el valor " + num2);
    alert(num1 + " es igual a el valor " + num2);
    
//SI EL VALOR 1 ES MAYOR AL VALOR 2 
}else{
    console.log(num1 + " es mayor que " + num2)
    alert(num1 + " es mayor que " + num2);
}