let fotosAnlaesse = [
  { src: "birth-5407332_1280.jpg", alt: "birth" },
  { src: "bridal-bouquet-2720592_1280.jpg", alt: "bridal" },
  { src: "crowd-2140590_1280.jpg", alt: "crowd" },
  { src: "german-3504961_1280.jpg", alt: "german" },
  { src: "presents-6904620_1280.jpg", alt: "presents" },
  { src: "sparkling-wine-1803122_1280.jpg", alt: "sparkling" },
  { src: "sparkling-wine-2407247_1280.jpg", alt: "sparkling" }
];
let fotosFamilie_Freunde = [
  { src: "baby-7648901_1280.jpg", alt: "baby"},
  { src: "children-4894710_1280.jpg", alt: "children"},
  { src: "family-6398107_1280.jpg", alt: "family"},
  { src: "family-6802482_1280.jpg", alt: "family"},
  { src: "friendship-day-3104635_1280.jpg", alt: "friendship"},
  { src: "mum-7344070_1280.jpg", alt: "mum"},
  { src: "siblings-7103506_1280.jpg", alt: "siblings"}
];
let fotosNatur = [
  { src: "Frühling_2025_1.jpg", alt: "Frühling 1" },
  { src: "Frühling_2025_2.jpg", alt: "Frühling 2" },
  { src: "Frühling_2025_3.jpg", alt: "Frühling 3" },
  { src: "Sommer1.jpg", alt: "Sommer 1" },
  { src: "Sommer2.jpg", alt: "Sommer 2" },
  { src: "Sommer3.jpg", alt: "Sommer 3" },
  { src: "Sommer5.jpg", alt: "Sommer 5" },
  { src: "Sommer6.jpg", alt: "Sommer 6" },
  { src: "Sommer7.jpg", alt: "Sommer 7" },
  { src: "Sommer8.jpg", alt: "Sommer 8" },
  { src: "Winter_2024_1.jpg", alt: "Winter 1" },
  { src: "Winter_2024_2.jpg", alt: "Winter 2" },
  { src: "Winter_2024_5.jpg", alt: "Winter 3" }
];
let fotosSchwarzWeiss = [
{src: "black-white-2474682_1280.jpg", alt: "black-white"},
{src: "cat-5400886_1280.jpg", alt: "cat"},
{src: "easter-cat-4810499_1280.jpg", alt: "easter"},
{src: "monochrom-8608410_1280.jpg", alt: "monochrom"},
{src: "schwarz-5346585_1280.jpg", alt: "schwarz"},
{src: "strom-1017632_1280.jpg", alt: "strom"}
];
let fotosStadt_Straße = [
  { src: "bremen-town-musicians-230849_1280.jpg", alt: "bremen town musicians"},
  { src: "castle-5116436_1280.jpg", alt: "castle"},
  { src: "heidelberg-4603040_1280.jpg", alt: "heidelberg"},
  { src: "moon-3572287_1280.jpg", alt: "moon"},
  { src: "moritzburg-84299_1280.jpg", alt: "moritzburg"},
  { src: "park-317061_1280.jpg", alt: "park"},
  { src: "town-hall-2408071_1280.jpg", alt: "town"},
  { src: "Winter_2024_3.jpg", alt: "Winter"},
  { src: "Winter_2024_4.jpg", alt: "Winter"},
  { src: "Winter_2024_6.jpg", alt: "Winter"}
];
let fotosTiere = [
  {src: "animal-9650392_1280.jpg", alt: "animal"},
  {src: "cat-9734651_1280.jpg", alt: "cat"},
  {src: "falcon-9697872_1280.jpg", alt: "falcon"},
  {src: "Frühling_2025_4.jpg", alt: "Frühling"},
  {src: "lemon-pancy-9727489_1280.jpg", alt: "lemon pancy"},
  {src: "Sommer4.jpg", alt: "Sommer"}
];

Alle_Fotos();

function Alle_Fotos() {
  btnClose()
  let output = document.getElementById("main_section");

  output.innerHTML = "<h2>Alle Fotos:</h2>";

  fotosNatur.forEach((element) => {
    output.innerHTML += `<img class="main_img" alt="${element.alt}"  src="/img/fotos/Natur/${element.src}">`;
  });

  fotosTiere.forEach((element) => {
    output.innerHTML += `<img class="main_img" alt="${element.alt}"  src="/img/fotos/Tiere/${element.src}">`;
  });

  fotosStadt_Straße.forEach((element) => {
    output.innerHTML += `<img class="main_img" alt="${element.alt}"  src="/img/fotos/Stadt_Strasse/${element.src}">`;
  });

  fotosAnlaesse.forEach((element) => {
    output.innerHTML += `<img class="main_img" alt="${element.alt}"  src="/img/fotos/Anlaesse/${element.src}">`;
  });

  fotosFamilie_Freunde.forEach((element) => {
    output.innerHTML += `<img class="main_img" alt="${element.alt}"  src="/img/fotos/Familie_Freunde/${element.src}">`;
  });

  fotosSchwarzWeiss.forEach((element) => {
    output.innerHTML += `<img class="main_img" alt="${element.alt}"  src="/img/fotos/Schwarz_Weiss/${element.src}">`;
  });
}
function Natur() {
  btnClose()
  let output = document.getElementById("main_section");
  output.innerHTML = "<h2>Natur:</h2>";
  fotosNatur.forEach((element) => {
    output.innerHTML += `<img class="main_img" alt="${element.alt}" src="/img/fotos/Natur/${element.src}" >`;
  });
}
function Tiere() {
  btnClose()
  let output = document.getElementById("main_section");
  output.innerHTML = "<h2>Tiere:</h2>";
  fotosTiere.forEach((element) => {
    output.innerHTML += `<img class="main_img"  alt="${element.alt}" src="/img/fotos/Tiere/${element.src}">`;
  });
}
function Stadt_Straße() {
  btnClose()
  let output = document.getElementById("main_section");
  output.innerHTML = "<h2>Stadt & Straße:</h2>";
  fotosStadt_Straße.forEach((element) => {
    output.innerHTML += `<img class="main_img"  alt="${element.alt}" src="/img/fotos/Stadt_Strasse/${element.src}">`;
  });
}
function Anlaesse() {
  btnClose()
  let output = document.getElementById("main_section");
  output.innerHTML = "<h2>Anlässe:</h2>";
  fotosAnlaesse.forEach((element) => {
    output.innerHTML += `<img class="main_img"  alt="${element.alt}" src="/img/fotos/Anlaesse/${element.src}">`;
  });
}
function Familie_Freunde() {
  btnClose()
  let output = document.getElementById("main_section");
  output.innerHTML = "<h2>Familie & Freunde:</h2>";
  fotosFamilie_Freunde.forEach((element) => {
    output.innerHTML += `<img class="main_img"  alt="${element.alt}" src="/img/fotos/Familie_Freunde/${element.src}">`;
  });
}
function Schwarz_Weiss() {
  btnClose()
  let output = document.getElementById("main_section");
  output.innerHTML = "<h2>Schwarz Weiß:</h2>";
  fotosSchwarzWeiss.forEach((element) => {
    output.innerHTML += `<img class="main_img"  alt="${element.alt}" src="/img/fotos/Schwarz_Weiss/${element.src}">`;
  });
}
function btnClose(){
    document.getElementById("bild_click").classList.add("hide");
}

document.getElementById("main_class").addEventListener("click", dialog);

function dialog(e){
  console.log(e);
  if (e.target && e.target.classList.contains("main_img")) {
    document.getElementById("bild_click").innerHTML = `

<div class="dialog">   

  <header class="dialog_header">
        <p>Name: ${e.target.alt} </p>
        <button onclick="btnClose()" >close</button>
  </header>

  <main class="dialog_main">
    <img class="dialog_img" src="${e.target.src}">
  </main>

  <footer class="dialog_footer">
    <button onclick="btnVorheriges()">Vorheriges</button>
    <button onclick="btnNaechstes()" >Nächstes</button>
  </footer>
  
</div>    `;
    document.getElementById("bild_click").classList.remove("hide");
  }
}


function btnNaechstes(){
}
function btnVorheriges(){

}