const jam = document.getElementById('jam');
const menit = document.getElementById('menit');
const detik = document.getElementById('detik');

function JamDigital() {
    const tgl = new Date();
    const hours = tgl.getHours();
    const dtk = tgl.getSeconds();
    const mnt = tgl.getMinutes(); 
    jam.textContent = `${hours}`;
    detik.textContent = `${dtk}`;
    menit.textContent = `${mnt}`;
}

setInterval(JamDigital, 1000);

let result = JamDigital();
