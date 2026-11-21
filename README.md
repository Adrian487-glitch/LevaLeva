# LevaLeva

LevaLeva er en skoleoppgave laget med HTML, CSS og JavaScript. Nettsiden er en prototype for et lege- og tannlegekontor i Levanger som arrangerer trimturer for pasientene sine.

## Dette har jeg laget

- **Hjem:** En forside med informasjon om LevaLeva og en lenke til turkalenderen.
- **Ny tur:** Et skjema der ansatte kan opprette en tur og redigere turen de har laget.
- **Finn turer:** En kalender som viser to uker om gangen. Brukeren kan bla mellom ukene og trykke på en dag for å se turinformasjon i et modalvindu.
- **Turinformasjon:** Modalvinduet viser blant annet dato, klokkeslett, turleder, møtested, destinasjon, varighet, ekstra informasjon og antall ledige plasser.
- **Værmelding:** For turer i løpet av de neste fire dagene vises temperatur og sannsynlighet for nedbør når værdata er tilgjengelig. Værdata hentes fra [Open-Meteo](https://open-meteo.com/).
- **Påmelding:** Påmeldingsknappen trekker én plass fra antallet ledige plasser. Knappen vises bare når det finnes en tur med ledige plasser.

## Teknologier

- HTML
- CSS
- JavaScript
- Open-Meteo API

## Kjøre prosjektet lokalt

1. Åpne prosjektmappen i Visual Studio Code.
2. Start prosjektet med Live Server fra `Index.html`.
3. Åpne «Finn turer» for å bruke kalenderen og se turinformasjonen.

Værmeldingen krever internettilgang.

## Om prototypen

Prosjektet bruker eksempelturer. Opprettede turer og påmeldinger lagres bare mens nettsiden er åpen. Pålogging med ID-porten, lagring og ekte påmeldingsfunksjoner kan kobles til en backend senere. Deltakernes navn vises ikke.

## Bruk av KI

Jeg brukte KI som læringshjelp under arbeidet. Jeg stilte spørsmål om HTML, CSS og JavaScript, fikk hjelp til å forstå feil og brukte forklaringene til å lære hvordan funksjonene i prosjektet virker.
