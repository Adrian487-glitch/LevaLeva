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

let valgtDag;
let turDatoer = {
  mandag: "2026-11-16",
  torsdag: "2026-11-19",
  søndag: "2026-11-22",
  tirsdag2: "2026-11-24",
  onsdag2: "2026-11-25",
  torsdag2: "2026-11-26",
  lørdag2: "2026-11-28",
};
const turKort = {
  mandag: "Lyngstad til Bua\n12:00",
  torsdag: "Rolig tur langs sjøen\n10:00",
  søndag: "Skogstur med fruktpause\n13:00",
  tirsdag2: "Tur rundt sentrum\n11:00",
  onsdag2: "Kort tur i parken\n12:30",
  torsdag2: "Utsiktstur\n14:00",
  lørdag2: "Familietur i rolig tempo\n10:30",
};

let visteuker = 0;
function visteUker(modus) {
  if (modus === "neste") {
    visteuker += 1;
  } else if (modus === "forrige") {
    visteuker -= 1;
  }
  if (visteuker < 0) {
    visteuker = 0;
  }
  visKalender();
}
function visKalender() {
  const kortene = document.querySelectorAll(
    ".denne-uken > div, .neste-uke > div",
  );
  const ukedager = [
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
    "Søndag",
  ];
  const mandag = new Date();
  mandag.setHours(0, 0, 0, 0);
  mandag.setDate(mandag.getDate() - ((mandag.getDay() + 6) % 7));
  mandag.setDate(mandag.getDate() + visteuker * 7);
  document.getElementById("denneuken").textContent =
    "Denne uken " + mandag.getFullYear();
  const nesteMandag = new Date(mandag);
  nesteMandag.setDate(nesteMandag.getDate() + 7);
  document.getElementById("nesteuke").textContent =
    "Neste uke " + nesteMandag.getFullYear();

  for (let i = 0; i < kortene.length; i++) {
    const dato = new Date(mandag);
    dato.setDate(mandag.getDate() + i);
    const datoTekst =
      dato.getFullYear() +
      "-" +
      String(dato.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(dato.getDate()).padStart(2, "0");
    const tur = Object.keys(turDatoer).find(
      (dag) => turDatoer[dag] === datoTekst,
    );
    const kort = kortene[i];
    kort.querySelector("h3").textContent =
      ukedager[i % 7] +
      " " +
      dato.getDate() +
      "." +
      (dato.getMonth() + 1) +
      ".";
    kort.querySelector("pre").textContent = tur
      ? turKort[tur]
      : "Ingen tur denne dagen";
    kort.onclick = function () {
      openingModal(tur);
    };
  }
}

let ledigePlasser = {
  mandag: 8,
  torsdag: 6,
  søndag: 9,
  tirsdag2: 10,
  onsdag2: 5,
  torsdag2: 7,
  lørdag2: 12,
};
function påMelding() {
  if (ledigePlasser[valgtDag] > 0) {
    ledigePlasser[valgtDag] -= 1;
    alert("Du er meldt på!");
    document.getElementById("kalendermodal").classList.remove("showModal");
    document.getElementById("kalendermodal").classList.add("hiddenModal");
  } else {
    alert("det er fullt!");
    document.getElementById("kalendermodal").classList.remove("showModal");
    document.getElementById("kalendermodal").classList.add("hiddenModal");
  }
}

function openingModal(modus) {
  valgtDag = modus;
  const turInfo = document.getElementById("turinfo");
  const påMelding = document.getElementById("påmelding");
  const vær = document.getElementById("vær");
  turInfo.textContent = "Ingen tur denne dagen.";
  vær.textContent = "";
  if (modus === "mandag") {
    turInfo.textContent =
      "Tur: Lyngstad til Bua " +
      "\n" +
      " Dato: Mandag 16. november 2026 " +
      "\n" +
      " Tid: 12:00 " +
      "\n" +
      " Plasser: " +
      ledigePlasser[valgtDag] +
      " ledige av 15 totalt " +
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
      "Plasser: " +
      ledigePlasser[valgtDag] +
      " ledige av 12 totalt\n" +
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
      "Plasser: " +
      ledigePlasser[valgtDag] +
      " ledige av 15 totalt\n" +
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
      "Plasser: " +
      ledigePlasser[valgtDag] +
      " ledige av 15 totalt\n" +
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
      "Plasser: " +
      ledigePlasser[valgtDag] +
      " ledige av 10 totalt\n" +
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
      "Plasser: " +
      ledigePlasser[valgtDag] +
      " ledige av 12 totalt\n" +
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
      "Plasser: " +
      ledigePlasser[valgtDag] +
      " ledige av 20 totalt\n" +
      "Turleder: Bob\n" +
      "Møteplass: Ved lekeplassen\n" +
      "Destinasjon: Turstien ved elva\n" +
      "Varighet: Cirka 1 time\n" +
      "Ekstra: Barn er velkomne. Vi tar pauser underveis.";
  } else if (modus === "søndag2") {
    turInfo.textContent = "Ingen tur denne dagen.";
  }
  const turDato = turDatoer[valgtDag];
  if (værdata && turDato) {
    const iDag = new Date();
    iDag.setHours(0, 0, 0, 0);
    const turDag = new Date(turDato + "T00:00:00");
    const dagerTilTur = Math.round((turDag - iDag) / (1000 * 60 * 60 * 24));
    const værIndex = værdata.time.indexOf(turDato);

    if (dagerTilTur >= 0 && dagerTilTur <= 4 && værIndex !== -1) {
      vær.textContent =
        "Vær i Levanger: maks " +
        værdata.temperature_2m_max[værIndex] +
        " °C, opptil " +
        værdata.precipitation_probability_max[værIndex] +
        " % sjanse for nedbør.";
    }
  }
  if (
    turInfo.textContent === "Ingen tur denne dagen." ||
    ledigePlasser[valgtDag] <= 0
  ) {
    document.getElementById("påmelding").style.visibility = "hidden";
  } else {
    document.getElementById("påmelding").style.visibility = "visible";
  }
  document.getElementById("kalendermodal").classList.remove("hiddenModal");
  document.getElementById("kalendermodal").classList.add("showModal");
}

function closingModal() {
  document.getElementById("kalendermodal").classList.remove("showModal");
  document.getElementById("kalendermodal").classList.add("hiddenModal");
}

let værdata;
const værUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=63.74644&longitude=11.29963&daily=temperature_2m_max,precipitation_probability_max&timezone=auto";
fetch(værUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.daily);
    værdata = data.daily;
  });

if (document.querySelector(".kalender")) {
  visKalender();
}
