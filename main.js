// *Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

/**
 * 
 * 
 * 
 * una funzione che analizza una parola per capire se è palindroma
 *  @param {"string"}
 * 
 **/

function isWordPalindrome(message = "inserisci una parola") {
// chiedo all'utente di inserire una parola 
let iswordpalindromeControl = false;
    const userWord = prompt(message);
    let userWordBreakDown = userWord.split("");
    //inverto la parola scelta dallìutente 
    userWordBreakDown = userWordBreakDown.reverse();
    const userWordBreakDownReverse = userWordBreakDown.join("");
    //console.log(userWordBreakDownReverse);
    // SE la parola invertita è ugiale as userWord allora è palindroma    
    if (userWordBreakDownReverse === userWord){
     iswordpalindromeControl=true;
     alert("la parola è palindroma")
    }
    // ALTRIEMNTI non lo è
    else{
        alert("la parola Non è palindroma")
    }
    //OUTPUT
  return isPalindromeControl; 

}



//*Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.


/**
 * 
 * una funzione che chiede un numero compresto tra un valore minimo specificato e un valore massimo specificato
 *  @param {Number}
 *  @param {Number}
 *  @param {"string"}
 * 
 **/

function askNumber(min, max, message= "Chiedi un numero"){
    //Chiedo un numero all'utente 
    const userNumber = parseInt(prompt(message) );
    // FINCHE'il valore scritto dall'utente non è valido chiedo nuovamente un valore 
    while(isNaN(userNumber)|| userNumber < min || userNumber > max){
        userNumber= parseInt(prompt("il valore scritto non è valido..." + message));
    }
    return userNumber;
}


/**
 * una funzione che chiede all'utente di scegliere tra pari e dispari 
 * 
 *  @param {"string"}
 * 
 **/
function askString ( whitelist=[], message = "scrivi una stringa"){
    // chiedo all'utente se sceglie pari o dispari 
    const userChoice = prompt(message);
    if (whitelist.length > 0){
    //console.log(userChoice);
    //FINCHE' la parola scelta dall'utente non è inclusa nella lista allora mando un messaggio
    while(!whitelist.includes(userChoice)){
        userChoice= prompt("la parola non è valida..." + message);
    }
    }     
    return userChoice;
}
//chiedo al computer di generare un numero casuale tra 1 e 5
/**
 * una funzione che genera un numero random tra un valore minumo specificato ed un valore massimo specificato 
 * 
 *  @param {Number} //min
 *  @param {Number} //max
 * 
 **/

function randomNumbers (min, max) {
    return Math.floor(Math.random()*(max - min + 1 ) )+ min;
}
/**
 * una funzione che mi dice se un numero è pari 
 * 
 *  @param {Number} 
 * 
 **/
function isNumberEven (num){
    if (num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}



const userNumber = askNumber (1,5, "Scegli un numero tra 1 e 5");
const userChoice = askString (["pari", "dispari"], "Scegli pari o dispari ")