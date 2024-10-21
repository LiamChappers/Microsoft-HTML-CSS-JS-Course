
var txtInput;
var txtResult;



function initialize(){
    txtInput = document.getElementById('txtInput')
    txtResult = document.getElementById('txtResult')

    var buttonQuantity = 10;
    for(var i = 0; i < buttonQuantity; i++) {
        var btn = document.getElementById('btn' + i);
        btn.addEventListener('click', numberClick, false);
    }
    
    
    var btnPlus = document.getElementById('btnPlus');
    var btnMinus = document.getElementById('btnMinus');
    var btnClearEntry = document.getElementById('btnClearEntry');
    var btnClear = document.getElementById('btnClear');


    btnPlus.addEventListener('click',addNumbers, false);
    btnMinus.addEventListener('click',minusNumbers, false);
    btnClearEntry.addEventListener('click',clearEntry, false);
    btnClear.addEventListener('click',clear, false);
    clear();
}

function numberClick() {
    txtInput.value = this.innerText
}

function addNumbers() {
    txtResult.value = Number(txtResult.value) + Number(txtInput.value)
    clearEntry();
}

function minusNumbers() {
    txtResult.value = Number(txtResult.value) - Number(txtInput.value)
    clearEntry();
}

function clearEntry() {
    txtInput.value = 0;
}

function clear() {
    txtInput.value = 0;
    txtResult.value = 0;
}