const khodamNames = [
    'Yanto kopling',
    'Babi ireng',
    'Mulyaxxx',
    'Supra geter',
    'Sigit rendang',
    'Apih douglas Pajero',
    'John chenang',
    'Singa geol',
    'Om SENTOT',
    'Yayat karbu',
    'Rawa rontek',
    'Ular pedut',
    'Kicau mania',
    'Ragil jerman',
    'LUHUT',
    'Bagas dribble',
    'Roger sumatra',
    'Herman bulldog',
    'Bopak castello',
    'Yayan baphomet',
    'Aceng redbull',
    'Skibidi toilet',
    'Mbak ningsih',
    'Laba-laba sunda',
    'Asep stroberry',
    'Kodok zuma',
    'Younglek',
    'Dalgondal gandul',
    'Gyat',
    'Bintang skibidi',
    'Ohaio rizz',
    'Skibidi gyata rizz',
    'GIBRAN',
    'MAZ ANIES',
    'Bomboclat',
    
];

function cekKhodam() {
    const nameInput = document.getElementById('nameInput').value.trim();
    if (nameInput) {
        const randomIndex = Math.floor(Math.random() * khodamNames.length);
        const khodamName = khodamNames[randomIndex];
        document.getElementById('khodamName').innerText = `${nameInput}, Khodam Anda adalah: ${khodamName}`;
    } else {
        document.getElementById('khodamName').innerText = 'Silakan masukkan nama Anda terlebih dahulu.';
    }
}

