const sketchZone = document.getElementById('tiles-zone');
const normBtn = document.getElementById('normal');
const sickBtn = document.getElementById('sicko');
const eraser = document.getElementById('reset');
const sketchTiles = document.getElementsByClassName('tile-white');
let mode = 'normal';

function loadTiles(){
    for (let i=255; i>0; i--){
        const sketchTile = document.createElement('div');
        sketchTile.classList.add('tile-white');
        sketchTile.addEventListener('mouseenter', styleTiles)
        sketchZone.appendChild(sketchTile);     
    }
}

function eraseTiles(){
    const tiles = document.getElementsByClassName('tile-white');
    for (let i = 0; i < tiles.length; i++){
        tiles[i].style.backgroundColor = 'white';
    }
}

function styleTiles(e){
    if (mode === 'normal'){
        e.target.style.backgroundColor = 'black';
    }
    else{
        var randomR = Math.floor(Math.random() * 256);
        var randomG = Math.floor(Math.random() * 256);
        var randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`
    }
}

document.addEventListener('DOMContentLoaded', function(){
    loadTiles();
    styleTiles();
})


sickBtn.addEventListener('click', function(){
    mode = 'sicko';
});

normBtn.addEventListener('click', function(){
    mode = 'normal';
})


eraser.addEventListener('click', () => eraseTiles());


