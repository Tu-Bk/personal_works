let block_text1 = document.getElementById('block_text1');
let block_text2 = document.getElementById('block_text2');
let block_text3 = document.getElementById('block_text3');
let block_text4 = document.getElementById('block_text4');
let block_text1_p1 = document.getElementById('block_text1_p1');
let block_text1_p2 = document.getElementById('block_text1_p2');
let block_text1_p3 = document.getElementById('block_text1_p3');
let block_text1_p4 = document.getElementById('block_text1_p4');



let block_text = [
    block_text1,
    block_text2,
    block_text3,
    block_text4
]

let block_text1_p = [
    block_text1_p1,
    block_text1_p2,
    block_text1_p3,
    block_text1_p4

]

for (let i = 0; i < block_text.length; i++) {
    block_text[i].addEventListener('click', () => {

        if (block_text1_p[i].style.marginBottom != '20%') {
            block_text1_p[i].style.marginBottom = '20%';
            block_text1_p[i].style.overflow = 'visible';
        }else{
            block_text1_p[i].style.marginBottom = '0%';
            block_text1_p[i].style.overflow = 'hidden';
        }
    });
}


// block_text1.addEventListener('click', () => {
//     block_text1_p1.style.marginBottom = '100%';
//     // overflow: hidden;
//     block_text1_p1.style.overflow = 'visible';
// });