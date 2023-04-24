let maxData = 1000;
let usedData = 815;

function setBarLength() {
    const perc = 100;
    const width = usedData / (maxData / perc);

    document.querySelector(".bar__line").style.width = width + '%';

}

function setUsedData() {
    document.getElementById('usedData').innerText = usedData;
    document.getElementById('leftData').innerText = maxData - usedData;
}

window.onload = function () {
    setUsedData();
    setBarLength();
}