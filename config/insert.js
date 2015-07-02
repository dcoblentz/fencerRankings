var FencerController = require('../app/controllers/fencerController');
var fencerController = new FencerController();

var BoutController = require('../app/controllers/boutController');
var boutController = new BoutController();

var OutcomeController = require('../app/controllers/outcomeController');
var outcomeController = new OutcomeController();

var newFencers = [{
        name: "Wistric Uffton",
        boutsFought: 0,
        rating: 1200
}, {
        name: "Lazarus Gauge",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Tristrum Yager Von Bon",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Mikolaj Pilypas",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Davio de la Rouge",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Mateau Herrero de Cadiz",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Kevin of Windymead",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Allzio Montalis",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Jack Marvel",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "David Twynham",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Cullen McPetir MacGregor",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Miriam d'Hawke",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Nikolaus Hildebrand",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Trapon",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Clothar",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Jehan-Azriel du Corbier",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Francois le Souris",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Morgan Ironheart",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Joseph Blayde",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Dante Michelangelo di Triesta",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Jean Michel",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Orlando",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Alfric Northwind",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Natalya",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Zhao Fong",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Hrothgaar",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Ximon Martillo De Cordoba",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Ysabel de Saincte Croix",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Thomas O'Toole",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Radolfr Ullrsson",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Ceallach Mac Donal",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Sampson Kwabena Lancaster",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Charles of Brownstone",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Ignatius",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Thomas of Castlemere",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Remy",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Rowan",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Piers Simmons",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "kazimir",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Alex",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Joseph Kildonan",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Matthias von Greifsburg",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Draig Ui MeicThire",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Simon el frumos",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Davius St. Jacques",
        boutsFought: 0,
        rating: 1200
},
    {
        name: "Brian Robertson",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Martin",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "James Highgate",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Ferfus",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Gabriel de Cordoba",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Eadric de Bedeford",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Angus",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Logan Flesher",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Kato",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Nik Cheimis",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Anthony Barry",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Tymm LeGard",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Caithin Camindonna",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Alan",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Brian macGriogair",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Tomas",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Armand",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Gwyneth Banfhidhleir",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Baldwin Von Trier",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Neassa Luiseid",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Lupold Hass",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Orlando Cavalcanti",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Conner",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Sergio",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Kato",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Anslelan O'Killeam",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Domhnall O'Coileain",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Talia",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Kelly",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Raymond the Scot",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Ian",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Raven Helmsplitter",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Bela Istavan",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Caeden",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Ryan Dollas",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Pietro Pavolo Giovanni",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Miyamoto Toramasa",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Algirdas of Voruta",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Jehan Azriel du Corbier",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Aliyah",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Feodosiia",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Brecht",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Phil of Castlemere",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Johan",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "James Author Black",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Lucon Reynes",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Knut Bjornsson",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Aemon",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Brandi T",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Gunnolf Eriksson",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Sigurd Grunwald",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Bogi Bogsveiger Sigvatsson",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Gunther",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Eammon",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Dubhagen MacDoo",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "JeongMi",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Scintilla",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Arias De Lobio",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Mairgharead Wilson",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Takeo",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Ravava Janos",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Pilip mac Bhrighde",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Yngvaar Hanksson",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Nikolina Tesla",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Lonan of Castlemere",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Albrecht the Brute",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "William Scrivener",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Englebrecht",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Dubhghal McPharlaine",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Chris",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Grayson",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Brandon hawke",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Marie la Cousturiere",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Simon cel frumos",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Alejandra",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Henry Fox of Oak Hill",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Sirona Boann",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Dmitri Ivanov",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Murdock Mac Seamus",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Brendan de Hay",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Flan O'Murray",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Zachary Turner",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Mairgaread Wilson",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Raven Helmsplitter",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Ikara of Athens",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Guillaume Sinclair",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Amina of Zazzau",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Guntram von Köln",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Gabriel Galan de Cordoba",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Sara al-Garnatiyya",
        boutsFought: 0,
        rating: 1000
},
    {
        name: "Toki Ima",
        boutsFought: 0,
        rating: 1000
}];

var newBouts = [{
        fencer1: "Henry Fox of Oak Hill",
        fencer2: "Tristrum Yager Von Bon",
        date: 1410667200000,
        wins: 1,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Henry Fox of Oak Hill",
        fencer2: "Tristrum Yager Von Bon",
        date: 1410926400000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Mikolaj Pilypas",
        date: 1411185600000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Jean Michel",
        date: 1411185600000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Charles of Brownstone",
        date: 1411272000000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Jehan-Azriel du Corbier",
        date: 1411272000000,
        wins: 4,
        losses: 5,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Ignatius",
        date: 1411272000000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Henry Fox of Oak Hill",
        fencer2: "Tristrum Yager Von Bon",
        date: 1411358400000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Lazarus Gauge",
        date: 1411358400000,
        wins: 3,
        losses: 6,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Pilip mac Bhrighde",
        date: 1411444800000,
        wins: 4,
        losses: 4,
        draws: 2
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Flan O'Murray",
        date: 1411444800000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Dubhghal McPharlaine",
        date: 1411444800000,
        wins: 4,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Flan O'Murray",
        date: 1411790400000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Simon el frumos",
        date: 1411963200000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Natalya",
        date: 1411963200000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Flan O'Murray",
        date: 1411963200000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Allzio Montalis",
        date: 1411963200000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Jehan-Azriel du Corbier",
        date: 1412049600000,
        wins: 4,
        losses: 5,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Jean Michel",
        date: 1412049600000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Davio de la Rouge",
        date: 1412049600000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Charles of Brownstone",
        date: 1412222400000,
        wins: 8,
        losses: 1,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Jean Michel",
        date: 1412222400000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Ignatius",
        date: 1412222400000,
        wins: 3,
        losses: 5,
        draws: 2
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Wistric Uffton",
        date: 1412395200000,
        wins: 2,
        losses: 6,
        draws: 2
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Mateau Herrero de Cadiz",
        date: 1412395200000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "David Twynham",
        date: 1412395200000,
        wins: 2,
        losses: 6,
        draws: 2
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Brian macGriogair",
        date: 1412395200000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Sampson Kwabena Lancaster",
        date: 1412481600000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Pilip mac Bhrighde",
        date: 1412481600000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Dubhghal McPharlaine",
        date: 1412481600000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Simon el frumos",
        date: 1412568000000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Radolfr Ullrsson",
        date: 1412568000000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Natalya",
        date: 1412568000000,
        wins: 3,
        losses: 6,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Lazarus Gauge",
        date: 1412568000000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Flan O'Murray",
        date: 1412568000000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Brecht",
        date: 1412568000000,
        wins: 5,
        losses: 4,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Brandon hawke",
        date: 1412568000000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Allzio Montalis",
        date: 1412568000000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Dante Michelangelo di Triesta",
        fencer2: "Ximon Martillo De Cordoba",
        date: 1412654400000,
        wins: 3,
        losses: 5,
        draws: 2
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Ximon Martillo De Cordoba",
        date: 1412654400000,
        wins: 4,
        losses: 5,
        draws: 1
},
    {
        fencer1: "Sirona Boann",
        fencer2: "Ximon Martillo De Cordoba",
        date: 1412654400000,
        wins: 3,
        losses: 3,
        draws: 4
},
    {
        fencer1: "Dante Michelangelo di Triesta",
        fencer2: "Wistric Uffton",
        date: 1412654400000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Wistric Uffton",
        date: 1412654400000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Wistric Uffton",
        date: 1412654400000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "William Scrivener",
        fencer2: "Sirona Boann",
        date: 1412654400000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Raven Helmsplitter",
        date: 1412654400000,
        wins: 8,
        losses: 1,
        draws: 1
},
    {
        fencer1: "Dante Michelangelo di Triesta",
        fencer2: "Mateau Herrero de Cadiz",
        date: 1412654400000,
        wins: 4,
        losses: 5,
        draws: 1
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Mateau Herrero de Cadiz",
        date: 1412654400000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "William Scrivener",
        fencer2: "Mateau Herrero de Cadiz",
        date: 1412654400000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Mateau Herrero de Cadiz",
        date: 1412654400000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Eammon",
        date: 1412654400000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "William Scrivener",
        fencer2: "Eammon",
        date: 1412654400000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Davio de la Rouge",
        date: 1412654400000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Sirona Boann",
        fencer2: "Davio de la Rouge",
        date: 1412654400000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Davio de la Rouge",
        date: 1412654400000,
        wins: 4,
        losses: 5,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Dante Michelangelo di Triesta",
        date: 1412654400000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Aemon",
        date: 1412654400000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Ysabel de Saincte Croix",
        date: 1412740800000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Simon el frumos",
        date: 1412740800000,
        wins: 5,
        losses: 4,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Simon el frumos",
        date: 1412740800000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Radolfr Ullrsson",
        date: 1412740800000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Radolfr Ullrsson",
        date: 1412740800000,
        wins: 6,
        losses: 3,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Natalya",
        date: 1412740800000,
        wins: 5,
        losses: 3,
        draws: 2
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Natalya",
        date: 1412740800000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Lazarus Gauge",
        date: 1412740800000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Flan O'Murray",
        date: 1412740800000,
        wins: 6,
        losses: 3,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Charles of Brownstone",
        date: 1412740800000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Ximon Martillo De Cordoba",
        date: 1412827200000,
        wins: 6,
        losses: 3,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Brendan de Hay",
        date: 1412827200000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Simon el frumos",
        date: 1413172800000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Radolfr Ullrsson",
        date: 1413172800000,
        wins: 4,
        losses: 5,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Orlando",
        date: 1413172800000,
        wins: 5,
        losses: 3,
        draws: 2
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Lazarus Gauge",
        date: 1413172800000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Flan O'Murray",
        date: 1413172800000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Zhao Fong",
        date: 1413345600000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Eadric de Bedeford",
        date: 1413345600000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Dmitri Ivanov",
        date: 1413345600000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Cullen McPetir MacGregor",
        date: 1413345600000,
        wins: 3,
        losses: 5,
        draws: 2
},
    {
        fencer1: "Toki Ima",
        fencer2: "Thomas of Castlemere",
        date: 1413604800000,
        wins: 4,
        losses: 5,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Dmitri Ivanov",
        date: 1413604800000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Sampson Kwabena Lancaster",
        date: 1413691200000,
        wins: 5,
        losses: 4,
        draws: 1
},
    {
        fencer1: "Henry Fox of Oak Hill",
        fencer2: "Piers Simmons",
        date: 1413691200000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Henry Fox of Oak Hill",
        fencer2: "Mairgaread Wilson",
        date: 1413691200000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Jehan Azriel du Corbier",
        date: 1413691200000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Dubhghal McPharlaine",
        date: 1413691200000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Anthony Barry",
        date: 1413691200000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Simon el frumos",
        date: 1413777600000,
        wins: 5,
        losses: 4,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Radolfr Ullrsson",
        date: 1413777600000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Orlando",
        date: 1413777600000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Natalya",
        date: 1413777600000,
        wins: 6,
        losses: 3,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Lazarus Gauge",
        date: 1413777600000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Ikara of Athens",
        date: 1413777600000,
        wins: 6,
        losses: 3,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Flan O'Murray",
        date: 1413777600000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Sirona Boann",
        date: 1413864000000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Dante Michelangelo di Triesta",
        fencer2: "Gabriel de Cordoba",
        date: 1413864000000,
        wins: 6,
        losses: 3,
        draws: 1
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Dante Michelangelo di Triesta",
        date: 1413864000000,
        wins: 3,
        losses: 6,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Zhao Fong",
        date: 1413950400000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Dmitri Ivanov",
        date: 1413950400000,
        wins: 0,
        losses: 7,
        draws: 3
},
    {
        fencer1: "Toki Ima",
        fencer2: "Arias De Lobio",
        date: 1413950400000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Thomas of Castlemere",
        date: 1414296000000,
        wins: 4,
        losses: 5,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Kelly",
        date: 1414296000000,
        wins: 3,
        losses: 5,
        draws: 2
},
    {
        fencer1: "Toki Ima",
        fencer2: "Kato",
        date: 1414296000000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Gunther",
        date: 1414296000000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Domhnall O'Coileain",
        date: 1414296000000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Albrecht the Brute",
        date: 1414296000000,
        wins: 1,
        losses: 7,
        draws: 2
},
    {
        fencer1: "Toki Ima",
        fencer2: "Wistric Uffton",
        date: 1414468800000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Sirona Boann",
        date: 1414468800000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Raven Helmsplitter",
        date: 1414468800000,
        wins: 2,
        losses: 6,
        draws: 2
},
    {
        fencer1: "Toki Ima",
        fencer2: "Mairgaread Wilson",
        date: 1414468800000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Davio de la Rouge",
        date: 1414468800000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Dante Michelangelo di Triesta",
        date: 1414468800000,
        wins: 3,
        losses: 6,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Brendan de Hay",
        date: 1414468800000,
        wins: 3,
        losses: 6,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Tomas",
        date: 1414814400000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Nikolaus Hildebrand",
        date: 1414814400000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Marie la Cousturiere",
        date: 1414814400000,
        wins: 4,
        losses: 5,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Logan Flesher",
        date: 1414814400000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "James Author Black",
        date: 1414814400000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Gunnolf Eriksson",
        date: 1414814400000,
        wins: 1,
        losses: 7,
        draws: 2
},
    {
        fencer1: "Toki Ima",
        fencer2: "Draig Ui MeicThire",
        date: 1414814400000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Brandi T",
        date: 1414814400000,
        wins: 4,
        losses: 4,
        draws: 2
},
    {
        fencer1: "Toki Ima",
        fencer2: "Zhao Fong",
        date: 1414900800000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Pilip mac Bhrighde",
        date: 1414900800000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Phil of Castlemere",
        date: 1414900800000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Kato",
        date: 1414900800000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Jehan Azriel du Corbier",
        date: 1414900800000,
        wins: 7,
        losses: 2,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Jean Michel",
        date: 1414900800000,
        wins: 4,
        losses: 3,
        draws: 3
},
    {
        fencer1: "Toki Ima",
        fencer2: "Dmitri Ivanov",
        date: 1414900800000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Simon el frumos",
        date: 1414990800000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Simon el frumos",
        date: 1414990800000,
        wins: 1,
        losses: 7,
        draws: 2
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Simon el frumos",
        date: 1414990800000,
        wins: 4,
        losses: 4,
        draws: 2
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Radolfr Ullrsson",
        date: 1414990800000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Radolfr Ullrsson",
        date: 1414990800000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Nik Cheimis",
        date: 1414990800000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Lazarus Gauge",
        date: 1414990800000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Ikara of Athens",
        date: 1414990800000,
        wins: 8,
        losses: 1,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Guntram von Köln",
        date: 1414990800000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Flan O'Murray",
        date: 1414990800000,
        wins: 5,
        losses: 4,
        draws: 1
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Englebrecht",
        date: 1414990800000,
        wins: 6,
        losses: 1,
        draws: 3
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Chris",
        date: 1414990800000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Charles of Brownstone",
        date: 1414990800000,
        wins: 5,
        losses: 4,
        draws: 1
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Allzio Montalis",
        date: 1414990800000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Aliyah",
        date: 1414990800000,
        wins: 5,
        losses: 4,
        draws: 1
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Alex",
        date: 1414990800000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Alan",
        date: 1414990800000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Raven Helmsplitter",
        date: 1415422800000,
        wins: 7,
        losses: 2,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Raven Helmsplitter",
        date: 1415422800000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Radolfr Ullrsson",
        date: 1415422800000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Murdock Mac Seamus",
        date: 1415422800000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Matthias von Greifsburg",
        date: 1415422800000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Mateau Herrero de Cadiz",
        date: 1415422800000,
        wins: 4,
        losses: 5,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Lazarus Gauge",
        date: 1415422800000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "kazimir",
        date: 1415422800000,
        wins: 3,
        losses: 6,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Jehan-Azriel du Corbier",
        date: 1415422800000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Jean Michel",
        date: 1415422800000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Guntram von Köln",
        date: 1415422800000,
        wins: 9,
        losses: 0,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Francois le Souris",
        date: 1415422800000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Flan O'Murray",
        date: 1415422800000,
        wins: 7,
        losses: 2,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Davius St. Jacques",
        date: 1415422800000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Brendan de Hay",
        fencer2: "Charles of Brownstone",
        date: 1415422800000,
        wins: 1,
        losses: 7,
        draws: 2
},
    {
        fencer1: "Guntram von Köln",
        fencer2: "Charles of Brownstone",
        date: 1415422800000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Charles of Brownstone",
        date: 1415422800000,
        wins: 6,
        losses: 3,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Brian macGriogair",
        date: 1415422800000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Brendan de Hay",
        date: 1415422800000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Anslelan O'Killeam",
        date: 1415422800000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Brendan de Hay",
        fencer2: "Allzio Montalis",
        date: 1415422800000,
        wins: 0,
        losses: 7,
        draws: 3
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Allzio Montalis",
        date: 1415422800000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Thomas of Castlemere",
        date: 1415509200000,
        wins: 2,
        losses: 6,
        draws: 2
},
    {
        fencer1: "Henry Fox of Oak Hill",
        fencer2: "Piers Simmons",
        date: 1415509200000,
        wins: 4,
        losses: 5,
        draws: 1
},
    {
        fencer1: "Dante Michelangelo di Triesta",
        fencer2: "Kevin of Windymead",
        date: 1415509200000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Kelly",
        date: 1415509200000,
        wins: 2,
        losses: 2,
        draws: 1
},
    {
        fencer1: "Henry Fox of Oak Hill",
        fencer2: "Joseph Kildonan",
        date: 1415509200000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Dante Michelangelo di Triesta",
        fencer2: "Jean Michel",
        date: 1415509200000,
        wins: 6,
        losses: 3,
        draws: 1
},
    {
        fencer1: "Dante Michelangelo di Triesta",
        fencer2: "David Twynham",
        date: 1415509200000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Dante Michelangelo di Triesta",
        fencer2: "Brendan de Hay",
        date: 1415509200000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Radolfr Ullrsson",
        date: 1415595600000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Orlando Cavalcanti",
        date: 1415595600000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Orlando",
        date: 1415595600000,
        wins: 3,
        losses: 6,
        draws: 1
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Nikolina Tesla",
        date: 1415595600000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Natalya",
        date: 1415595600000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Lazarus Gauge",
        date: 1415595600000,
        wins: 2,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Charles of Brownstone",
        date: 1415595600000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Amina of Zazzau",
        date: 1415595600000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Allzio Montalis",
        date: 1415595600000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Allzio Montalis",
        date: 1415595600000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Dante Michelangelo di Triesta",
        fencer2: "Zachary Turner",
        date: 1415682000000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Zachary Turner",
        date: 1415682000000,
        wins: 3,
        losses: 6,
        draws: 1
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Wistric Uffton",
        date: 1415682000000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Dante Michelangelo di Triesta",
        fencer2: "Raven Helmsplitter",
        date: 1415682000000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Raven Helmsplitter",
        date: 1415682000000,
        wins: 5,
        losses: 3,
        draws: 2
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Jean Michel",
        date: 1415682000000,
        wins: 4,
        losses: 5,
        draws: 1
},
    {
        fencer1: "Dante Michelangelo di Triesta",
        fencer2: "Davio de la Rouge",
        date: 1415682000000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Davio de la Rouge",
        date: 1415682000000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Dante Michelangelo di Triesta",
        fencer2: "Brendan de Hay",
        date: 1415682000000,
        wins: 7,
        losses: 1,
        draws: 2
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Brendan de Hay",
        date: 1415682000000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Miriam d'Hawke",
        date: 1415768400000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Lucon Reynes",
        date: 1415768400000,
        wins: 3,
        losses: 5,
        draws: 2
},
    {
        fencer1: "Toki Ima",
        fencer2: "James Highgate",
        date: 1415768400000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Dmitri Ivanov",
        date: 1415768400000,
        wins: 0,
        losses: 6,
        draws: 4
},
    {
        fencer1: "Toki Ima",
        fencer2: "Brian Robertson",
        date: 1415768400000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Arias De Lobio",
        date: 1415768400000,
        wins: 2,
        losses: 5,
        draws: 3
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Tristrum Yager Von Bon",
        date: 1416027600000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Piers Simmons",
        date: 1416027600000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Nikolaus Hildebrand",
        date: 1416027600000,
        wins: 3,
        losses: 5,
        draws: 2
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Nikolaus Hildebrand",
        date: 1416027600000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Mikolaj Pilypas",
        date: 1416027600000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Mateau Herrero de Cadiz",
        date: 1416027600000,
        wins: 4,
        losses: 5,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Marie la Cousturiere",
        date: 1416027600000,
        wins: 8,
        losses: 1,
        draws: 1
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Mairgharead Wilson",
        date: 1416027600000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Mairgharead Wilson",
        date: 1416027600000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Davio de la Rouge",
        date: 1416027600000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Davio de la Rouge",
        date: 1416027600000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Radolfr Ullrsson",
        fencer2: "Conner",
        date: 1416027600000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Brendan de Hay",
        date: 1416027600000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Anslelan O'Killeam",
        date: 1416027600000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Allzio Montalis",
        date: 1416027600000,
        wins: 3,
        losses: 4,
        draws: 3
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Alejandra",
        date: 1416027600000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Radolfr Ullrsson",
        date: 1416200400000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Radolfr Ullrsson",
        date: 1416200400000,
        wins: 4,
        losses: 4,
        draws: 2
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Orlando",
        date: 1416200400000,
        wins: 6,
        losses: 3,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Murdock Mac Seamus",
        date: 1416200400000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Lazarus Gauge",
        date: 1416200400000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Zhao Fong",
        date: 1416373200000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Yngvaar Hanksson",
        date: 1416373200000,
        wins: 3,
        losses: 5,
        draws: 2
},
    {
        fencer1: "Toki Ima",
        fencer2: "Eadric de Bedeford",
        date: 1416373200000,
        wins: 6,
        losses: 3,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Cullen McPetir MacGregor",
        date: 1416373200000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Thomas of Castlemere",
        date: 1416718800000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Albrecht the Brute",
        date: 1416718800000,
        wins: 1,
        losses: 5,
        draws: 4
},
    {
        fencer1: "Toki Ima",
        fencer2: "Thomas of Castlemere",
        date: 1417323600000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Thomas O'Toole",
        date: 1417323600000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Pilip mac Bhrighde",
        date: 1417323600000,
        wins: 4,
        losses: 5,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Lonan of Castlemere",
        date: 1417323600000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Jehan-Azriel du Corbier",
        date: 1417323600000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Anthony Barry",
        date: 1417323600000,
        wins: 7,
        losses: 2,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Albrecht the Brute",
        date: 1417323600000,
        wins: 5,
        losses: 4,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Simon cel frumos",
        date: 1417410000000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Simon cel frumos",
        date: 1417410000000,
        wins: 0,
        losses: 9,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Orlando",
        date: 1417410000000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Orlando",
        date: 1417410000000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Natalya",
        date: 1417410000000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Natalya",
        date: 1417410000000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Murdock Mac Seamus",
        date: 1417410000000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Murdock Mac Seamus",
        date: 1417410000000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Lazarus Gauge",
        date: 1417410000000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Charles of Brownstone",
        date: 1417410000000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Amina of Zazzau",
        date: 1417410000000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Allzio Montalis",
        date: 1417410000000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Allzio Montalis",
        date: 1417410000000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Sirona Boann",
        date: 1417496400000,
        wins: 2,
        losses: 6,
        draws: 2
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Dante Michelangelo di Triesta",
        date: 1417496400000,
        wins: 0,
        losses: 8,
        draws: 2
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Ximon Martillo De Cordoba",
        date: 1417842000000,
        wins: 5,
        losses: 4,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Sampson Kwabena Lancaster",
        date: 1417842000000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Piers Simmons",
        date: 1417842000000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Nikolaus Hildebrand",
        date: 1417842000000,
        wins: 4,
        losses: 4,
        draws: 2
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Marie la Cousturiere",
        date: 1417842000000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Guillaume Sinclair",
        date: 1417842000000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Zhao Fong",
        date: 1417928400000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Kelly",
        date: 1417928400000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Johan",
        date: 1417928400000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Gunther",
        date: 1417928400000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Domhnall O'Coileain",
        date: 1417928400000,
        wins: 3,
        losses: 5,
        draws: 2
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Orlando",
        date: 1418014800000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Murdock Mac Seamus",
        date: 1418014800000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Dubhagen MacDoo",
        date: 1418014800000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Allzio Montalis",
        date: 1418014800000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Radolfr Ullrsson",
        date: 1420434000000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Murdock Mac Seamus",
        date: 1420434000000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Murdock Mac Seamus",
        date: 1420434000000,
        wins: 1,
        losses: 7,
        draws: 2
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Bogi Bogsveiger Sigvatsson",
        date: 1420434000000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Sergio",
        date: 1420866000000,
        wins: 0,
        losses: 8,
        draws: 2
},
    {
        fencer1: "Toki Ima",
        fencer2: "Mateau Herrero de Cadiz",
        date: 1420866000000,
        wins: 0,
        losses: 9,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "James Highgate",
        date: 1420866000000,
        wins: 0,
        losses: 9,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Hrothgaar",
        date: 1420866000000,
        wins: 0,
        losses: 8,
        draws: 2
},
    {
        fencer1: "Toki Ima",
        fencer2: "Caeden",
        date: 1420866000000,
        wins: 0,
        losses: 8,
        draws: 2
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Talia",
        date: 1421038800000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Murdock Mac Seamus",
        date: 1421038800000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Murdock Mac Seamus",
        date: 1421038800000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Flan O'Murray",
        date: 1421038800000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Amina of Zazzau",
        date: 1421038800000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Allzio Montalis",
        date: 1421038800000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Anthony Barry",
        date: 1421557200000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Bogi Bogsveiger Sigvatsson",
        date: 1421643600000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Zachary Turner",
        date: 1421730000000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Ximon Martillo De Cordoba",
        date: 1421730000000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Wistric Uffton",
        date: 1421730000000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Raven Helmsplitter",
        date: 1421730000000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Morgan Ironheart",
        date: 1421730000000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Mateau Herrero de Cadiz",
        date: 1421730000000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Mairgaread Wilson",
        date: 1421730000000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "David Twynham",
        date: 1421730000000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Tristrum Yager Von Bon",
        date: 1422075600000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Sigurd Grunwald",
        date: 1422075600000,
        wins: 5,
        losses: 3,
        draws: 2
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Nik Cheimis",
        date: 1422075600000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Mikolaj Pilypas",
        date: 1422075600000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Henry Fox of Oak Hill",
        fencer2: "Jehan-Azriel du Corbier",
        date: 1422075600000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Henry Fox of Oak Hill",
        fencer2: "Ignatius",
        date: 1422075600000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Ignatius",
        date: 1422075600000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Henry Fox of Oak Hill",
        date: 1422075600000,
        wins: 5,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Henry Fox of Oak Hill",
        fencer2: "Guillaume Sinclair",
        date: 1422075600000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Orlando",
        date: 1422248400000,
        wins: 5,
        losses: 4,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Nikolina Tesla",
        date: 1422248400000,
        wins: 6,
        losses: 3,
        draws: 1
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Flan O'Murray",
        date: 1422248400000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Englebrecht",
        date: 1422248400000,
        wins: 5,
        losses: 3,
        draws: 2
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Charles of Brownstone",
        date: 1422248400000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Tymm LeGard",
        date: 1422680400000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Nikolaus Hildebrand",
        date: 1422680400000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Marie la Cousturiere",
        date: 1422680400000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Ian",
        date: 1422680400000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Francois le Souris",
        date: 1422680400000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Davius St. Jacques",
        date: 1422680400000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Brian Robertson",
        date: 1422680400000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Takeo",
        date: 1422766800000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Scintilla",
        date: 1422766800000,
        wins: 3,
        losses: 5,
        draws: 2
},
    {
        fencer1: "Toki Ima",
        fencer2: "Davius St. Jacques",
        date: 1422766800000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Brian Robertson",
        date: 1422766800000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Algirdas of Voruta",
        date: 1422766800000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Dubhagen MacDoo",
        date: 1422853200000,
        wins: 6,
        losses: 3,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Ximon Martillo De Cordoba",
        date: 1423371600000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Wistric Uffton",
        date: 1423371600000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Thomas O'Toole",
        date: 1423371600000,
        wins: 3,
        losses: 6,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Mikolaj Pilypas",
        date: 1423371600000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Mateau Herrero de Cadiz",
        date: 1423371600000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Jack Marvel",
        date: 1423371600000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Ignatius",
        date: 1423371600000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Eammon",
        date: 1423371600000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "David Twynham",
        date: 1423371600000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Dante Michelangelo di Triesta",
        date: 1423371600000,
        wins: 5,
        losses: 4,
        draws: 1
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Brendan de Hay",
        date: 1423371600000,
        wins: 5,
        losses: 4,
        draws: 1
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Radolfr Ullrsson",
        date: 1423458000000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Orlando",
        date: 1423458000000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Lazarus Gauge",
        date: 1423458000000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Amina of Zazzau",
        date: 1423458000000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Guillaume Sinclair",
        date: 1423890000000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Eammon",
        date: 1423890000000,
        wins: 7,
        losses: 3,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Draig Ui MeicThire",
        date: 1423890000000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Anslelan O'Killeam",
        date: 1423890000000,
        wins: 4,
        losses: 5,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Alejandra",
        date: 1423890000000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Cullen McPetir MacGregor",
        date: 1423976400000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Neassa Luiseid",
        date: 1424581200000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Mateau Herrero de Cadiz",
        date: 1424581200000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Gwyneth Banfhidhleir",
        date: 1424581200000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Guillaume Sinclair",
        date: 1424581200000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Alfric Northwind",
        date: 1424581200000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Radolfr Ullrsson",
        date: 1424667600000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Murdock Mac Seamus",
        date: 1424667600000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Flan O'Murray",
        date: 1424667600000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Ximon Martillo De Cordoba",
        date: 1425790800000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Wistric Uffton",
        date: 1425790800000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Wistric Uffton",
        date: 1425790800000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Murdock Mac Seamus",
        date: 1425790800000,
        wins: 6,
        losses: 3,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Mateau Herrero de Cadiz",
        date: 1425790800000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Eammon",
        date: 1425790800000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Davio de la Rouge",
        date: 1425790800000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Conner",
        date: 1425790800000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Charles of Brownstone",
        date: 1425790800000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Angus",
        date: 1425790800000,
        wins: 1,
        losses: 3,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Allzio Montalis",
        date: 1425790800000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Alejandra",
        date: 1425790800000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Raven Helmsplitter",
        date: 1425960000000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Mateau Herrero de Cadiz",
        date: 1425960000000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Mairgaread Wilson",
        date: 1425960000000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Rowan",
        date: 1426478400000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Remy",
        date: 1426478400000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Ravava Janos",
        date: 1426478400000,
        wins: 6,
        losses: 3,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Pietro Pavolo Giovanni",
        date: 1426478400000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Miyamoto Toramasa",
        date: 1426478400000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Martin",
        date: 1426478400000,
        wins: 2,
        losses: 5,
        draws: 3
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Lazarus Gauge",
        date: 1426478400000,
        wins: 0,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Jehan-Azriel du Corbier",
        date: 1426478400000,
        wins: 4,
        losses: 6,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Grayson",
        date: 1426478400000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Ferfus",
        date: 1426478400000,
        wins: 3,
        losses: 6,
        draws: 1
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Davius St. Jacques",
        date: 1426478400000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Ysabel de Saincte Croix",
        fencer2: "Ceallach Mac Donal",
        date: 1426478400000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Baldwin Von Trier",
        date: 1426478400000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Joseph Kildonan",
        date: 1426564800000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Feodosiia",
        date: 1426564800000,
        wins: 1,
        losses: 7,
        draws: 2
},
    {
        fencer1: "Toki Ima",
        fencer2: "Clothar",
        date: 1426564800000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Armand",
        date: 1426564800000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Zhao Fong",
        date: 1426651200000,
        wins: 0,
        losses: 0,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Ryan Dollas",
        date: 1426651200000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Nikolaus Hildebrand",
        date: 1426651200000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Marie la Cousturiere",
        date: 1426651200000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Lupold Hass",
        date: 1426651200000,
        wins: 0,
        losses: 9,
        draws: 1
},
    {
        fencer1: "Toki Ima",
        fencer2: "Joseph Blayde",
        date: 1426651200000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "JeongMi",
        date: 1426651200000,
        wins: 3,
        losses: 5,
        draws: 2
},
    {
        fencer1: "Toki Ima",
        fencer2: "Jean Michel",
        date: 1426651200000,
        wins: 2,
        losses: 8,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Francois le Souris",
        date: 1426651200000,
        wins: 1,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Caithin Camindonna",
        date: 1426651200000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Toki Ima",
        fencer2: "Bela Istavan",
        date: 1426651200000,
        wins: 1,
        losses: 9,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Trapon",
        date: 1427169600000,
        wins: 0,
        losses: 10,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Radolfr Ullrsson",
        date: 1427688000000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Ikara of Athens",
        fencer2: "Englebrecht",
        date: 1427688000000,
        wins: 2,
        losses: 5,
        draws: 3
},
    {
        fencer1: "Charles of Brownstone",
        fencer2: "Ximon Martillo De Cordoba",
        date: 1428292800000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Sirona Boann",
        fencer2: "Gabriel de Cordoba",
        date: 1428379200000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Dante Michelangelo di Triesta",
        date: 1428379200000,
        wins: 0,
        losses: 9,
        draws: 1
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Sirona Boann",
        date: 1429588800000,
        wins: 6,
        losses: 4,
        draws: 0
},
    {
        fencer1: "Dante Michelangelo di Triesta",
        fencer2: "Mairgaread Wilson",
        date: 1429588800000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Mairgaread Wilson",
        date: 1429588800000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Dante Michelangelo di Triesta",
        fencer2: "Simon el frumos",
        date: 1430539200000,
        wins: 8,
        losses: 2,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Simon el frumos",
        date: 1430539200000,
        wins: 5,
        losses: 5,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Raymond the Scot",
        date: 1430539200000,
        wins: 2,
        losses: 6,
        draws: 2
},
    {
        fencer1: "Dante Michelangelo di Triesta",
        fencer2: "Knut Bjornsson",
        date: 1430539200000,
        wins: 9,
        losses: 1,
        draws: 0
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Jean Michel",
        date: 1430539200000,
        wins: 2,
        losses: 7,
        draws: 1
},
    {
        fencer1: "Gabriel Galan de Cordoba",
        fencer2: "Brian macGriogair",
        date: 1430539200000,
        wins: 3,
        losses: 5,
        draws: 2
},
    {
        fencer1: "Sara al-Garnatiyya",
        fencer2: "Ysabel de Saincte Croix",
        date: 1442808000000,
        wins: 0,
        losses: 9,
        draws: 1
},
    {
        fencer1: "Sara al-Garnatiyya",
        fencer2: "Ysabel de Saincte Croix",
        date: 1412222400000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Sara al-Garnatiyya",
        fencer2: "Jean Michel",
        date: 1412222400000,
        wins: 1,
        losses: 8,
        draws: 1
},
    {
        fencer1: "Sara al-Garnatiyya",
        fencer2: "Sampson Kwabena Lancaster",
        date: 1412481600000,
        wins: 3,
        losses: 7,
        draws: 0
},
    {
        fencer1: "Sara al-Garnatiyya",
        fencer2: "Jehan-Azriel du Corbier",
        date: 1412481600000,
        wins: 0,
        losses: 10,
        draws: 0
}];


function insertMatches(allFencers) {


    boutController.get(function (err, existing) {
        if (existing.length == 0) {
            console.log('no bouts in database');

            var fencerMap = {};
            for (var i = 0; i < allFencers.length; i++) {
                fencerMap[allFencers[i].name] = allFencers[i];
            }
            console.log('test');
            for (var i = 0; i < newBouts.length; i++) {
                //console.log(fencerMap[newBouts[i].fencer1]._id);
                newBouts[i]._fencer1 = fencerMap[newBouts[i].fencer1]._id;
                newBouts[i]._fencer2 = fencerMap[newBouts[i].fencer2]._id;
                //console.log(newBouts[i]);

                delete newBouts[i].fencer1;
                delete newBouts[i].fencer2;
            }
            boutController.insert(newBouts, function (err, added) {
                //console.log(added);
                runBouts(added);
            });
        } else {
            runBouts(existing);
        }

    });
}

function runBouts(bouts) {
    outcomeController.get(function (err, existing) {
        if (existing.length == 0) {
            console.log('no outcomes in database');
            outcomeController.runBouts(bouts, function (err, newOutcomes) {
                console.log(newOutcomes);
            });
        } else {
            console.log(existing);
        }
    });
}

function deleteAll(next) {
    var Outcome = require('../app/models/outcome'),
        Bout = require('../app/models/bout'),
        Fencer = require('../app/models/fencer');

    Outcome.remove({}, function (err) {
        Bout.remove({}, function (err) {
            Fencer.remove({}, function (err) {
                console.log('cleared');
                next();
            });
        });
    });
}

function insertAll() {
    fencerController.get(function (err, existing) {
        if (existing.length == 0) {
            console.log('no data in database');
            fencerController.insert(newFencers, function (err, added) {
                console.log(added);
                insertMatches(added);
            });

        } else {
            insertMatches(existing);
        }
    });
}


module.exports = {
    insertInitialData: function () {
        //deleteAll(insertAll);
        insertAll();



    }

}