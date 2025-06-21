const log = document.getElementById('log out');

log.addEventListener('click', () => {
    window.location.replace('http://127.0.0.1:5500/index.html');
});
log.style.cursor = 'pointer';