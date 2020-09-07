var intentos = 4;
var respuestaCorrecta = 'foco';
let alertWin =`    <div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>En Horabuena!</strong> Has acertado con la respuesta, MUY BIEN.
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>`;
let pista1 = `    <div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Pista!</strong>Empieza con F.
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>`;
let pista2 = `    <div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Pista!</strong>Es parecido a foca.
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>`;
function adivinar(){
    for (intentos; intentos > -1; intentos--) {
        let respuesta = document.getElementById('respuesta').value;
        //console.log(respuesta);
        document.getElementById("intentos").innerHTML= intentos;
        if (respuesta == 'foco') {
            document.getElementById("resultado").innerHTML= alertWin;
            var numeroIntentos = document.getElementById('intentos');
            numeroIntentos.style.color= '#00ff55';
            break;
        }
        intentos--;
        //console.log(intentos);
        if (intentos == 3) {
            document.getElementById("resultado").innerHTML= pista1;  
        }
        if (intentos == 2) {
            document.getElementById("resultado").innerHTML= pista2;  
        }
        break;
    }
}