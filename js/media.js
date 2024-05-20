var i = 0;
var subjects = [];

function add(subjectIndex) {
    var voto = parseFloat(document.getElementById("voto-" + subjectIndex).value);
    var peso = parseFloat(document.getElementById("peso-" + subjectIndex).value);

    if (peso < 1 || peso > 100) {
        alert("Il peso deve andare da 1 a 100 coglione!");
        return;
    }

    subjects[subjectIndex].voti.push(voto);
    subjects[subjectIndex].pesi.push(peso);

    var ul = document.getElementById("media-" + subjectIndex);
    var li = document.createElement("li");
    li.textContent = voto + " (" + peso + "%)";

    ul.appendChild(li);
    calc(subjectIndex);
}

function calc(subjectIndex) {
    var somma_voti = 0;
    var somma_pesi = 0;
    const mediaf = document.getElementById("mediaf-" + subjectIndex);
    const comment = document.getElementById("comment-" + subjectIndex);

    for (let j = 0; j < subjects[subjectIndex].voti.length; j++) {
        somma_voti += subjects[subjectIndex].voti[j] * subjects[subjectIndex].pesi[j];
        somma_pesi += subjects[subjectIndex].pesi[j];
    }

    if (somma_pesi === 0) {
        alert("Devi inserire almeno un voto!");
        mediaf.textContent = "";
        comment.textContent = "";
        return;
    }

    var media = somma_voti / somma_pesi;

    if (media >= 6) {
        mediaf.style.backgroundColor = "green";
        if (media > 9) {
            comment.textContent = "+ 1.000.000 aura !";
        } else {
            comment.textContent = "+ 1.000 aura !";
        }
    } else if (media < 5) {
        mediaf.style.backgroundColor = "red";
        comment.textContent = "Calzuò che mi combini";
    } else if (media < 6) {
        mediaf.style.backgroundColor = "orange";
        comment.textContent = "- 1.000 aura...";
    }

    var button = document.querySelector("#materia button[onclick='cambio(" + subjectIndex + ")']");
    button.textContent = media.toFixed(2);
    button.style.backgroundColor = `${mediaf.style.backgroundColor}`;
    button.style.boxShadow = `0 0 10px 0 ${mediaf.style.backgroundColor}`;
    mediaf.style.boxShadow = `0 0 25px 0 ${mediaf.style.backgroundColor}`;
    comment.style.color = `${mediaf.style.backgroundColor}`;
    mediaf.textContent = media.toFixed(2);
}

function calculateNeededGrade(subjectIndex) {
    var somma_voti = 0;
    var somma_pesi = 0;
    var to6 = document.getElementById("to6-" + subjectIndex);

    for (let j = 0; j < subjects[subjectIndex].voti.length; j++) {
        somma_voti += subjects[subjectIndex].voti[j] * subjects[subjectIndex].pesi[j];
        somma_pesi += subjects[subjectIndex].pesi[j];
    }

    if (somma_pesi === 0) {
        alert("Devi inserire almeno un voto!");
        return;
    }

    var media = somma_voti / somma_pesi;

    if (media >= 6) {
        to6.textContent = "Hai già una media di 6 o superiore!";
        return;
    }

    var neededGrade = (6 * (somma_pesi + 100) - somma_voti) / 100;
    to6.textContent = "Per raggiungere una media di 6, devi prendere almeno " + neededGrade.toFixed(2) + " al prossimo esame col peso al 100%.";
}

function materia() {
    var newSubject = {
        voti: [],
        pesi: []
    };
    subjects.push(newSubject);

    var materia = document.getElementById("materia");
    var materia2 = document.createElement("li");
    materia.appendChild(materia2);
    materia2.classList.add("sub");
    materia2.innerHTML = `<button onclick="cambio(${i})" class="scegli">-</button><input type="text" placeholder="Materia..." id="i${i + 1}">`;

    var nuovaMateria = document.createElement("main");
    nuovaMateria.classList.add("materia");
    nuovaMateria.id = "materia-" + (i + 1);

    nuovaMateria.innerHTML = `
        <div class="main">
            <h3>Calcola la tua media !</h3>
            <select id="voto-${i}">
                <option value="10">10</option>
                <option value="9.75">10-</option>
                <option value="9.5">9.5</option>
                <option value="9.25">9+</option>
                <option value="9">9</option>
                <option value="8.75">9-</option>
                <option value="8.5">8.5</option>
                <option value="8.25">8+</option>
                <option value="8">8</option>
                <option value="7.75">8-</option>
                <option value="7.5" selected>7.5</option>
                <option value="7.25">7+</option>
                <option value="7">7</option>
                <option value="6.75">7-</option>
                <option value="6.5">6.5</option>
                <option value="6.25">6+</option>
                <option value="6">6</option>
                <option value="5.75">6-</option>
                <option value="5.5">5.5</option>
                <option value="5.25">5+</option>
                <option value="5">5</option>
                <option value="4.75">5-</option>
                <option value="4.5">4.5</option>
                <option value="4.25">4+</option>
                <option value="4">4</option>
                <option value="3.75">4-</option>
                <option value="3.5">3.5</option>
                <option value="3.25">3+</option>
                <option value="3">3</option>
                <option value="2.75">3-</option>
                <option value="2.5">2.5</option>
                <option value="2.25">2+</option>
                <option value="2">2</option>
            </select>
            <input type="text" placeholder="100%" value="100" id="peso-${i}">
            <div class="flex">
                <button onclick="add(${i})" class="add" id="add-${i}">+</button>
                <button onclick="calculateNeededGrade(${i})" class="calc-needed" id="calc-needed-${i}">6</button>
                <button onclick="removeAllVotes(${i})" class="remove-all" id="remove-all-${i}">X</button>
            </div>
            <h3>Qui vedrai i voti e i pesi:</h3>
            <ul class="media" id="media-${i}">
                <li></li>
            </ul>
            <h1 class="mediaf" id="mediaf-${i}"></h1>
            <h3 class="comment" id="comment-${i}"></h3>
            <h5 class="comment" id="to6-${i}"></h5>
        </div>`;

    document.body.appendChild(nuovaMateria);
    cambio(i);
    i++;
}

function removeAllVotes(subjectIndex) {
    subjects[subjectIndex].voti = [];
    subjects[subjectIndex].pesi = [];
    const mediaf = document.getElementById("mediaf-" + subjectIndex);
    const comment = document.getElementById("comment-" + subjectIndex);
    var button = document.querySelector("#materia button[onclick='cambio(" + subjectIndex + ")']");
    var ul = document.getElementById("media-" + subjectIndex);
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    mediaf.style.backgroundColor = "#008dc0";
    mediaf.style.boxShadow = `0 0 25px 0 ${mediaf.style.backgroundColor}`;
    mediaf.textContent = "-";
    button.textContent = "-"; 
    button.style.backgroundColor = `${mediaf.style.backgroundColor}`;
    button.style.boxShadow = `0 0 10px 0 ${mediaf.style.backgroundColor}`;
    comment.textContent = "Nessuna media calcolata";
    comment.style.color = `${mediaf.style.backgroundColor}`;
}

function cambio(n) {
    var materias = document.querySelectorAll(".materia");
    materias.forEach(element => {
        element.classList.add("off");
    });
    var materiaSelezionata = document.querySelector("#materia-" + (n + 1));
    materiaSelezionata.classList.toggle("off");
    console.log("cambio " + (n + 1));
}

function mat() {
    if (subjects.length === 0) {
        alert("Non ci sono materie da rimuovere!");
        return;
    }

    var subjectIndex = subjects.length - 1; // Indice dell'ultima materia
    subjects.pop(); // Rimuove l'ultima materia dall'array

    // Rimuove gli elementi DOM associati all'ultima materia
    var materia = document.getElementById("materia");
    var lastMateriaElement = materia.lastElementChild;
    if (lastMateriaElement) {
        materia.removeChild(lastMateriaElement);
    }

    var lastMainElement = document.getElementById("materia-" + (subjectIndex + 1));
    if (lastMainElement) {
        document.body.removeChild(lastMainElement);
    }

    i--; // Decrementa l'indice delle materie
} 