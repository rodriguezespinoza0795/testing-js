const sdteam = ['David', 'Paola', 'Jose', 'Edgar', 'Erwin', 'Rafael'];

const ramdomsd = () => {
    const sd = sdteam[Math.floor(Math.random() * sdteam.length)];
    return sd
}

module.exports = ramdomsd;
