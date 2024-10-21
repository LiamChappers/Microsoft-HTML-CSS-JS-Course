/// <reference path="_references.js" />


(function() {

    this.calculatorNamespace = this.calculatorNamespace || {}
    var ns = this.calculatorNamespace;



ns.initialize = function(){
    var calculator = new ns.Calculator();

    
    $('button[id^="btnNumber"]').on('click', calculator.numberClick);
    
    
    
    var btnPlus = $('#btnPlus');
    var btnMinus = $('#btnMinus');
    var btnClearEntry = $('#btnClearEntry');
    var btnClear = d$('#btnClear');


    btnPlus.on('click',calculator.addNumbers);
    btnMinus.on('click',calculator.minusNumbers);
    btnClearEntry.on('click',calculator.clearEntry);
    btnClear.on('click',calculator.clear);
    calculator.clear();
}

ns.Calculator = (function () {

    function Calculator() {
    }

    Calculator.prototype.numberClick = function() {
        $('#txtInput').val($('#txtInput').text())
    }
    
    Calculator.prototype.addNumbers = function() {
        $('#txtResult').val(Number($('#txtResult').value) + Number($('#txtInput').value))

        Calculator.prototype.clearEntry();
    }
    
    Calculator.prototype.minusNumbers = function() {
        $('#txtResult').val(Number($('#txtResult').value) - Number($('#txtInput').value))
        clearEntry();
    }
    
    Calculator.prototype.clearEntry = function() {
        $('#txtInput').val(0)
    }
    
    Calculator.prototype.clear = function() {
        $('#txtInput').val(0)
        $('#txtResult').val(0)
    }

    return Calculator;
    
}());



})();

