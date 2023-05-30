

//Ejercicio 1
let evaluar = document.querySelector('.evaluar');
evaluar.addEventListener('click', () => {
    let edad = document.querySelector('.edad');
    let evaluarEdad = document.querySelector('.evaluarEdad');
    evaluarEdad.innerHTML = (parseInt(edad.value) >=18 ? "Ya no estas chichi":"Eres un polluelito bebé")
})

//Ejercicio 2
let calcularNota = document.querySelector('.calcularNota');
calcularNota.addEventListener('click', () =>{
    let nombre = document.querySelector('.nombre').value;
    let carnet = document.querySelector('.carnet').value;
    let examen = document.querySelector('.nexamen').value;
    let tareas = document.querySelector('.ntareas').value;
    let asistencia = document.querySelector('.asistencia').value;
    let invest = document.querySelector('.ninvest').value;
    let resumen = document.querySelector('.resumenNota');

    if(nombre == ""){
        resumen.innerHTML = "Por favor ingrese el nombre del estudiante";
    }else{
        let resultado = (examen*0.2 )+(tareas*0.4)+(asistencia*0.1)+(invest*0.3);
        resumen.innerHTML = "El estudiante:  " + nombre + "<br>Con número de carnet:  "+ carnet + "<br>Ha obtenido una nota final de:  " +resultado.toFixed(1);
    }
})

//Ejercicio 3
let calcularAumento = document.querySelector('.calcularAumento');
calcularAumento.addEventListener('click',()=>{
    let trabajador = document.querySelector('.trabajador').value;
    let salario = document.querySelector('.salario').value;
    let categorias = document.getElementById('categorias').value;
    let aumentoSalario = document.querySelector('.aumentoSalario');
    switch(categorias){
        case "cat A = 15%" :
            aumentoSalario.innerHTML ="El trabajador:  " + trabajador + "<br>Con un salario de:  $" + salario + "<br>Ha obtenido un aumento de:  " + categorias + "<br>El salario final es de:  $" +(salario * 1.15).toFixed(2);
            break;
        case "cat B = 30%":
            aumentoSalario.innerHTML ="El trabajador:  " + trabajador + "<br>Con un salario de:  $" + salario + "<br>Ha obtenido un aumento de:  " + categorias + "<br>El salario final es de:  $" +(salario * 1.30).toFixed(2);
            break;

        case "cat C = 10%":
            aumentoSalario.innerHTML ="El trabajador:  " + trabajador + "<br>Con un salario de:  $" + salario + "<br>Ha obtenido un aumento de:  " + categorias + "<br>El salario final es de:  $"+ (salario * 1.10).toFixed(2);
            break;

        case "cat D = 20%":
            aumentoSalario.innerHTML ="El trabajador:  " + trabajador + "<br>Con un salario de:  $" + salario + "<br>Ha obtenido un aumento de:  " + categorias + "<br>El salario final es de:  $" +(salario * 1.20).toFixed(2);
            break;
        default:
            aumentoSalario.innerHTML ="Por favor seleccione una categoría";
        }
})

//Ejercicio 4
let comparando = document.querySelector('.Comparando');
comparando.addEventListener('click',()=>{
    let resultado = document.querySelector('.resultado');
    let numA = parseInt(document.querySelector('.numA').value);
    let numB = parseInt(document.querySelector('.numB').value);

    if(numA>numB){
        resultado.innerHTML = "El número mayor es:  " + numA;
    }else if(numA<numB){
        resultado.innerHTML = "El número mayor es:  " + numB;
    }else if(numA = numB){
        resultado.innerHTML = "Ambos números son iguales";
    }
})

//Ejercicio 5
let descuentoCarro = document.querySelector('.descuentoCarro');
descuentoCarro.addEventListener('click',()=>{
    let costoCarro = document.querySelector('.costoCarro').value;
    let modelo = document.getElementById('descuento').value;
    let valorCarro = document.querySelector('.valorCarro');
    let carrito = costoCarro
    switch(modelo){
        case "FORD FIESTA" :
            valorCarro.innerHTML ="El modelo de vehículo:  " + modelo + "<br>Con un valor inicial de:  $" + costoCarro  + "<br>Ha obtenido un descuento de: 5% " + "<br>El costo final es de:  $" +(carrito * 0.95).toFixed(2);
            break;
        case "FORD FOCUS":
            valorCarro.innerHTML ="El modelo de vehículo:  " + modelo + "<br>Con un valor inicial de:  $" + costoCarro + "<br>Ha obtenido un descuento de: 10%  "+ "<br>El costo final es de:  $" +(carrito * 0.90).toFixed(2);
            break;
        case "FORD ESCAPE":
            valorCarro.innerHTML ="El modelo de vehículo:  " + modelo + "<br>Con un valor inicial de:  $" + costoCarro + "<br>Ha obtenido un descuento de: 20%  " + "<br>El costo final es de:  $"+ (carrito * 0.80).toFixed(2);
            break;
        default:
            valorCarro.innerHTML ="Por favor seleccione un modelo de vehículo";
        }
})

//Ejercicio 6
let evaluarViaje = document.querySelector('.evaluarViaje');
evaluarViaje.addEventListener('click',()=>{
    let origen = document.getElementById('origen').value;
    let destino = document.getElementById('destino').value;
    let costoViaje = document.querySelector('.costoViaje');
    let viaje = 0 ;

    if (origen == "palma" && destino == "costa") {
        viaje = 30* 0.95;
        costoViaje.innerHTML = "El costo de tu viaje es: $" + viaje;
    } else if (origen == "palma" && destino == "panchimalco") {
        viaje = 20* 0.90;
        costoViaje.innerHTML = "El costo de tu viaje es: $" + viaje;
    } else if (origen == "palma" && destino == "puerto") {
        viaje = 35* 0.85;
        costoViaje.innerHTML = "El costo de tu viaje es:  $" + viaje;
    } else {
        costoViaje.innerHTML = "El costo de tu viaje no tiene descuento"
    }
})

//Ejercicio 7
let calPonderar = document.querySelector('.calPonderar');
calPonderar.addEventListener('click', () =>{
    let notaA = document.querySelector('.notaA').value;
    let pondA = document.querySelector('.pondA').value;
    let notaB = document.querySelector('.notaB').value;
    let pondB = document.querySelector('.pondB').value;
    let respuesta = document.querySelector('.ponderacion');

    let resultadoA = notaA * (pondA/100);
    let resultadoB = notaB * (pondB/100);

    respuesta.innerHTML = "La calificación ponderada de la nota A  es:  " + resultadoA.toFixed(1) + "<br>La calificación ponderada de la nota B  es: " + resultadoB.toFixed(1)
})

//Ejercicio 8
let convertir = document.querySelector('.convertir');
convertir.addEventListener('click', ()=>{
    let celcius = document.querySelector('.celcius').value;
    let conversion = document.querySelector('.conversion');
    let fahrenheit = ((celcius * (9/5)) + 32).toFixed(2);

    if(fahrenheit >=14 && fahrenheit <32){
        conversion.innerHTML = "La temperatura en Fahrenheit es: " + fahrenheit + "°F " + "<br>Temperatura baja" 
    } else if(fahrenheit >=32 && fahrenheit <68) {
        conversion.innerHTML = "La temperatura en Fahrenheit es: " + fahrenheit + "°F " + "<br>Temperatura adecuada"
    } else if(fahrenheit >=68 && fahrenheit <96) {
        conversion.innerHTML = "La temperatura en Fahrenheit es: " + fahrenheit + "°F " + "<br>Temperatura alta"
    } else {
        conversion.innerHTML = "Temperatura desconocida"
    }
    
})

//Ejercicio 9
let datos = [];
let ingresar = document.querySelector('.ingresar');
ingresar.addEventListener('click', ()=>{
    
    for (let i = 1; i <= 10; i++) {
        const numero = parseInt(document.getElementById(`n${i}`).value);
        if (!isNaN(numero)) {
        datos.push(numero);
        }
    }

    console.log(datos);

        let analizar = document.querySelector('.analizar');
        analizar.addEventListener('click', () => {
        let analizado = document.querySelector('.analizado');
        let cont_negativo = 0;
        let cont_positivo = 0;
        let cont_mul15 = 0;
        let sum_pares = 0;

        datos.forEach(valor =>{
            if (valor < 0){
                cont_negativo++;
            } else if (valor > 0){
                cont_positivo++;
            } else if (valor % 15 === 0){
                cont_mul15++;
            }
        })

        for (let j = 0; j < datos.length; j++) {
            if (datos[j] % 2 === 0) {
                sum_pares += datos[j];
            }
        }

        analizado.innerHTML = "Cantidad de números negativos: " + cont_negativo + "<br>Cantidad de números positivos:" + cont_positivo + "<br>Cantidad de números multiplos de 15: " + cont_mul15 + "<br>La suma de los números pares es: " + sum_pares
        
        if(analizado != ""){
            datos = [];
        }
        

    })


})







