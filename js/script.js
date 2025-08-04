let currentArray = null;
let currentIndex = null;
let currentArrayLength = null;

let fotosAnlaesse = [
  { src: "/img/fotos/Anlaesse/birth-5407332_1280.jpg", alt: "birth" },
  { src: "/img/fotos/Anlaesse/bridal-bouquet-2720592_1280.jpg", alt: "bridal" },
  { src: "/img/fotos/Anlaesse/crowd-2140590_1280.jpg", alt: "crowd" },
  { src: "/img/fotos/Anlaesse/german-3504961_1280.jpg", alt: "Germany" },
  { src: "/img/fotos/Anlaesse/presents-6904620_1280.jpg", alt: "presents" },
  {
    src: "/img/fotos/Anlaesse/sparkling-wine-1803122_1280.jpg",
    alt: "sparkling",
  },
  {
    src: "/img/fotos/Anlaesse/sparkling-wine-2407247_1280.jpg",
    alt: "sparkling",
  },
];
let fotosFamilie_Freunde = [
  { src: "/img/fotos/Familie_Freunde/baby-7648901_1280.jpg", alt: "baby" },
  {
    src: "/img/fotos/Familie_Freunde/children-4894710_1280.jpg",
    alt: "children",
  },
  { src: "/img/fotos/Familie_Freunde/family-6398107_1280.jpg", alt: "family" },
  { src: "/img/fotos/Familie_Freunde/family-6802482_1280.jpg", alt: "family" },
  {
    src: "/img/fotos/Familie_Freunde/friendship-day-3104635_1280.jpg",
    alt: "friendship",
  },
  { src: "/img/fotos/Familie_Freunde/mum-7344070_1280.jpg", alt: "mum" },
  {
    src: "/img/fotos/Familie_Freunde/siblings-7103506_1280.jpg",
    alt: "siblings",
  },
];
let fotosNatur = [
  { src: "/img/fotos/Natur/Frühling_2025_1.jpg", alt: "Frühling 1" },
  { src: "/img/fotos/Natur/Frühling_2025_2.jpg", alt: "Frühling 2" },
  { src: "/img/fotos/Natur/Frühling_2025_3.jpg", alt: "Frühling 3" },
  { src: "/img/fotos/Natur/Sommer1.jpg", alt: "Sommer 1" },
  { src: "/img/fotos/Natur/Sommer2.jpg", alt: "Sommer 2" },
  { src: "/img/fotos/Natur/Sommer3.jpg", alt: "Sommer 3" },
  { src: "/img/fotos/Natur/Sommer5.jpg", alt: "Sommer 5" },
  { src: "/img/fotos/Natur/Sommer6.jpg", alt: "Sommer 6" },
  { src: "/img/fotos/Natur/Sommer7.jpg", alt: "Sommer 7" },
  { src: "/img/fotos/Natur/Sommer8.jpg", alt: "Sommer 8" },
  { src: "/img/fotos/Natur/Winter_2024_1.jpg", alt: "Winter 1" },
  { src: "/img/fotos/Natur/Winter_2024_2.jpg", alt: "Winter 2" },
  { src: "/img/fotos/Natur/Winter_2024_5.jpg", alt: "Winter 3" },
];
let fotosSchwarzWeiss = [
  {
    src: "/img/fotos/Schwarz_Weiss/black-white-2474682_1280.jpg",
    alt: "black-white",
  },
  { src: "/img/fotos/Schwarz_Weiss/cat-5400886_1280.jpg", alt: "cat" },
  {
    src: "/img/fotos/Schwarz_Weiss/easter-cat-4810499_1280.jpg",
    alt: "easter",
  },
  {
    src: "/img/fotos/Schwarz_Weiss/monochrom-8608410_1280.jpg",
    alt: "monochrom",
  },
  { src: "/img/fotos/Schwarz_Weiss/schwarz-5346585_1280.jpg", alt: "schwarz" },
  { src: "/img/fotos/Schwarz_Weiss/strom-1017632_1280.jpg", alt: "strom" },
];
let fotosStadt_Straße = [
  {
    src: "/img/fotos/Stadt_Strasse/bremen-town-musicians-230849_1280.jpg",
    alt: "bremen town musicians",
  },
  { src: "/img/fotos/Stadt_Strasse/castle-5116436_1280.jpg", alt: "castle" },
  {
    src: "/img/fotos/Stadt_Strasse/heidelberg-4603040_1280.jpg",
    alt: "heidelberg",
  },
  { src: "/img/fotos/Stadt_Strasse/moon-3572287_1280.jpg", alt: "moon" },
  {
    src: "/img/fotos/Stadt_Strasse/moritzburg-84299_1280.jpg",
    alt: "moritzburg",
  },
  { src: "/img/fotos/Stadt_Strasse/park-317061_1280.jpg", alt: "park" },
  { src: "/img/fotos/Stadt_Strasse/town-hall-2408071_1280.jpg", alt: "town" },
  { src: "/img/fotos/Stadt_Strasse/Winter_2024_3.jpg", alt: "Winter" },
  { src: "/img/fotos/Stadt_Strasse/Winter_2024_4.jpg", alt: "Winter" },
  { src: "/img/fotos/Stadt_Strasse/Winter_2024_6.jpg", alt: "Winter" },
];
let fotosTiere = [
  { src: "/img/fotos/Tiere/animal-9650392_1280.jpg", alt: "animal" },
  { src: "/img/fotos/Tiere/cat-9734651_1280.jpg", alt: "cat" },
  { src: "/img/fotos/Tiere/falcon-9697872_1280.jpg", alt: "falcon" },
  { src: "/img/fotos/Tiere/Frühling_2025_4.jpg", alt: "Frühling" },
  { src: "/img/fotos/Tiere/lemon-pancy-9727489_1280.jpg", alt: "lemon pancy" },
  { src: "/img/fotos/Tiere/Sommer4.jpg", alt: "Sommer" },
];

let arraySum = [
  fotosAnlaesse,
  fotosFamilie_Freunde,
  fotosNatur,
  fotosSchwarzWeiss,
  fotosStadt_Straße,
  fotosTiere,
];

function Natur() {
  btnClose();
  let output = document.getElementById("main_section");
  output.innerHTML = "<h2>Natur:</h2>";
  fotosNatur.forEach((element) => {
    output.innerHTML += `<img class="main_img" alt="${element.alt}" src="${element.src}" >`;
  });
}
function Tiere() {
  btnClose();
  let output = document.getElementById("main_section");
  output.innerHTML = "<h2>Tiere:</h2>";
  fotosTiere.forEach((element) => {
    output.innerHTML += `<img class="main_img"  alt="${element.alt}" src="${element.src}">`;
  });
}
function Stadt_Straße() {
  btnClose();
  let output = document.getElementById("main_section");
  output.innerHTML = "<h2>Stadt & Straße:</h2>";
  fotosStadt_Straße.forEach((element) => {
    output.innerHTML += `<img class="main_img"  alt="${element.alt}" src="${element.src}">`;
  });
}
function Anlaesse() {
  btnClose();
  let output = document.getElementById("main_section");
  output.innerHTML = "<h2>Anlässe:</h2>";
  fotosAnlaesse.forEach((element) => {
    output.innerHTML += `<img class="main_img"  alt="${element.alt}" src="${element.src}">`;
  });
}
function Familie_Freunde() {
  btnClose();
  let output = document.getElementById("main_section");
  output.innerHTML = "<h2>Familie & Freunde:</h2>";
  fotosFamilie_Freunde.forEach((element) => {
    output.innerHTML += `<img class="main_img"  alt="${element.alt}" src="${element.src}">`;
  });
}
function Schwarz_Weiss() {
  btnClose();
  let output = document.getElementById("main_section");
  output.innerHTML = "<h2>Schwarz Weiß:</h2>";
  fotosSchwarzWeiss.forEach((element) => {
    output.innerHTML += `<img class="main_img"  alt="${element.alt}" src="${element.src}">`;
  });
}

function btnClose() {
  document.getElementById("bild_click").classList.add("hide");
}

function btnNaechstes() {
  if (currentIndex < currentArray.length - 1) {
    currentIndex++;
    updateDialog();
  }
}

function btnVorheriges() {
  if (currentIndex > 0) {
    currentIndex--;
    updateDialog();
  }
}

document.getElementById("main_class").addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("main_img")) {
    clickedSrc = e.target.getAttribute("src");
    dialog(e);
  }
});

function dialog(e) {
  clickedSrc = e.target.getAttribute("src");

  arraySum.forEach((onearray) => {
    onearray.forEach((element, index) => {
      if (element.src === clickedSrc) {
        currentArray = onearray;
        currentIndex = index;
      }
    });
  });

  updateDialog();
}

function updateDialog() {
  const currentItem = currentArray[currentIndex];
  const currentArrayLength = currentArray.length;

  document.getElementById("bild_click").innerHTML = `
<div class="dialog">   

  <header class="dialog_header">
        <h5>${currentItem.alt}</h5>
        <a onclick="btnClose()"><img class="icon_close" src="/img/close.png"></a>
  </header>

  <main class="dialog_main">
    <img class="dialog_img" src="${currentItem.src}">
  </main>

  <footer class="dialog_footer">
    <a onclick="btnVorheriges()"><img class="dialog_icon" src="/img/back.png"></a>

    <div class="dialog_main">
      <h5>${currentIndex + 1}</h5>
      <img class="dialog_slash" src="/img/slash.png">
      <h5>${currentArrayLength}</h5>
    </div>

    <a onclick="btnNaechstes()"><img class="dialog_icon" src="/img/next.svg"></a>
  </footer>
  
</div>
  `;
  document.getElementById("bild_click").classList.remove("hide");
}

function Startseite() {
  btnClose();
  let output = document.getElementById("main_section");
  output.innerHTML = `
<p>Startseite</p>
`;
}
function Über_mich() {
  btnClose();
  let output = document.getElementById("main_section");
  output.innerHTML = `
<p>Über_mich</p>
`;
}
function Kontakt() {
  btnClose();
  let output = document.getElementById("main_section");
  output.innerHTML = `
  <div class="kontank_div">
    <form>
      <h2>Kontaktieren Sie uns</h2>

      <label>Ihr Name:
        <input class="text-box" type="text" name="name" required />
      </label>

      <label>Ihre E-Mail-Adresse:
        <input class="text-box" type="email" name="email" required />
      </label>

      <label>Ihre Nachricht:
        <textarea rows="10" name="message" required></textarea>
      </label>
      <div class="div_senden">
        <input onclick=email_senden() class="senden" type="submit" value="Nachricht senden" />
      </div>
    </form>
  <div>
`;
}
function email_senden(){
  let output = document.getElementById("main_section");
  output.innerHTML = `
  <p class="kontank_div">
    Danke für Ihre Nachricht!<br>
    Schön, dass Sie uns geschrieben haben. Wir melden uns in Kürze bei Ihnen.
  </p>
`;
}
function impressum() {
  btnClose();
  let output = document.getElementById("main_section");
  output.innerHTML = `
<section class="impressum">
  <h1>Impressum:</h1>

  <h2>Angaben gemäß § 5 TMG</h2>
  <p>
    Younes Darabi<br>
    Musterstraße 123<br>
    12345 Musterstadt<br>
    Deutschland
  </p>

  <p>
    E-Mail: <a href="mailto:kontakt@example.de">kontakt@example.de</a><br>
    Telefon: +49 (0) 012 34567890<br>
    Website: <a href="https://www.Musterstraße.de" target="_blank">www.example.de</a>
  </p>

  <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
  <p>
    Younes Darabi<br>
    Musterstraße 123<br>
    12345 Musterstadt
  </p>

  <h2>Haftungsausschluss</h2>
  <p>
    Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
  </p>

  <h2>Urheberrecht</h2>
  <p>
    Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind entsprechend gekennzeichnet.
  </p>
</section>
`;
}

function datenschutz() {
  btnClose();
  let output = document.getElementById("main_section");
  output.innerHTML = `
<section  class="impressum">
  <h1>Datenschutzerklärung:</h1>

  <p>
    Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG).
  </p>

  <h2>1. Verantwortlicher</h2>
  <p>
    Younes Darabi<br>
    Musterstraße 123<br>
    12345 Musterstadt<br>
    E-Mail: <a href="mailto:kontakt@example.de">kontakt@example.de</a>
  </p>

  <h2>2. Erhebung und Verarbeitung von Daten</h2>
  <p>
    Beim Besuch dieser Website werden automatisch Informationen (z. B. IP-Adresse, Browsertyp) erfasst. Diese Daten dienen ausschließlich der technischen Sicherheit und werden nicht zur Identifizierung verwendet.
  </p>

  <h2>3. Kontaktaufnahme</h2>
  <p>
    Wenn Sie uns per E-Mail kontaktieren, speichern wir Ihre Angaben zur Bearbeitung der Anfrage. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
  </p>

  <h2>4. Ihre Rechte</h2>
  <p>
    Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch. Kontaktieren Sie uns dazu per E-Mail.
  </p>

  <h2>5. Änderungen</h2>
  <p>
    Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren.
  </p>

  <p style="margin-top: 2rem;">
    Stand: August 2025
  </p>
</section>

`;
}