let picture_below1 = document.getElementById('picture_below1');
let picture_below2 = document.getElementById('picture_below2');
let picture_below3 = document.getElementById('picture_below3');
let picture_below4 = document.getElementById('picture_below4');
let picture_below5 = document.getElementById('picture_below5');
let picture_below6 = document.getElementById('picture_below6');
let picture_below7 = document.getElementById('picture_below7');
let picture_below8 = document.getElementById('picture_below8');


let picture_belowp_p1 = document.getElementById('picture_belowp_p1');
let picture_belowp_p2 = document.getElementById('picture_belowp_p2');
let picture_belowp_p3 = document.getElementById('picture_belowp_p3');
let picture_belowp_p4 = document.getElementById('picture_belowp_p4');
let picture_belowp_p5 = document.getElementById('picture_belowp_p5');
let picture_belowp_p6 = document.getElementById('picture_belowp_p6');
let picture_belowp_p7 = document.getElementById('picture_belowp_p7');
let picture_belowp_p8 = document.getElementById('picture_belowp_p8');



let cardbox = [
    picture_below1,
    picture_below2,
    picture_below3,
    picture_below4,
    picture_below5,
    picture_below6,
    picture_below7,
    picture_below8
]

let cardbox_p = [
    picture_belowp_p1,
    picture_belowp_p2,
    picture_belowp_p3,
    picture_belowp_p4,
    picture_belowp_p5,
    picture_belowp_p6,
    picture_belowp_p7,
    picture_belowp_p8,
]

for (let i = 0; i < cardbox.length; i++) {
    cardbox[i].addEventListener('click', () => {
        if (cardbox[i].style.display != 'none') {
            cardbox[i].style.display = 'none';
            cardbox_p[i].style.display = 'flex';
        }
    });
};


for (let i = 0; i < cardbox_p.length; i++) {
    cardbox_p[i].addEventListener('click', () => {
        if (cardbox_p[i].style.display != 'none') {
            cardbox[i].style.display = 'flex';
            cardbox_p[i].style.display = 'none';
        }
    });
};