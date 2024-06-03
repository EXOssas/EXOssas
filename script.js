var media = 0;
var i = 1;

function add() {
    var voto = parseFloat(document.getElementById("voto").value);
    var peso = parseFloat(document.getElementById("peso").value);

    if (isNaN(voto) || isNaN(peso) || voto < 2 || voto > 10 || peso <= 0) {
        alert("Inserisci un voto valido (compreso tra 2 e 10) e un peso maggiore di zero.");
        return;
    }

    // Aggiorna il totale della media ponderata
    media = ((media * (i - 1)) + (voto * peso)) / i;

    var mediaTot = document.getElementById("media-tot");
    mediaTot.textContent = (media/100).toFixed(2);
    if (media < 5) {
        mediaTot.style.backgroundColor = "rgba(238, 75, 43,.8)";
    } else if (media < 6) {
        mediaTot.style.backgroundColor = "rgba(255,165,0,.8)";
    } else {
        mediaTot.style.backgroundColor = "rgba(0,128,0,.8)";
    }

    var votoText = voto;

    // Verifica se il voto ha .25 o .75 e aggiunge il segno corrispondente
    if (voto % 1 === 0.25) {
        votoText = votoText - 0.25;
        votoText += "+";
    } else if (voto % 1 === 0.75) {
        votoText = votoText + 0.25;
        votoText += "-";
    }

    var votoElement = document.createElement("div");
    votoElement.textContent = votoText;
    votoElement.classList.add("grade");
    votoElement.dataset.voto = voto;
    votoElement.dataset.peso = peso;

    var container = document.getElementById("grade-container");
    container.insertBefore(votoElement, container.firstChild);

    // Imposta il colore del voto in base al suo valore
    if (voto < 5) {
        votoElement.style.backgroundColor = "rgba(238, 75, 43,.8)";
    } else if (voto < 6) {
        votoElement.style.backgroundColor = "rgba(255,165,0,.8)";
    } else {
        votoElement.style.backgroundColor = "rgba(0,128,0,.8)";
    }

    i++; // Incrementa il numero di voti
}
function setDayImage() {
    var today = new Date();
    var dayOfWeek = today.getDay(); // Ottiene il giorno della settimana (0 per Domenica, 1 per Lunedì, ..., 6 per Sabato)

    var imageElement = document.getElementById("day-img");

    switch (dayOfWeek) {
        case 1:
        //    imageElement.src = "monday.jpg"; // Immagine per Domenica
            break;
        case 2:
        //    imageElement.src = "tuesday.jpg"; // Immagine per Lunedì
            break;
        case 3:
        //    imageElement.src = "wednesday.jpg"; // Immagine per Martedì
            break;
        case 4:
        //    imageElement.src = "thursday.jpg"; // Immagine per Mercoledì
            break;
        case 5:
        //    imageElement.src = "friday.jpg"; // Immagine per Giovedì
            break;
        case 6:
        //    imageElement.src = "saturday.jpg"; // Immagine per Venerdì
            break;
        default:
        //    imageElement.src = "default.jpg"; //default
            break;
    }
    console.log(dayOfWeek);
}

// Chiama la funzione per impostare l'immagine del giorno corrente quando la pagina viene caricata
window.onload = function() {
    setDayImage();
};

function verifica() {
            // Ottieni i valori degli input
            var nomeProva = document.getElementById("nomeProva").value;
            var dataProva = document.getElementById("dataProva").value;

            if (nomeProva === "" || dataProva === "") {
                alert("Scrivi qualcosa disabile");
                // Se i campi sono vuoti, esci dalla funzione
                return;
            }

            // Crea un elemento div per rappresentare l'evento nel calendario
            var evento = document.createElement("div");
            evento.classList.add("event");
            evento.textContent = nomeProva + " <hr> " + dataProva;

            // Aggiungi l'evento al calendario
            var calendario = document.getElementById("calendar");
            calendario.appendChild(evento);

            // Pulisci i campi di input
            document.getElementById("nomeProva").value = "";
            document.getElementById("dataProva").value = "";
    }
