// ======================
// RELÓGIO DIGITAL
// ======================

let formato24h = true;

const cores = [
    "#00ff88",
    "#00c3ff",
    "#ffd700",
    "#ff5e5e",
    "#ff66ff",
    "#7dff7d"
];

let corAtual = 0;

function atualizarRelogio() {

    const agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    let periodo = "";

    if (!formato24h) {
        periodo = horas >= 12 ? " PM" : " AM";
        horas = horas % 12 || 12;
    }

    horas = String(horas).padStart(2, "0");
    minutos = String(minutos).padStart(2, "0");
    segundos = String(segundos).padStart(2, "0");

    document.getElementById("relogio").textContent =
        `${horas}:${minutos}:${segundos}${periodo}`;
}

function atualizarData() {

    const hoje = new Date();

    document.getElementById("data").textContent =
        hoje.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
}

function alternarFormato() {
    formato24h = !formato24h;
}

function alternarTema() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
}

setInterval(() => {

    corAtual++;

    if (corAtual >= cores.length) {
        corAtual = 0;
    }

    document.getElementById("relogio").style.color =
        cores[corAtual];

}, 3000);

setInterval(atualizarRelogio, 1000);

atualizarRelogio();
atualizarData();

// ======================
// CRONÔMETRO
// ======================

let tempoCronometro = 0;
let cronometro;

function iniciarCronometro() {

    clearInterval(cronometro);

    cronometro = setInterval(() => {

        tempoCronometro++;

        let horas =
            Math.floor(tempoCronometro / 3600);

        let minutos =
            Math.floor((tempoCronometro % 3600) / 60);

        let segundos =
            tempoCronometro % 60;

        document.getElementById("cronometro").textContent =
            `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;

    }, 1000);
}

function pausarCronometro() {
    clearInterval(cronometro);
}

function resetarCronometro() {

    clearInterval(cronometro);

    tempoCronometro = 0;

    document.getElementById("cronometro").textContent =
        "00:00:00";
}

// ======================
// TIMER
// ======================

let timer;

function iniciarTimer() {

    let tempo =
        parseInt(document.getElementById("tempoTimer").value);

    if (isNaN(tempo) || tempo <= 0) {
        alert("Digite um valor válido!");
        return;
    }

    clearInterval(timer);

    timer = setInterval(() => {

        let minutos = Math.floor(tempo / 60);
        let segundos = tempo % 60;

        document.getElementById("timer").textContent =
            `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;

        tempo--;

        if (tempo < 0) {

            clearInterval(timer);

            document.getElementById("timer").textContent =
                "⏰ Tempo Finalizado!";

            alert("⏰ Tempo esgotado!");
        }

    }, 1000);
}