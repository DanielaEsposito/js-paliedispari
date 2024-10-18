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
let iswordpalindrome = false;
    const userWord = prompt(message);
    let userWordBreakDown = userWord.split("");
    userWordBreakDown = userWordBreakDown.reverse();
    const userWordBreakDownReverse = userWordBreakDown.join("");
    console.log(userWordBreakDownReverse);
    // SE la parola invertita è ugiale as userWord allora è palindroma    
    if (userWordBreakDownReverse === userWord){
     iswordpalindrome=true;
     alert("la parola è palindroma")
    }
    // ALTRIEMNTI non lo è
    else{
        alert("la parola Non è palindroma")
    }
    //OUTPUT
  return isWordPalindrome; 

}


isWordPalindrome();


//*Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.


/**
 * 
 * 
 * 
 * una funzione che chiede un numero compresto tra un valore minimo di 1 e un valore massimo di 5
 *  @param {Number}
 *  @param {Number}
 *  @param {"string"}
 * 
 **/

function askNumber(min, max, message= "Chiedi un numero"){
    //Chiedo un numero all'utente 
    const userNumber = parseInt(prompt(message));
    // FINCHE'il valore scritto dall'utente non è valido chiedo nuovamente un valore 
    while(isNaN(userNumber)){
        

    }
}