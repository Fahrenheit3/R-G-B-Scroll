let startingColorValue;
let rgbNumbers;
let mainArr = document.getElementById("rgb-values-id").textContent.split("");
let stringVer;
let slicedVer;
let arrStringVer;
let lastStrVer;
let a, b, c;
a = 255;
b = 255;
c = 255;
mainArr.shift();
console.log(mainArr);

function merge(a, b, i = 0) {
    return a.slice(0, i).concat(b, a.slice(i));
}

function scrollChange(val) {
    let indexofSpace = mainArr.indexOf(" ");
    if (val === "R") {
        mainArr.splice(0, indexofSpace);
        lastStrVer = startingColorValue + mainArr.join("");
        mainArr = merge(mainArr, startingColorValue.split(), 0);
        a = parseInt(startingColorValue);
    } else if (val === "G") {
        mainArr.splice(indexofSpace + 1, mainArr.indexOf(" ", indexofSpace + 1) - indexofSpace - 1);
        var result = merge(mainArr, startingColorValue.split(), mainArr.indexOf(" ") + 1);
        lastStrVer = result.join("");
        b
        mainArr = result;
        b = parseInt(startingColorValue);
    } else {
        mainArr.splice(mainArr.lastIndexOf(" ") + 1, (mainArr.length) - mainArr.lastIndexOf(" "));
        lastStrVer = mainArr.join("") + startingColorValue;
        mainArr = merge(mainArr, startingColorValue.split(""), mainArr.lastIndexOf(" ") + 1);
        c = parseInt(startingColorValue);
        console.log(c);
    }

    $(document).ready(function() {
        $('#rgb-values-id').text(lastStrVer);
    });
    document.getElementById("back-ground").style.backgroundColor = `rgb(${a},${b},${c})`;
    document.getElementById("rgb-values-id").style.color = `rgb(${255-a},${255-b},${255-c})`;
    document.getElementById("back-ground").style.color = `rgb(${255-a},${255-b},${255-c})`;
}

function scrollInput1() {
    startingColorValue = document.getElementById(`slideRed`).value;
    let txtCont = document.querySelector(`.red-range`);
    txtCont.innerHTML = startingColorValue;
    $(document).ready(function() {
        $('#red-range-value').text(startingColorValue);
    });
    scrollChange("R");
}

function scrollInput2() {
    startingColorValue = document.getElementById("slideGreen").value;
    let txtCont = document.querySelector(`.green-range`);
    txtCont.innerHTML = startingColorValue;
    $(document).ready(function() {
        $('#green-range-value').text(startingColorValue);
    });
    scrollChange("G");
}

function scrollInput3() {
    startingColorValue = document.getElementById(`slideBlu`).value;
    let txtCont = document.querySelector(`.blu-range`);
    txtCont.innerHTML = startingColorValue;
    $(document).ready(function() {
        $('#blu-range-value').text(startingColorValue);
    });
    scrollChange();
}

function rgbValueSetter(arg1) {
    if (arg1 === "r") {
        rgbNumbers.innerHTML = `${txtCont} 255`
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 2, 8, 2];
console.log(arr.indexOf(2, 4))
    // arr.splice(0, 3);
    // console.log(arr.toString());

// console.log(arr.join());