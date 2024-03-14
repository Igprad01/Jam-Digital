const jam = document.getElementById('jam');
const menit = document.getElementById('menit');
const detik = document.getElementById('detik');
const tanggal = document.getElementById('tanggal');
const bulan = document.getElementById('bulan');
const tahun = document.getElementById('tahun');

const api = '';



function JamDigital() {
    const namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];  
    const tgl = new Date();
    const hours = tgl.getHours().toString().padStart(2, '0');
    const dtk = tgl.getSeconds().toString().padStart(2, '0');
    const mnt = tgl.getMinutes().toString().padStart(2, '0');
    const date = tgl.getDate();
    const getMonth = tgl.getMonth();
    const month = namaBulan[getMonth];
    const year = tgl.getFullYear();
    jam.textContent = `${hours}`;
    detik.textContent = `${dtk}`;
    menit.textContent = `${mnt}`;
    tanggal.textContent = `${date}`;
    bulan.textContent = `${month}`;
    tahun.textContent = `${year}`;
}



setInterval(JamDigital);

let result = JamDigital();
