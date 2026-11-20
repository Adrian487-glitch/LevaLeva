console.log("Hello world");

function lagetTur(modus) {
  const turnavn = document.getElementById("turnavn").value;
  const dato = document.getElementById("dato").value;
  const klokkeslett = document.getElementById("klokkeslett").value;
  const plasser = document.getElementById("plasser").value;
  const turleder = document.getElementById("turleder").value;
  const møteplass = document.getElementById("møteplass").value;
  const destinasjon = document.getElementById("destinasjon").value;
  const varighet = document.getElementById("varighet").value;
  const innformasjon = document.getElementById("innformasjon").value;
  const resultat = document.getElementById("resultat");
  if (modus === ny) {
  }
  if (modus === rediger) {
  }
  resultat.textContent =
    turnavn +
    "\n" +
    "dato: " +
    dato +
    "\n" +
    "Klokkeslett: " +
    klokkeslett +
    "\n" +
    "Antall plasser igjen " +
    plasser +
    "\n" +
    "Turleder: " +
    turleder +
    "\n" +
    "Møteplass: " +
    møteplass +
    "\n" +
    "Destinasjon: " +
    destinasjon +
    "\n" +
    "Varighet: " +
    varighet +
    "\n" +
    innformasjon;
  document.getElementById("resultat").style.border = "3px solid";
  document.getElementById("resultat").style.visibility = "visible";
  document.getElementById("Opprettmodal").classList.remove("showModal");
  document.getElementById("Opprettmodal").classList.add("hiddenModal");
}

function openingModal2() {
  document.getElementById("Opprettmodal").classList.remove("hiddenModal");
  document.getElementById("Opprettmodal").classList.add("showModal");
}

function closingModal2() {
  document.getElementById("Opprettmodal").classList.remove("showModal");
  document.getElementById("Opprettmodal").classList.add("hiddenModal");
}
