// Variabili

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