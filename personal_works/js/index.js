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
// zone
let region = [
    brazil,
    indonesia,
    vietnam,
    india,
    ethiopia,
    kenya,
    rwanda
];

let low = document.querySelector('.low_Oiliness');
let medium = document.querySelector('.medium_Oiliness');
let high = document.querySelector('.high_Oiliness');

// 特性
let oiliness = [
    low,
    medium,
    high
];

console.log(low)

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
    card5,
    card6,
    card7,
    // card8

]

let Text_display_box = document.getElementById('Text_display_box');
// let medium_Oiliness_box = document.querySelectorAll('.medium_Oiliness_box');
let medium_Oiliness_box = document.querySelectorAll('.medium_Oiliness_box');
let low_Oiliness_box = document.querySelectorAll('.low_Oiliness_box');
let high_Oiliness_box = document.querySelectorAll('.high_Oiliness_box');



// console.log(medium_Oiliness_box.length)
// console.log(medium_Oiliness_box)
for (let i = 0; i < filter_Map.length; i++) {
    // console.log(filter_Map[i].textContent);
    filter_Map[i].addEventListener('click', () => {

        if (Text_display_box.childElementCount != 3) {
            Text_display_box.appendChild(filter_Map[i]);
            // console.log(filter_Map[i].textContent)
            Filter_results_box.style.display = 'flex';
            // console.log(filter_Map[i].textContent);
            if (filter_Map[i].textContent.trim() == medium.textContent.trim()) {
                for (let j = 0; j < medium_Oiliness_box.length; j++) {
                    medium_Oiliness_box[j].style.display = 'block';
                    // console.log(medium_Oiliness_box[j])
                }
            } else {
                // console.log(filter_Map[i].textContent);
                // console.log(medium.textContent);
            }

            if (filter_Map[i].textContent.trim() == low.textContent.trim()) {
                for (let j = 0; j < low_Oiliness_box.length; j++) {
                    low_Oiliness_box[j].style.display = 'block';
                    // console.log(medium_Oiliness_box[j])
                }
            } else {
                // console.log(filter_Map[i].textContent);
                // console.log(low_Oiliness_box.textContent);
            }
            if (filter_Map[i].textContent.trim() == high.textContent.trim()) {
                for (let j = 0; j < high_Oiliness_box.length; j++) {
                    high_Oiliness_box[j].style.display = 'block';
                    // console.log(medium_Oiliness_box[j])
                }
            } else {
                // console.log(filter_Map[i].textContent);
                // console.log(high.textContent);
            }
            card[i].style.display = 'block';
            console.log(card[i]);
            // console.log(low.textContent);
            // if (filter_Map[i].textContent == medium.textContent
            // || filter_Map[i].textContent === high.textContent
            // ) {
            // console.log(filter_Map[i]);
            // medium_Oiliness_box.style.display = 'block';

            // } else {
            // console.log(medium.textContent)
            // }
            // console.log(card[i]);
            // card[i].style.display = 'block';

            // card[i].style.display = 'block';

            // if (filter_Map[i].textContent === region[i].textContent) {
            //     Filter_results_box.style.display = 'flex';
            //     card[i].style.display = 'block';
            //     console.log(filter_Map[i].textContent)
            // } else {
            //     card[i].style.display = 'none';
            // }

            // if (filter_Map[i].textContent != region[i].textContent) {
            //     // console.log(filter_Map[i].textContent)
            // } else {
            //     card[i].style.display = 'none';
            // }

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
        } else {
            console.log('達到上限')
        }



    })
}