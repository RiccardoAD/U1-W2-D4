/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
 
 /* SCRIVI QUI LA TUA RISPOSTA */
// const area= fuction (){

//} 
 
 function area(l1,l2){
     const areatot=l1*l2
 
 
 
   return areatot;
     
 }
  const areaRisul= (8,12)
  console.log("area ",areaRisul);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 function crazySum(num1,num2) {

// se il val dei due parametri è uguale , if risulta vero e quindi faccio 3*(la loro somma)
    if( num1===num2){
        return 3*(num1+num2);
// se mi risulta falso la somma dei due numeri 
    } else {
        return num1+num2;
    }
    
 }
console.log("esempio 1 ",crazySum(3,8));
console.log("esempio 2 ",crazySum(4,4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function crazyDiff(numero){
    // calcolo la differenza assoluta tra il numero e 19
    let diffAssoluta= Math.abs(numero-19);
    // controllo se il numero fornito è maggiore di 19 con un if
    if(numero>19){
        //se vero moltiplicala differenza assoluta *3
        diffAssoluta*=3;
    }
    return diffAssoluta
}

console.log(" eserciz.3",crazyDiff(45));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundaryn(n) {
    //ritorna true se n è compreso tra 20 e 100 (incluso) oppure
    //se n è uguale a 400.
    if((n>20 && n<=100)|| n===400){
        return true
    } else{
        return false
    }
    
}

console.log("esercizio 4 ",boundaryn(22));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  function epify(stri) {
    //se la stringa fornita comincia già con "EPICODE"( stringa.startWith("....")) allora deve
    //ritornare la stringa originale senza alterarla.
    if(stri.startsWith ("EPICODE")){
        return stri
    } else {
        // aggiunge la parola "EPICODE" all'inizio della stringa 
        return "EPICODE "+ stri
    }
    
}
console.log( "es5 esempio 1 ",epify("EPICODE"));
console.log("es5 esempio 2 ",epify("programmazione"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(numpos) {
    //veriico il se il numero è positivo ( > di zero ) e se è un multiplo di 3 o 7 
    if(numpos>0 ){
 
    if (numpos%3===0 || numpos%7===0) {
        return true;
    } else {
        return  "devi mettere Un numero positivo e multiplo di 3 o 7"
    } 
    } else {
        return  "devi mettere Un numero positivo e multiplo di 3 o 7"
    }
}
console.log("es6 caso 1 ",check3and7(71));
console.log("es6 caso 2",check3and7(72));

// o 
// const check3and7 = function (n) {
//     if (n >= 0 && (n % 3 === 0 || n % 7 === 0)) {
//       return true
//     } else {
//       return false
//     }
//   }
//   console.log(check3and7(20))
  


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(parola) {
    let splitString=parola.split("");   // scompongo la stringa in ogni singola lettera con.split poi tolgo eventuali spazi tra le parole con ("") in split
    let reverseArray =splitString.reverse(); // .revere() mi inverte la posizione delle lettere   in tutto il suo contenuto 
    let newArray=reverseArray.join("") // con .join riunisco le lettere nella stringa 

    return newArray;
    
}
console.log( " es 7 :",reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function(par1) {
    
    
    return par1.slice(1,par1.length -1);
}

console.log("esercizio 9: ",cutString("Buongiorno"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
