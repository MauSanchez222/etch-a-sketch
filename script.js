const sketchZone = document.getElementById('tiles-zone');
const normBtn = document.getElementById('normal');
const sickBtn = document.getElementById('sicko');
const eraser = document.getElementById('reset');
const sketchTiles = document.getElementsByClassName('tile-white');
const resizeBtn = document.getElementById('resize');
const resizeInput = document.getElementById('resize-number')
let mode = 'normal';
let size = 255;

function loadTiles(size){

    for (let i=size; i>0; i--){
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

function setTileSize(size){
    let tileHeightWidth = (480/size)-2;
    console.log(tileHeightWidth);
    const tiles = document.getElementsByClassName('tile-white');
    for (let i = 0; i < tiles.length; i++){
        tiles[i].style.height = `${tileHeightWidth}px`;
        tiles[i].style.width = `${tileHeightWidth}px`;
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

function obtainValue(){
    size = document.getElementById('resize-number').value;
    if (size === ""){
        size = 16;
    }
    return size ;
}

document.addEventListener('DOMContentLoaded', function(){
    loadTiles(size);
    styleTiles();
})


sickBtn.addEventListener('click', function(){
    mode = 'sicko';
});

normBtn.addEventListener('click', function(){
    mode = 'normal';
})

resizeBtn.addEventListener('click', function(){
    let tileHW = obtainValue();
    sketchZone.innerHTML = '';
    loadTiles(tileHW**2);
    setTileSize(tileHW);
    resizeInput.value = "";
});

eraser.addEventListener('click', () => eraseTiles());


