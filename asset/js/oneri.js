const ad = document.getElementById("Ad")
const adContent = document.getElementById("adContent")

ad.addEventListener("keyup", (event) => {
    adContent.innerHTML = event.target.value;
});


let adnan = 5;
let sevki = 2;
const feyza = document.getElementById("Ad");

let toplam = adnan + sevki;
console.log(toplam);
/*
addEventListener demek Etkinlik Ekle Demektir.
keyup Etkinliği klavyeden basılınca etkinleş anlamındadır.
*/







const yas = document.getElementById("Yas")
const yasContent = document.getElementById("yasContent")

yas.addEventListener("keyup", (event) => {
    yasContent.innerHTML = `(${event.target.value})`
})

const eposta = document.getElementById("Eposta")
const epostaContent = document.getElementById("epostaContent")

eposta.addEventListener("keyup", (event) => {
    epostaContent.i; nnerHTML = `(${event.target.value})`
})

const cinsiyet = document.getElementById("Cinsiyet")
const cinsiyetContent = document.getElementById("cinsiyetContent")

cinsiyet.addEventListener("change", (event) => {
    cinsiyetContent.innerHTML = event.target.value;
})

const calisma = document.getElementById("Calisma")
const calismaAlani = document.getElementById("calismaAlani")

calisma.addEventListener("change", (event) => {
    calismaAlani.innerHTML = `${event.target.value}`
})

const konu = document.getElementById("Konu")
const konuContent = document.getElementById("konuContent")

konu.addEventListener("keyup", (event) => {
    konuContent.innerHTML = event.target.value;
});
