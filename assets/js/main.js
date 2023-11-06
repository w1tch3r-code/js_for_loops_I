"use strict";

// ===================================================
//      	JS-Vertiefung – Loops-Level-1_1
// ===================================================

console.log("%c JS-Vertiefung – Loops-Level-1_1", "color: tomato");

// Aufgabenstellung:
// Schreibe eine for-Schleife, die genau 10 Mal "Hello World + Nummer" in der Konsole ausgibt
// Bei jedem Durchlauf soll sich die Nummer um 1 erhöhen

for (let i = 1; i <= 10; i++) {
	console.log("Hello World " + [i]);
}

// ===================================================
//      	JS-Vertiefung – Loops-Level-1_2
// ===================================================

console.log("%c JS-Vertiefung – Loops-Level-1_2", "color: tomato");

// Aufgabenstellung:
// Erstelle ein Array mit den Zahlen 0-10 mithilfe einer Schleife.
// Wenn du mit Arrays arbeitest, musst du das Array initialisieren (let numArray = [];)"
// Verwende den Befehl "push()" im Schleifenkörper.
// Gib zum Schluss die Variable numArray in der Konsole aus.

let numArray = [];
for (let i = 0; i <= 10; i++) {
	numArray.push(i);
}
console.log(numArray);

// ===================================================
//      	JS-Vertiefung – Loops-Level-1_4
// ===================================================

console.log("%c JS-Vertiefung – Loops-Level-1_4", "color: tomato");

// Aufgabenstellung:
// Deklariere ein Array "names" mit den Werten: "Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim" und "Sergio"
// Dann verwende eine for-Schleife, um alle Namen in der Konsole anzuzeigen

const names = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

for (let i = 0; i < names.length; i++) {
	console.log(names[i]);
}

// ===================================================
//      	JS-Vertiefung – Loops-Level-1_5
// ===================================================

console.log("%c JS-Vertiefung – Loops-Level-1_5", "color: tomato");

// Aufgabenstellung:
// Erstelle eine for-Schleife, die die Größe von Äpfeln in der Konsole ausgibt.
// Verwende den vorgegebenen Code.
// Wie immer bei der for-Schleife: Initialisierung; Bedingung; Inkrement.
// Verwende den Befehl length, um alle Objekte anzuzeigen.
// Gib alle apples in der Konsole aus.

let apple1 = { color: "red", size: "big" };
let apple2 = { color: "green", size: "small" };
let apple3 = { color: "yellow", size: "big" };
let apples = [apple1, apple2, apple3];

for (let i = 0; i < apples.length; i++) {
	console.log(apples[i]["color"] + " und " + apples[i]["size"]);
	// console.log(apples[i]["size"]);
}

// ===================================================
//      	JS-Vertiefung – Loops-Level-1_6
// ===================================================

console.log("%c JS-Vertiefung – Loops-Level-1_6", "color: tomato");

// Aufgabenstellung:
// In dieser Aufgabe soll ein Array von Bildern erstellt werden und die Dateinamen von "image_1.jpg" bis "image_100.jpg" sollen ausgegeben werden.
// Deklariere die Variable retArray als leeres Array.
// Schreibe eine for-Schleife.
// Nutze die push() Methode.

const retArray = [];
for (let i = 1; i <= 100; i++) {
	retArray.push(`image_${i}.jpg`);
}
console.log(retArray);

// ===================================================
//      	JS-Vertiefung – Loops-Level-1_9
// ===================================================

console.log("%c JS-Vertiefung – Loops-Level-1_9", "color: tomato");

// Aufgabenstellung:
// Im Code-Snippet findest du ein Array mit verschiedenen Wörtern.
// Dein Ziel ist es, nur die Wörter ins HTML zu schreiben, bei denen die Länge des Wortes mit der Zahl des Inputfelds übereinstimmt.
// Verwende ein Loop oder eine Arraymethode.

// Bonus:
// Erstelle ein weiteres Input-Feld, in dem die Benutzer neue Wörter zu dieser Sammlung hinzufügen können.
// Die hinzugefügten Wörter sind leider nur bis zum Refresh des Browsers vorhanden, das Abspeichern ist an dieser Stelle noch nicht möglich.


const output = document.querySelector("#output");

let words = [
	"hallo",
	"Auto",
	"Waschmaschine",
	"Schrank",
	"Katze",
	"Beispiel",
	"Eltern",
	"Fenster",
	"Geburtstag",
	"Himmel",
	"schwimmen",
	"Zeitung",
];

const wordFilter = () => {
	const wordLength = Number(document.querySelector("#wordLength").value);
	// console.log(wordLength);
	output.innerHTML = '';

	for (let i = 0; i < words.length; i++) {
		if (words[i].length === wordLength) {
			output.innerHTML += `${words[i]}<br>`;
		}
	}
};

const wordAdd = () => {
	const newWord = document.querySelector("#newWord").value;
	words.push(newWord);
}


