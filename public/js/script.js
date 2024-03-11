const jam = document.getElementById('jam');
const menit = document.getElementById('menit');
const detik = document.getElementById('detik');
const tanggal = document.getElementById('tanggal');
const bulan = document.getElementById('bulan');
const tahun = document.getElementById('tahun');


function JamDigital() {
    const namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];  // lanjutkan nanti
    const tgl = new Date();
    const hours = tgl.getHours();
    const dtk = tgl.getSeconds();
    const mnt = tgl.getMinutes();
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
