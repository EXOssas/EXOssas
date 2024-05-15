var voti = [];
var pesi = [];
var i=0;
function add(){
    var voto = parseFloat(document.getElementById("voto").value);
    var peso = parseFloat(document.getElementById("peso").value);
    if(peso<0||peso>100){
        alert("Il peso deve andare da 1 a 100 coglione !");
        location.reload();
    }
    voti[i] = voto;
    pesi[i] = peso;
    i++;
    var ul = document.getElementById("media");
    var li = document.createElement("li");
    li.textContent = voto + " (" + peso + "%)";
    ul.appendChild(li);
}
function calc(){
    var somma_voti = 0;
    var somma_pesi = 0;
    const mediaf = document.getElementById("mediaf");
    for(let i=0;i<voti.length;i++){
        somma_voti += voti[i] * pesi[i];
        somma_pesi = somma_pesi + pesi[i];
    }
    var media = somma_voti / somma_pesi;
    if(media>6.499999999){
        mediaf.style.color = "green";
    }
    else if(media<5){
        mediaf.style.color = "red";
    }
    else if(media<6.499999999){
        mediaf.style.color = "orange";
    }
    mediaf.textContent = media;
}
function refresh(){
    location.reload();
}
window.onload = function() {
    document.body.style.zoom = "-90%";
}