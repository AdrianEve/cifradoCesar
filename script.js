// Función de cifrado César
function cifrarCesar() {
    let texto = document.getElementById("caesarInput").value;
    let desplazamiento = parseInt(document.getElementById("caesarShift").value);
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            let codigo = texto.charCodeAt(i);
            // Mayúsculas
            if (codigo >= 65 && codigo <= 90) {
                char = String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
            }
            // Minúsculas
            else if (codigo >= 97 && codigo <= 122) {
                char = String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
            }
        }
        resultado += char;
    }
    document.getElementById("caesarResult").innerText = resultado;
}

// Función de descifrado César
function descifrarCesar() {
    let texto = document.getElementById("caesarInput").value;
    let desplazamiento = parseInt(document.getElementById("caesarShift").value);
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            let codigo = texto.charCodeAt(i);
            // Mayúsculas
            if (codigo >= 65 && codigo <= 90) {
                char = String.fromCharCode(((codigo - 65 - desplazamiento + 26) % 26) + 65);
            }
            // Minúsculas
            else if (codigo >= 97 && codigo <= 122) {
                char = String.fromCharCode(((codigo - 97 - desplazamiento + 26) % 26) + 97);
            }
        }
        resultado += char;
    }
    document.getElementById("caesarResult").innerText = resultado;
}

// Función de cifrado Vigenère
function cifrarVigenere() {
    let texto = document.getElementById("vigenereInput").value;
    let clave = document.getElementById("vigenereKey").value.toUpperCase();
    let resultado = '';
    let j = 0;

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            let codigo = texto.charCodeAt(i);
            let claveLetra = clave[j % clave.length].charCodeAt(0) - 65;

            // Mayúsculas
            if (codigo >= 65 && codigo <= 90) {
                char = String.fromCharCode(((codigo - 65 + claveLetra) % 26) + 65);
            }
            // Minúsculas
            else if (codigo >= 97 && codigo <= 122) {
                char = String.fromCharCode(((codigo - 97 + claveLetra) % 26) + 97);
            }
            j++;
        }
        resultado += char;
    }
    document.getElementById("vigenereResult").innerText = resultado;
}

// Función de descifrado Vigenère
function descifrarVigenere() {
    let texto = document.getElementById("vigenereInput").value;
    let clave = document.getElementById("vigenereKey").value.toUpperCase();
    let resultado = '';
    let j = 0;

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            let codigo = texto.charCodeAt(i);
            let claveLetra = clave[j % clave.length].charCodeAt(0) - 65;

            // Mayúsculas
            if (codigo >= 65 && codigo <= 90) {
                char = String.fromCharCode(((codigo - 65 - claveLetra + 26) % 26) + 65);
            }
            // Minúsculas
            else if (codigo >= 97 && codigo <= 122) {
                char = String.fromCharCode(((codigo - 97 - claveLetra + 26) % 26) + 97);
            }
            j++;
        }
        resultado += char;
    }
    document.getElementById("vigenereResult").innerText = resultado;
}
