let toggle4 = document.getElementById("toggle4");
let toggle1 = document.getElementById("default-toggle1");
let toggle2 = document.getElementById("default-toggle2");
let toggle3 = document.getElementById("default-toggle3");
let toggle41 = document.getElementById("default-toggle4");
let lampu1 = document.getElementById("lampu1");
let lampu2 = document.getElementById("lampu2");
let lampu3 = document.getElementById("lampu3");
let lampu4 = document.getElementById("lampu4");

function saklar() {


    if (toggle1.checked) {
        lampu1.src = "asset/images/on.gif";
    } else {
        lampu1.src = "asset/images/off.gif";
    }
    if (toggle2.checked) {
        lampu2.src = "asset/images/on.gif";
    } else {
        lampu2.src = "asset/images/off.gif";
    }
    if (toggle3.checked) {
        lampu3.src = "asset/images/on.gif";
    } else {
        lampu3.src = "asset/images/off.gif";
    }
    if (toggle41.checked) {
        lampu4.src = "asset/images/on.gif";
    } else {
        lampu4.src = "asset/images/off.gif";
    }
    if (toggle1.checked && toggle2.checked && toggle3.checked && toggle41.checked) {
        toggle4.checked = true;
    } else {
        toggle4.checked = false;
    }
}
function saklarall() {
    if (toggle4.checked) {
        lampu1.src = "asset/images/on.gif";
        lampu2.src = "asset/images/on.gif";
        lampu3.src = "asset/images/on.gif";
        lampu4.src = "asset/images/on.gif";
        toggle1.checked = true;
        toggle2.checked = true;
        toggle3.checked = true;
        toggle41.checked = true;
    } else {
        lampu1.src = "asset/images/off.gif";
        lampu2.src = "asset/images/off.gif";
        toggle1.checked = false;
        toggle2.checked = false;
        toggle3.checked = false;
        toggle41.checked = false;
        lampu3.src = "asset/images/off.gif";
        lampu4.src = "asset/images/off.gif";
    }

}

function saklaralltamu() {
    if (toggle4.checked) {
        lampu1.src = "asset/images/on.gif";
        lampu2.src = "asset/images/on.gif";
        lampu3.src = "asset/images/on.gif";
        toggle1.checked = true;
        toggle2.checked = true;
        toggle3.checked = true;
    } else {
        lampu1.src = "asset/images/off.gif";
        lampu2.src = "asset/images/off.gif";
        toggle1.checked = false;
        toggle2.checked = false;
        toggle3.checked = false;
        lampu3.src = "asset/images/off.gif";
    }

}