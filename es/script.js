// ----- if else simply -----
let age = 18;
let message = age < 18 ? "Sei un minorenne" : "Sei un maggiorenne";

console.log(message);

let price = 100;
let discount = price <= 100 ? 100 : 80;

console.log(`Il totale è ${price * discount / 100} €`);

// ----- strings tricks -----
let userName = "123-456-7890";

console.log("La stringa " + userName + " è lunga " + userName.length); //*.lenght --> lunghezza di un elemento
console.log(userName.lastIndexOf("4")); //*.lastindexof --> trova la posizione di un elemento di qualcosa
console.log(userName.repeat(3)); //*.repeat --> ripete l'elemento tot volte
console.log(userName.startsWith(" ")); //*.startswith --> controlla se l'elemento inizia con un carattere speicifico (True/False)
console.log(userName.endsWith(" ")); //*.endsswith --> controlla se l'elemento finisce con un carattere speicifico (True/False)
console.log(userName.includes(" ")); //*.includes --> controlla se l'elemento contiene un carattere speicifico (True/False)
console.log(userName.replaceAll("-", " ")); //*.replace, .replaceall (replace, with)--> sostituisce l'elemeto con un'altro
console.log(userName.padStart(15, "0")); //*.padstart, .padend(tot, fill) --> riempie l'elemento con qualcosa all'inizio/fine

// ----- slice strings -----
const fullName = "Dio Bello";

let firstName = fullName.slice(0, 3);//*.slice(start, end) --> prende solo il pezzo selezionato
let lastName = fullName.slice(4, 9);//*.slice(start, end) --> prende solo il pezzo selezionato

console.log(fullName.slice(-1));//*.slice(-n) --> prende l'ultimo carattere dell'elemento
console.log(lastName + " " + firstName);

const doppio = "Nome Cognome";

console.log("Nome: " + doppio.slice(0, doppio.indexOf(" ")))//*.slice(0, .indexOf(" ")) --> prende la prima parola dell'elemento
console.log("Nome: " + doppio.slice(doppio.indexOf(" "), doppio.length))//*.slice(0, .indexOf(".lenght")) --> prende l' ultima parola dell'elemento

// ----- exercise -----
const email = "ossasiocil@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"), email.length);

console.log(email);
console.log(username);
console.log(extension);

// ----- NO METHOD CHAINING -----
function chain(){
    let userName = window.prompt("Inserisci in tuo UserName: "); //*window.prompt --> input inserita alert
    userName = userName.trim();//*.trim --> toglie tutti gli spazi
    let letter = userName.charAt(0);//*.charAt(position) --> prende il carattere
    letter = userName.charAt(0);//*.charAt(position) --> prende il carattere
    letter = letter.toUpperCase();//*.toUpperCase --> trasforma il testo in maiuscolo
    let extraChars = userName.slice(1);
    extraChars = extraChars.toLowerCase()//*.toLowerCase --> trasforma il testo in minuscolo
    userName = letter + extraChars;

    console.log(userName);
}

// ----- METHOD CHAINING -----
function chain2(){
    let userName = window.prompt("Inserisci in tuo UserName: ");

    console.log(userName.trim().toUpperCase().slice(0,1) + userName.toLowerCase().slice(1));
}

// ------ strict equality operator -----
const PI = 3.14;
if(PI == "3.14"){ //simply compare
    console.log("That's PI");
}
else{
    console.log("That's not PI");
}
if(PI === 3.14){ //simply compare (var nature)
    console.log("That's 100% PI");
}
else{
    console.log("That's not 100% PI");
}

// ----- random numbers -----
function rand(){
    const MIN = 1;
    const MAX = 10;
    const answer = Math.random() * (MAX - MIN + 1)//*.random()*(range+1) --> estrazione dei numeri naturali randomica con range

    console.log(answer);

    let attempts = 0;
    let running = true;
    
    while(running){
        let guess = window.prompt(`Prova a indovinare il numero [${MIN}-${MAX}]: `);
        guess = Math.round(1);
        guess = Number(guess); //*Number(var) --> la variabile deve essere di tipo numerico
        console.log(typeof guess + ": " + guess); //*typeof var --> dice il tipo di variabile
        if(isNaN(guess) || guess < 1 || guess > 100){//*isNaN(var) --> condizione avverata quando non è quel tipo di variabile
            alert("Porco dio deve essere un numero tra [1-100]!")
            running = false;
        }
        else if(attempts == 5){
            alert("Hai esaurito i tentativi");
        }
        else{
            if(guess == answer){
                alert("Finally you find the number, GG");
                running = false;
            }
            else{
                alert("Retry, wrong number");
                attempts++;
            }
        }
    }
}