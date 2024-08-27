let cadena;
const regex = /[A-ZÁÉÍÓÚÜÑáéíóúü]/;

function encrypt() {

    cadena = document.getElementById('text_input').value;

    var diccionario = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    var caracteres = cadena.split('');

    for (var i = 0; i < caracteres.length; i++) {
        var caracterActual = caracteres[i];

        if (diccionario.hasOwnProperty(caracterActual)) {
            caracteres[i] = diccionario[caracterActual];
        }
    }



    var cadenaEncriptada = caracteres.join('');
    if (regex.test(cadena)) {
        var warningText = document.getElementById("warningText");

        warningText.classList.add("warning-animation");
    
        setTimeout(function() {
            warningText.classList.remove("warning-animation");
        }, 500);
    }
    else{
        display(cadenaEncriptada);
    }
    return cadenaEncriptada;
}

function decrypt() {
    cadenaEncriptada = document.getElementById('text_input').value;

    var diccionarioInverso = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    for (var clave in diccionarioInverso) {
        if (diccionarioInverso.hasOwnProperty(clave)) {
            var valor = diccionarioInverso[clave];
            cadenaEncriptada = cadenaEncriptada.split(clave).join(valor);
        }
    }

    if (regex.test(cadenaEncriptada)) {
        var warningText = document.getElementById("warningText");

        warningText.classList.add("warning-animation");
    
        setTimeout(function() {
            warningText.classList.remove("warning-animation");
        }, 500);
    }
    else{
        display(cadenaEncriptada);
    }
    return cadenaEncriptada;
}

function display(cadena){
    var imageElement = document.getElementById("resultImage");
    var titleElement = document.getElementById("resultTittle");
    var textElement = document.getElementById("resultText")
    var copyElement = document.getElementById("copyButton")
    var output = document.getElementById("textOutput");
    var userResult = document.getElementById('resultContainer');

    userResult.style.justifyContent = 'initial';
    userResult.style.alignItems = 'initial';
    copyElement.hidden = false;
    imageElement.hidden = true;
    titleElement.hidden = true;
    textElement.hidden = true;
    output.hidden =false;

    output.innerText = cadena;
}

function copy() {
    var textarea = document.getElementById("textOutput");
    textarea.select();
    
    document.execCommand("copy");

    textarea.setSelectionRange(0, 0);

    var copyAlert = document.getElementById("copyAlert");
    copyAlert.style.display = "block";

    // Oculta la alerta después de 1.5 segundos
    setTimeout(function() {
        copyAlert.style.display = "none";
    }, 1500);
}