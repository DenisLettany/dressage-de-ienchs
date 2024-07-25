import "./assets/scss/styles.scss";

const monthContent = document.querySelector(".month-content");
const monthNames = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
const currentDate = new Date();
const currentMonthIndex = currentDate.getMonth();
const currentMonthName = monthNames[currentMonthIndex];

monthContent.innerHTML = `
    <h2>
    <u>ATTENTION !</u> En ${currentMonthName}, je vous offre une réduction de 50%
    </h2>
    <p>
    En ${currentMonthName}, vous pouvez avoir ma méthode avec
    <strong>une remise de 50% du prix courant</strong> – obtenez ma
    méthode dès aujourd’hui pour
    <strong><u>seulement 33€+TVA.</u></strong>
    </p>
`;
