const { sample } = require('lodash');
let gleeps = {
    swrpg: [
        'Aleena',
        'Anx',
        'Aqualish',
        'Arcona',
        'Arkanian Offshoot',
        'Arkanian',
        'Barabel',
        'Bardottan',
        'Besalisk',
        'Bith',
        'Bothan',
        'Caamasi',
        'Cathar',
        'Cerean',
        'Chadra-Fan',
        'Chagrian',
        'Chevin',
        'Chiss',
        'Clawdite',
        'Corellian Human',
        'Dashade',
        'Defel',
        'Devaronian',
        'Drall',
        'Dressellian',
        'Droid',
        'Dug',
        'Duros',
        'Elom',
        'Elomin',
        'Ewok',
        'Falleen',
        'Farghul',
        'Gamorrean',
        'Gand',
        'Gank',
        'Givin',
        'Gossam',
        'Gotal',
        'Gran',
        'Gungan',
        'Herglic',
        'Human',
        'Hutt',
        'Iktotchi',
        'Ishi Tib',
        'Ithorian',
        'Jawa',
        'Kalleran',
        'Kel Dor',
        'Klatooinian',
        'Kubaz',
        'Kyuzo',
        'Lannik',
        'Lepi',
        'Mandalorian Human',
        'Mirialan',
        'Mon Calamari',
        'Mustafarian',
        'Muun',
        'Nagai',
        'Nautolan',
        'Neimoidian',
        'Nikto',
        'Noghri',
        'Ortolan',
        'Pantoran',
        'Pau\'an',
        'Polis Massan',
        'Quarren',
        'Quermian',
        'Rodian',
        'Ryn',
        'Sakiyan',
        'Sathari',
        'Selkath',
        'Selonian',
        'Shistavanen',
        'Sluissi',
        'Snivvian',
        'Squib',
        'Sullustan',
        'Talz',
        'Thakwaash',
        'Togorian',
        'Togruta',
        'Toydarians',
        'Trandoshan',
        `Twi\'lek`,
        'Ubese',
        'Ugnaught',
        'Verpine',
        'Weequay',
        'Whiphid',
        'Wookiee',
        'Xexto',
        'Zabrak',
        'Zeltron',
        'Zygerrian'
    ],
    genesys: [
        'Animalistic Alien',
        'Aristocrat',
        'Average Human',
        'Bioroid',
        'Broken Plains Orc',
        'Burrow Gnome',
        'Catfolk',
        'Clone',
        'Cyborg',
        'Deep Elf',
        'Dunwarr Dwarf',
        'Dwarf',
        'Elf',
        'Forge Dwarf',
        'Free Cities Elf',
        'G-Mod',
        'Giant',
        'Goblin',
        'Half-Catfolk',
        'Highborn Elf',
        'Human',
        'Intellectual',
        'Krxix',
        'Laborer',
        'Loonie',
        'Lowborn Elf',
        'Martian Elder',
        'Martian',
        'Mongrel',
        'Natural',
        'Orc',
        'Phyll',
        'Psionic',
        'Revenant',
        'Robot',
        'Saurian',
        'Spirit',
        'Stone Dweller Orc',
        'Sunderlands Orc',
        'Sylicate',
        'Vanguard',
        'Wanderer Gnome'
    ]
};

const gleepglop = ({ message, channelEmoji }) => {
    message.reply(`A wild ${sample(gleeps[channelEmoji.includes('genesys') ? 'genesys' : 'swrpg'])} appears!`);
}

exports.gleepglop = gleepglop;

