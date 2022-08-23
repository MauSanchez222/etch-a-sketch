const sketchZone = document.getElementById('tiles-zone');
const normButt = document.getElementById('normal');
const eraser = document.getElementById('reset');

function loadTiles(){
    for (let i=255; i>0; i--){
        const sketchTile = document.createElement('div');
        sketchTile.classList.add('tile-white');
        sketchTile.addEventListener('mouseenter', function(){
            sketchTile.classList.toggle('tile-black')
        });
        sketchZone.appendChild(sketchTile);     
    }
}

document.addEventListener('DOMContentLoaded', function(){
    loadTiles();
})

eraser.addEventListener('click', function(e){
    const tiles = document.getElementsByClassName('tile-black');
    Array.from(tiles).forEach(function(tile){
        tile.classList.remove('tile-black');
    })
});
