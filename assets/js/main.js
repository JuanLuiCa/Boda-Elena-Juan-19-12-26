
// CUENTA REGRESIVA
const weddingDate = new Date('2026-12-19T19:00:00-06:00');

function updateCountdown() {
    const difference = weddingDate.getTime() - Date.now();

    if (difference <= 0) {
        document.getElementById('countdown').textContent =
            '¡Hoy celebramos nuestra boda!';
        return;
    }

    const days = Math.floor(difference / 86400000);
    const hours = Math.floor((difference / 3600000) % 24);
    const minutes = Math.floor((difference / 60000) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent =
        String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent =
        String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent =
        String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);


// REPRODUCTOR MUSICAL
const audio = document.getElementById('wedding-audio');
const musicButton = document.getElementById('music-button');
const musicIcon = document.getElementById('music-icon');
const musicLabel = document.getElementById('music-label');

musicButton.addEventListener('click', async () => {
    try {
        if (audio.paused) {
            await audio.play();
            musicIcon.textContent = "pause";
            musicLabel.innerHTML =
                'Nuestra canción<br><small>Reproduciendo...</small>';
        } else {
            audio.pause();
            musicIcon.textContent = "play_arrow";
            musicLabel.innerHTML =
                'Nuestra canción<br><small>Toca para escuchar</small>';
        }
    } catch (error) {
        console.error('No se pudo reproducir el audio:', error);
    }
});

audio.addEventListener('ended', () => {
    musicIcon.textContent = '▶';
    musicLabel.innerHTML =
        'Nuestra canción<br><small>Toca para escuchar</small>';
});
