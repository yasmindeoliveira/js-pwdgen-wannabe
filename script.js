let passwordGenerator = document.getElementById("password-button");

passwordGenerator.addEventListener('click', function () {

    let nome = document.getElementById("input-nome").value;
    let cognome = document.getElementById("input-cognome").value;
    let colore = document.getElementById("input-colore").value;
    let numero1 = document.getElementById("input-numero1").value;
    let numero2 = document.getElementById("input-numero2").value;

    let password = nome + cognome + colore + "21";

    numero1 = parseInt(numero1);
    console.log("Primo numero scelto: " + numero1);

    numero2 = parseInt(numero2);
    console.log("Secondo numero scelto: " + numero2);

    let divisione = numero1 / numero2;
    let passwordRecupero = nome + cognome + colore + divisione;


    document.getElementById("p-password").innerHTML = password;
    document.getElementById("p-passwordRecupero").innerHTML = passwordRecupero;

});




//Codice non più valido

/* // Variabili

let nome = prompt ("Inserisci il tuo nome");
let cognome = prompt ("Inserisci il tuo cognome");
let colorePreferito = prompt ("Inserisci il tuo colore preferito");

// Stampa console

console. log (
    `
    --------- Informazioni Anagrafiche ---------
        Nome: ${nome}
        Cognome: ${cognome}

    ---- Informazioni sul colore preferito -----
        Colore Preferito: ${colorePreferito}
    `
);

// Password (non sicura)

console. log ("Password: " + nome + cognome + colorePreferito + 21);

// Pasword di recupero (non sicura)

let numero1 = prompt ("Inserisci un numero per calcolo password");
let numero2 = prompt ("Inserisci un altro numero per calcolo password");

numero1 = parseInt (numero1);
console. log ("Primo numero scelto: " + numero1);

numero2 = parseInt (numero2);
console. log ("Secondo numero scelto: " + numero2);

let divisione = numero1 / numero2;
console. log ("Password di recupero:" + nome + cognome + colorePreferito + divisione);

// Elementi mostrati sulla pagina html

document.getElementById ("p-nome") .innerHTML = nome;
document.getElementById ("p-cognome") .innerHTML = cognome;
document.getElementById ("p-colorePreferito") .innerHTML = colorePreferito;
document.getElementById ("p-numero1") .innerHTML = numero1
document.getElementById ("p-numero2") .innerHTML = numero2
document.getElementById ("p-password") .innerHTML = nome + cognome + colorePreferito + 21;
document.getElementById ("p-passwordRecupero") .innerHTML = nome + cognome + colorePreferito + divisione; */