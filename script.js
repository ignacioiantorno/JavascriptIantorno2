let nombre, sueldo, servicio;

alert("Hola! Bienvenido a BBVA! Conteste las siguientes preguntas para que podamos ofrecerle un producto que se ajuste a sus necesidades.")

nombre = prompt("Ingrese su nombre: ");
console.log(nombre)

do {
    sueldo =parseFloat(prompt("Bienvenido " + nombre + " Ingrese su salario bruto mensual"))
    console.log(sueldo)
} while (isNaN(sueldo));

if (sueldo < 9999) {
    servicio = "Caja de ahorro"
    console.log(servicio)
    alert(nombre + " Podemos ofrecerte caja de ahorro + tarjeta de debito sin costo")
}

else if (sueldo <! 69999 )  {
    servicio = "Tarjeta Platinum"
    console.log(servicio)
    alert(nombre + " Podemos ofrecerte Caja de ahorro en ARS y en USD + Tarjeta de crédito Visa Platinum")

}

else if (sueldo >! 70000) {
    servicio = "Tarjeta Gold"
    console.log(servicio)
    alert(nombre + " Podemos ofrecerte Caja de ahorro en ARS y USD + Tarjeta de crédito Visa GOLD")
}