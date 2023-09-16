import { getRandomAmountHotel } from "utils/helpers";

export const CHAT_VERSION_1 = [
  {
    text: "Ich habe gehört Sie hatten einen anstrengenden Tag. Wie wäre es mit Ferien?",
    hotels: null,
  },
  {
    text: "Familienfreundliche Ferien mit einem Reiseziel welches gut per Zug erreichbar ist und im tieferen bis mittleren Budget liegt. Sind Sie eher interessiert an Ferien am Strand, Stadt oder Berge?",
    hotels: null,
  },
  {
    text: "In diesem Fall empfehlen wir folgende Unterkünfte für sie:",
    hotels: getRandomAmountHotel(3),
  },
];

export const CHAT_VERSION_2 = [
  {
    text: "Schon die nächsten Ferien im Kopf? Jeder zweite Schweizer versucht auch in den Ferien seinen CO2 Fussabdruck zu reduzieren. <br/> Schon die nächsten Ferien im Kopf? Jeder zweite Schweizer versucht auch in den Ferien seinen CO2 Fussabdruck zu reduzieren. <br/> Soll es weit weg gehen oder erkunden Sie Ihre Heimat?",
    hotels: null,
  },
  {
    text: "Mit der Bahn erreichen Sie auch weite Ziele CO2 sparsam. Wir zeigen Ihnen wie. <br/> Suchen Sie eine pulsierende Metropole oder ein ruhiges Städtchen in der Schweiz?",
    hotels: null,
  },
  {
    text: "Hotel ist nicht gleich Hotel. Finden Sie vor der Buchung heraus, wo Sie ressourcensparend übernachten können. <br/> Für eine langes Wochenende in der Schweiz empfehlen wir Ihnen diese drei Hotel im Wallis, die gut mit der SBB zu erreichen sind und besonders umweltfreundlich sind:",
    hotels: getRandomAmountHotel(3),
  },
];
