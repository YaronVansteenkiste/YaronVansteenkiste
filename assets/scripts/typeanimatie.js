// Geïnspireerd door: 
// https://stackoverflow.com/questions/71095457/im-trying-to-print-one-letter-after-another
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


const naam = "Yaron Vansteenkiste";
const nameEl = document.getElementById("name");

function typeText() {
    nameEl.innerText = "";
    const characters = naam.split("");

    for (let i = 0; i < characters.length; i++) {
        setTimeout(() => {
            nameEl.innerText += characters[i];

            if (characters[i] === " ") {
                nameEl.innerHTML += "<br>";
            }

            if (i === characters.length - 1) {
                setTimeout(() => {
                    nameEl.innerText = "";
                    typeText();
                }, 3000);
            }
        }, 60 * i);
    }
}

window.onload = typeText;
