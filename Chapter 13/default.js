/// <reference path="jquery.js" />

var squareCount = 16,
    emptySquare, 
    gameboard = '#gameBoard';

$(function (){
    createBoard();
    addTiles()

    $(gameboard).on('dragstart', dragStarted);
    $(gameboard).on('dragend', dragEnded);
    $(gameboard).on('dragenter', preventDefault);
    $(gameboard).on('dragover', preventDefault);
    $(gameboard).on('drop', drop);
});

function createBoard(){
    for (var i = 0; i < squareCount; i++) {
        var $square = $('<div id="square' + i + '"data-square="' + i + '" class="square"</div>');
        $square.appendTo($('#gameBoard'));
    }
}

function addTiles() {
    emptysquare = squareCount - 1;

    for (var i = 0; i < emptysquare; i++) {
       var $square = $('#square' + i);
       var $tile = $('<div draggable="true" id="tile' + i + '" class="tile">' + (i+1) + '</div>');
       $tile.appendTo($square);
    }
}

function dragStarted(e) {
    var $tile = $(e.target);
    $tile.addClass('dragged');
    var sourceLocation = $tile.parent().data('square');
    console.log(e)
    //e.dataTransfer.setData('text', sourceLocation.toString());
    //e.dataTransfer.effectAllowed = 'move';
}

function dragEnded(e) {
    $(e.target).removeClass('dragged');
}

function preventDefault(e) {
    e.preventDefault();
}

function drop(e) {
    var $square = $(e.target);
    
    if($square.hasClass('square') ) {
        
       var destinationLocation = $square.data('square')
        // if (emptySquare != destinationLocation) {
        //     console.log('hi')
        //     return;
        // }

        console.log(e)
       //var sourceLocation = Number(e.dataTransfer.getData('text'));
       moveTile($square.data('square'));
    }
}

function moveTile(sourceLocation){
    var distance = sourceLocation - emptySquare;

    if(distance < 0) {
       distance = -(distance);
    };

    if(distance == 1 || distance == 4) {
        swapTileandEmptySquare(sourceLocation);
    };
}

function swapTileandEmptySquare(sourceLocation){
    var $draggedItem = $('#square' + sourceLocation).children();
    $draggedItem.detach();
    var $target = $('#square' + emptySquare);
    $draggedItem.appendTo($target);
    emptySquare = sourceLocation;
}