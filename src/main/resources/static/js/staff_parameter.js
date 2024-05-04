const check1 = document.getElementById('check1');
const input1 = document.getElementById('input1');


function check_1() {
    if (check1.checked == true) {
        input1.removeAttribute("disabled");
    } else {
        input1.setAttribute("disabled");
    }
}
check1.addEventListener('click', check_1);



const check2 = document.getElementById('check2');
const input2 = document.getElementById('input2');;

function check_2() {
    if (check2.checked == true) {
        input2.removeAttribute("disabled");
    } else {
        input2.setAttribute("disabled");
    }
}
check2.addEventListener('click', check_2);


const check3 = document.getElementById('check3');
const input3 = document.getElementById('input3');;

function check_3() {
    if (check3.checked == true) {
        input3.removeAttribute("disabled");
    } else {
        input3.setAttribute("disabled");
    }
}
check3.addEventListener('click', check_3);



const check4 = document.getElementById('check4');
const input4 = document.getElementById('input4');;

function check_4() {
    if (check4.checked == true) {
        input4.removeAttribute("disabled");
    } else {
        input4.setAttribute("disabled");
    }
}
check4.addEventListener('click', check_4);


const check5 = document.getElementById('check5');
const input5 = document.getElementById('input5');;

function check_5() {
    if (check5.checked == true) {
        input5.removeAttribute("disabled");
    } else {
        input5.setAttribute("disabled");
    }
}
check5.addEventListener('click', check_5);

const check6 = document.getElementById('check6');
const input6 = document.getElementById('input6');;

function check_6() {
    if (check6.checked == true) {
        input6.removeAttribute("disabled");
    } else {
        input6.setAttribute("disabled");
    }
}
check6.addEventListener('click', check_6);

const btnc = getElementById('btn_confirm');
btnc.addEventListener('click', function() {
    check1.setAttribute("disabled");
    check2.setAttribute("disabled");
    check3.setAttribute("disabled");
    check4.setAttribute("disabled");
    check5.setAttribute("disabled");
    check6.setAttribute("disabled");
    check6.setAttribute("disabled");
})