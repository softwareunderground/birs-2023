// Activate pointer event of map after clicking on map overlay
var map_overlay = document.querySelector('.map_overlay');
var map = document.querySelector('.map');

map_overlay.onclick = function(){
    map_overlay.classList.add('hidden');
    map.classList.remove('no_scroll');
}
