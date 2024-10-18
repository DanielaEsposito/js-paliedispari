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
    const userWord = prompt(message);
    let userWordBreakDown = userWord.split("");
    let userWordBreakDownReverse = userWordBreakDown.reverse();
    console.log(userWordBreakDownReverse);
    
    
    

}


isWordPalindrome();










//*Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.