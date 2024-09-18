let brazil_Region = document.getElementById('brazil_Region');
let indonesia_Region = document.getElementById('indonesia_Region');
let vietnam_Region = document.getElementById('vietnam_Region');
let india_Region = document.getElementById('india_Region');
let ethiopia_Region = document.getElementById('ethiopia_Region');
let kenya_Region = document.getElementById('kenya_Region');
let rwanda_Region = document.getElementById('rwanda_Region');
let low_Oiliness = document.getElementById('low_Oiliness');
let medium_Oiliness = document.getElementById('medium_Oiliness');
let high_Oiliness = document.getElementById('high_Oiliness');
let washing_Method = document.getElementById('washing_Method');
let encryption = document.getElementById('encryption');
let sun_Exposure = document.getElementById('sun_Exposure');
let fermentation = document.getElementById('fermentation');



let filter_Map = [
    brazil_Region,
    indonesia_Region,
    vietnam_Region,
    india_Region,
    ethiopia_Region,
    kenya_Region,
    rwanda_Region,
    low_Oiliness,
    medium_Oiliness,
    high_Oiliness,
    washing_Method,
    encryption,
    sun_Exposure,
    fermentation
]


let Filter_results_box = document.getElementById('Filter_results_box');

let brazil = document.getElementById('brazil_Region');
let indonesia = document.getElementById('indonesia_Region');
let vietnam = document.getElementById('vietnam_Region');
let india = document.getElementById('india_Region');
let ethiopia = document.getElementById('ethiopia_Region');
let kenya = document.getElementById('kenya_Region');
let rwanda = document.getElementById('rwanda_Region');

let region = [
    brazil,
    indonesia,
    vietnam,
    india,
    ethiopia,
    kenya,
    rwanda
];

let low = document.getElementById('low_Oiliness');
let medium = document.getElementById('medium_Oiliness');
let high = document.getElementById('high_Oiliness');

let oiliness = [
    low,
    medium,
    high
];

let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');
let card6 = document.getElementById('card6');
let card7 = document.getElementById('card7');
let card8 = document.getElementById('card8');

let card = [
    card1,
    card2,
    card3,
    card4,
    card7,
    card5,
    card6,
    card8

]

let Text_display_box = document.getElementById('Text_display_box');


for (let i = 0; i < filter_Map.length; i++) {
    filter_Map[i].addEventListener('click', () => {
        if (Text_display_box.childElementCount != 3) {
            Text_display_box.appendChild(filter_Map[i]);
        } else {
            console.log('達到上限')
        }
        if (filter_Map[i].textContent === region[i].textContent) {
            Filter_results_box.style.display = 'flex';
            card[i].style.display = 'block';
            console.log(filter_Map[i].textContent)
        } else {
            card[i].style.display = 'none';
        }

        if (filter_Map[i].textContent != oiliness[i].textContent) {
            console.log(filter_Map[i].textContent)
        } else {
            card[i].style.display = 'none';
        }

        // if (filter_Map[i].textContent != region[i].textContent) {
        // card[i].style.display = 'block';
        // conso/le.log(filter_Map[i].textContent)
        // } else {
        // card[i].style.display = 'none';

        // }
        // if (filter_Map[i] === vietnam_Region) {
        //     card2.style.display = 'block';
        // } else {
        //     card2.style.display = 'none';
        // }
        // if (filter_Map[i] === india_Region) {
        //     card3.style.display = 'block';
        // } else {
        //     card3.style.display = 'none';
        // }
        // if (filter_Map[i] === brazil_Region) {
        //     card4.style.display = 'block';
        // } else {
        //     card4.style.display = 'none';
        // }
        // if (filter_Map[i] === ethiopia_Region) {
        //     card5.style.display = 'block';
        // } else {
        //     card5.style.display = 'none';
        // }
        // if (filter_Map[i] === kenya_Region) {
        //     card6.style.display = 'block';
        // } else {
        //     card6.style.display = 'none';
        // }
        // if (filter_Map[i] === rwanda_Region) {
        //     card8.style.display = 'block';
        // } else {
        //     card8.style.display = 'none';
        // }

    })
}