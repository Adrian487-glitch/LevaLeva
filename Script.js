console.log("Hello world");

let lagretTur;
function lagetTur() {
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
  if (
    !turnavn ||
    !dato ||
    !klokkeslett ||
    !plasser ||
    !turleder ||
    !møteplass ||
    !destinasjon ||
    !varighet
  ) {
    alert("Du mangler å fylle inn noen felt");
    return;
  }
  lagretTur = {
    navn: turnavn,
    dato: dato,
    klokkeslett: klokkeslett,
    plasser: plasser,
    turleder: turleder,
    møteplass: møteplass,
    destinasjon: destinasjon,
    varighet: varighet,
    innformasjon: innformasjon,
  };
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

function openingModal2(modus) {
  if (modus === "ny") {
    document.getElementById("turskjema").reset();
  } else if (modus === "rediger" && !lagretTur) {
    alert("Ingenting å redigere, lag en tur først");
    return;
  } else if (modus === "rediger") {
    document.getElementById("turnavn").value = lagretTur.navn;
    document.getElementById("dato").value = lagretTur.dato;
    document.getElementById("klokkeslett").value = lagretTur.klokkeslett;
    document.getElementById("plasser").value = lagretTur.plasser;
    document.getElementById("turleder").value = lagretTur.turleder;
    document.getElementById("møteplass").value = lagretTur.møteplass;
    document.getElementById("destinasjon").value = lagretTur.destinasjon;
    document.getElementById("varighet").value = lagretTur.varighet;
    document.getElementById("innformasjon").value = lagretTur.innformasjon;
  }
  document.getElementById("Opprettmodal").classList.remove("hiddenModal");
  document.getElementById("Opprettmodal").classList.add("showModal");
}

function closingModal2() {
  document.getElementById("Opprettmodal").classList.remove("showModal");
  document.getElementById("Opprettmodal").classList.add("hiddenModal");
}

function openingModal(modus) {
  const turInfo = document.getElementById("turinfo");
  turInfo.textContent = "";
  if (modus === "mandag") {
    turInfo.textContent =
      "Tur: Lyngstad til Bua " +
      "\n" +
      " Dato: Mandag 16. november 2026 " +
      "\n" +
      " Tid: 12:00 " +
      "\n" +
      " Plasser: 8 ledige av 15 totalt " +
      "\n" +
      " Turleder: Bob " +
      "\n" +
      " Møteplass: Lyngstad " +
      "\n" +
      " Destinasjon: Bua " +
      "\n" +
      " Varighet: Cirka 1 time " +
      "\n" +
      " Ekstra: Rolig tempo og pause underveis. Turen passer for deltakere med rullator. ";
  } else if (modus === "tirsdag") {
    turInfo.textContent = "Ingen tur denne dagen.";
  } else if (modus === "onsdag") {
    turInfo.textContent = "Ingen tur denne dagen.";
  } else if (modus === "torsdag") {
    turInfo.textContent =
      "Tur: Rolig tur langs sjøen\n" +
      "Dato: Torsdag 19. november 2026\n" +
      "Tid: 10:00\n" +
      "Plasser: 6 ledige av 12 totalt\n" +
      "Turleder: Nora\n" +
      "Møteplass: Havna\n" +
      "Destinasjon: Strandpromenaden\n" +
      "Varighet: Cirka 45 minutter\n" +
      "Ekstra: Rolig tempo og flat rute.";
  } else if (modus === "fredag") {
    turInfo.textContent = "Ingen tur denne dagen.";
  } else if (modus === "lørdag") {
    turInfo.textContent = "Ingen tur denne dagen.";
  } else if (modus === "søndag") {
    turInfo.textContent =
      "Tur: Skogstur med fruktpause\n" +
      "Dato: Søndag 22. november 2026\n" +
      "Tid: 13:00\n" +
      "Plasser: 9 ledige av 15 totalt\n" +
      "Turleder: Emil\n" +
      "Møteplass: Parkeringsplassen ved skogen\n" +
      "Destinasjon: Skogsstien\n" +
      "Varighet: Cirka 1 time\n" +
      "Ekstra: Vi tar en fruktpause underveis.";
  } else if (modus === "mandag2") {
    turInfo.textContent = "Ingen tur denne dagen.";
  } else if (modus === "tirsdag2") {
    turInfo.textContent =
      "Tur: Tur rundt sentrum\n" +
      "Dato: Tirsdag 24. november 2026\n" +
      "Tid: 11:00\n" +
      "Plasser: 10 ledige av 15 totalt\n" +
      "Turleder: Ingrid\n" +
      "Møteplass: Torget\n" +
      "Destinasjon: Sentrum\n" +
      "Varighet: Cirka 50 minutter\n" +
      "Ekstra: Rolig tur på fortau.";
  } else if (modus === "onsdag2") {
    turInfo.textContent =
      "Tur: Kort tur i parken\n" +
      "Dato: Onsdag 25. november 2026\n" +
      "Tid: 12:30\n" +
      "Plasser: 5 ledige av 10 totalt\n" +
      "Turleder: Amir\n" +
      "Møteplass: Parkinngangen\n" +
      "Destinasjon: Parken\n" +
      "Varighet: Cirka 30 minutter\n" +
      "Ekstra: Passer for deg som ønsker en kort tur.";
  } else if (modus === "torsdag2") {
    turInfo.textContent =
      "Tur: Utsiktstur\n" +
      "Dato: Torsdag 26. november 2026\n" +
      "Tid: 14:00\n" +
      "Plasser: 7 ledige av 12 totalt\n" +
      "Turleder: Nora\n" +
      "Møteplass: Turstien\n" +
      "Destinasjon: Utsiktspunktet\n" +
      "Varighet: Cirka 1 time\n" +
      "Ekstra: Noe motbakke. Ta med gode sko.";
  } else if (modus === "fredag2") {
    turInfo.textContent = "Ingen tur denne dagen.";
  } else if (modus === "lørdag2") {
    turInfo.textContent =
      "Tur: Familietur i rolig tempo\n" +
      "Dato: Lørdag 28. november 2026\n" +
      "Tid: 10:30\n" +
      "Plasser: 12 ledige av 20 totalt\n" +
      "Turleder: Bob\n" +
      "Møteplass: Ved lekeplassen\n" +
      "Destinasjon: Turstien ved elva\n" +
      "Varighet: Cirka 1 time\n" +
      "Ekstra: Barn er velkomne. Vi tar pauser underveis.";
  } else if (modus === "søndag2") {
    turInfo.textContent = "Ingen tur denne dagen.";
  }
  document.getElementById("kalendermodal").classList.remove("hiddenModal");
  document.getElementById("kalendermodal").classList.add("showModal");
}

function closingModal() {
  document.getElementById("kalendermodal").classList.remove("showModal");
  document.getElementById("kalendermodal").classList.add("hiddenModal");
}
