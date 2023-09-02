let flag = 0;
let addCounterBtn = document.getElementById('something');
addCounterBtn.addEventListener('click', addCounter);
//create div
function createDiv(divID) {
    let div = document.createElement('div');
    div.className = 'counterDiv';
    div.id = 'counterId' + divID;
    console.log("div created");
    return div;
}
//create and append counter
function addCounter() {
    flag++;
    console.log(flag);
    let html = `<div class="counterWrapper" id="counterID${flag}">
    <p>
        <button onclick="changeValue(+1,${flag})" class="button" id="btn${flag}">+</button>
        <span id="finalValue${flag}">0</span>
        <button onclick="changeValue(-1,${flag})" class="button" id="btn${flag}">-</button>
    </p>
</div>`;
    let counterDiv = createDiv(flag);
    counterDiv.insertAdjacentHTML('afterbegin', html);
    document.body.appendChild(counterDiv);
}
//function for + - buttons of counter
function changeValue(value, btnID) {
    let initialID = document.getElementById('finalValue' + btnID);
    let initialValue = parseInt(initialID.innerText) + value;
    initialID.innerText = initialValue;
    console.log(initialValue);
    console.log(btnID);
}