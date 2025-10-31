function countdown() {
    const countDate = new Date("Nov 22, 2025 12:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);

    document.getElementById('countdown').innerText = `${d} días ${h} horas ${m} minutos`;
}

function toggleDatos() {
    const datos = document.getElementById("datosRegalo");
    datos.style.display = datos.style.display === "none" ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", function () {
    countdown();
    setInterval(countdown, 1000);

    const audio = document.getElementById("musicPlayer");
    const player = document.getElementById("customAudioPlayer");
    const waveform = document.getElementById("waveform");

    waveform.style.opacity = "0.5";

    player.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            waveform.style.opacity = "1";
        } else {
            audio.pause();
            waveform.style.opacity = "0.5";
        }
    });

    // Inicialización AOS
    if (AOS) {
        AOS.init({
            duration: 1200,
            once: true
        });
    }
});
