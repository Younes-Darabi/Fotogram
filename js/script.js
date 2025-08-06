let currentArray = null;
let currentIndex = null;
let currentArrayLength = null;
let renderName = null;
let renderTitle = null;

let occasionalPhotos = [
  { src: "./img/fotos/Anlaesse/birth-5407332_1280.jpg", alt: "birth" },
  {
    src: "./img/fotos/Anlaesse/bridal-bouquet-2720592_1280.jpg",
    alt: "bridal",
  },
  { src: "./img/fotos/Anlaesse/crowd-2140590_1280.jpg", alt: "crowd" },
  { src: "./img/fotos/Anlaesse/german-3504961_1280.jpg", alt: "Germany" },
  { src: "./img/fotos/Anlaesse/presents-6904620_1280.jpg", alt: "presents" },
  {
    src: "./img/fotos/Anlaesse/sparkling-wine-1803122_1280.jpg",
    alt: "sparkling",
  },
  {
    src: "./img/fotos/Anlaesse/sparkling-wine-2407247_1280.jpg",
    alt: "sparkling",
  },
];
let familyFriendsPhotos = [
  { src: "./img/fotos/Familie_Freunde/baby-7648901_1280.jpg", alt: "baby" },
  {
    src: "./img/fotos/Familie_Freunde/children-4894710_1280.jpg",
    alt: "children",
  },
  { src: "./img/fotos/Familie_Freunde/family-6398107_1280.jpg", alt: "family" },
  { src: "./img/fotos/Familie_Freunde/family-6802482_1280.jpg", alt: "family" },
  {
    src: "./img/fotos/Familie_Freunde/friendship-day-3104635_1280.jpg",
    alt: "friendship",
  },
  { src: "./img/fotos/Familie_Freunde/mum-7344070_1280.jpg", alt: "mum" },
  {
    src: "./img/fotos/Familie_Freunde/siblings-7103506_1280.jpg",
    alt: "siblings",
  },
];
let naturePhotos = [
  { src: "./img/fotos/Natur/Frühling_2025_1.jpg", alt: "Frühling 1" },
  { src: "./img/fotos/Natur/Frühling_2025_2.jpg", alt: "Frühling 2" },
  { src: "./img/fotos/Natur/Frühling_2025_3.jpg", alt: "Frühling 3" },
  { src: "./img/fotos/Natur/Sommer1.jpg", alt: "Sommer 1" },
  { src: "./img/fotos/Natur/Sommer2.jpg", alt: "Sommer 2" },
  { src: "./img/fotos/Natur/Sommer3.jpg", alt: "Sommer 3" },
  { src: "./img/fotos/Natur/Sommer5.jpg", alt: "Sommer 5" },
  { src: "./img/fotos/Natur/Sommer6.jpg", alt: "Sommer 6" },
  { src: "./img/fotos/Natur/Sommer7.jpg", alt: "Sommer 7" },
  { src: "./img/fotos/Natur/Sommer8.jpg", alt: "Sommer 8" },
  { src: "./img/fotos/Natur/Winter_2024_1.jpg", alt: "Winter 1" },
  { src: "./img/fotos/Natur/Winter_2024_2.jpg", alt: "Winter 2" },
  { src: "./img/fotos/Natur/Winter_2024_5.jpg", alt: "Winter 3" },
];
let blackWhitePhotos = [
  {
    src: "./img/fotos/Schwarz_Weiss/black-white-2474682_1280.jpg",
    alt: "black-white",
  },
  { src: "./img/fotos/Schwarz_Weiss/cat-5400886_1280.jpg", alt: "cat" },
  {
    src: "./img/fotos/Schwarz_Weiss/easter-cat-4810499_1280.jpg",
    alt: "easter",
  },
  {
    src: "./img/fotos/Schwarz_Weiss/monochrom-8608410_1280.jpg",
    alt: "monochrom",
  },
  { src: "./img/fotos/Schwarz_Weiss/schwarz-5346585_1280.jpg", alt: "schwarz" },
  { src: "./img/fotos/Schwarz_Weiss/strom-1017632_1280.jpg", alt: "strom" },
];
let cityStreetPhotos = [
  {
    src: "./img/fotos/Stadt_Strasse/bremen-town-musicians-230849_1280.jpg",
    alt: "bremen town musicians",
  },
  { src: "./img/fotos/Stadt_Strasse/castle-5116436_1280.jpg", alt: "castle" },
  {
    src: "./img/fotos/Stadt_Strasse/heidelberg-4603040_1280.jpg",
    alt: "heidelberg",
  },
  { src: "./img/fotos/Stadt_Strasse/moon-3572287_1280.jpg", alt: "moon" },
  {
    src: "./img/fotos/Stadt_Strasse/moritzburg-84299_1280.jpg",
    alt: "moritzburg",
  },
  { src: "./img/fotos/Stadt_Strasse/park-317061_1280.jpg", alt: "park" },
  { src: "./img/fotos/Stadt_Strasse/town-hall-2408071_1280.jpg", alt: "town" },
  { src: "./img/fotos/Stadt_Strasse/Winter_2024_3.jpg", alt: "Winter" },
  { src: "./img/fotos/Stadt_Strasse/Winter_2024_4.jpg", alt: "Winter" },
  { src: "./img/fotos/Stadt_Strasse/Winter_2024_6.jpg", alt: "Winter" },
];
let animalsPhotos = [
  { src: "./img/fotos/Tiere/animal-9650392_1280.jpg", alt: "animal" },
  { src: "./img/fotos/Tiere/cat-9734651_1280.jpg", alt: "cat" },
  { src: "./img/fotos/Tiere/falcon-9697872_1280.jpg", alt: "falcon" },
  { src: "./img/fotos/Tiere/Frühling_2025_4.jpg", alt: "Frühling" },
  { src: "./img/fotos/Tiere/lemon-pancy-9727489_1280.jpg", alt: "lemon pancy" },
  { src: "./img/fotos/Tiere/Sommer4.jpg", alt: "Sommer" },
];
let SumArrays = [
  occasionalPhotos,
  familyFriendsPhotos,
  naturePhotos,
  blackWhitePhotos,
  cityStreetPhotos,
  animalsPhotos,
];

function nature() {
  renderCategory(naturePhotos);
}
function animals() {
  renderCategory(animalsPhotos);
}
function cityStreet() {
  renderCategory(cityStreetPhotos);
}
function occasions() {
  renderCategory(occasionalPhotos);
}
function familyFriends() {
  renderCategory(familyFriendsPhotos);
}
function blackWhite() {
  renderCategory(blackWhitePhotos);
}
function renderCategory(array) {
  document.getElementById("tablet_menu").classList.add("mob_none");
  document.getElementById("mob_menu").classList.add("hide475");
  btnClose();
  let output = document.getElementById("main_section");
  output.innerHTML = "";
  array.forEach((element) => {
    output.innerHTML += `<img class="main_img"  alt="${element.alt}" src="${element.src}">`;
  });
}

function home() {
  renderMain(home, "home");
}
function renderAboutMe() {
  renderMain(aboutMe, "aboutMe");
}
function renderContact() {
  renderMain(contact, "contact");
}
function renderImprint() {
  renderMain(imprint, "imprint");
}
function renderPrivacy() {
  renderMain(privacy, "privacy");
}
function renderMain(renderName, renderTitle) {
  document.getElementById("mob_menu").classList.add("hide475");
  btnClose();
  output = document.getElementById("main_section");
  renderName = document.getElementById(renderTitle);
  output.innerHTML = renderName.innerHTML;
}

function email_senden() {
  let output = document.getElementById("main_section");
  let email_senden = document.getElementById("email_senden");
  output.innerHTML = email_senden.innerHTML;
}

function mainMenu() {
  document.getElementById("mob_menu").classList.toggle("hide475");
  document.getElementById("tablet_menu").classList.add("mob_none");
}
function tabletMenu() {
  document.getElementById("tablet_menu").classList.toggle("mob_none");
}

function btnClose() {
  document.getElementById("photo_viewer").classList.add("hide");
}

function btnNext() {
  if (currentIndex < currentArray.length - 1) {
    currentIndex++;
    updateDialog();
  }
}

function btnPrevious() {
  if (currentIndex > 0) {
    currentIndex--;
    updateDialog();
  }
}

document.getElementById("main_section").addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("main_img")) {
    clickedSrc = e.target.getAttribute("src");
    infoFordialog(e);
  }
});

function infoFordialog(e) {
  clickedSrc = e.target.getAttribute("src");

  SumArrays.forEach((onearray) => {
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
  let currentItem = currentArray[currentIndex];
  currentArrayLength = currentArray.length;
  document.getElementById("photo_viewer").classList.remove("hide");

  document.getElementById("open_photo").innerHTML =
    getHTMLForImageDisplayDialog(currentItem, currentArrayLength, currentIndex);
}

function getHTMLForImageDisplayDialog(
  currentItem,
  currentArrayLength,
  currentIndex
) {
  return `
  <div class="dialog">   

    <header class="dialog_header">
        <h5>${currentItem.alt}</h5>
        <a onclick="btnClose()"><img class="icon_close" src="./img/close.png"></a>
    </header>

    <main class="dialog_main">
      <img class="dialog_img" src="${currentItem.src}">
    </main>

    <footer class="dialog_footer">
       <a onclick="btnPrevious()"><img class="dialog_icon" src="./img/back.png"></a>

       <div class="dialog_main">
        <h5>${currentIndex + 1}</h5>
        <img class="dialog_slash" src="./img/slash.png">
        <h5>${currentArrayLength}</h5>
       </div>

      <a onclick="btnNext()"><img class="dialog_icon" src="./img/next.svg"></a>
    </footer>
  </div>`;
}

function logUp() {
  btnClose();
}
function logDown(event) {
  event.stopPropagation();
}
