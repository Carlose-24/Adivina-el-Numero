let numeroSecreto = 0;
let intentos = 0;
let listadoNumeros=[];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? 'Vez':'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        //agrega numero a la lista
        //listadoNumeros.push(numeroSecreto);
    }else{
        //el usurio no acerto.
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es Menor');
        }else { 
            asignarTextoElemento('p','El numero secreto es Mayor');
        }
        intentos++;
        limpiarCaja();
    }
   return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';

}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //ya se sortearon todos los numero?
    if(listadoNumeros.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        //si el numero generado esta incluido en la lista
        if (listadoNumeros.includes(numeroGenerado)){
        return generarNumeroSecreto();
        } else{
        listadoNumeros.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juedo del Numero Secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    //iniciar el numero de intentos
    //deshabilitar el boton de nuevo juego  
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();



