var XMAX = 500;
var YMAX = 500;
// Create path instructions 
var path = [];
for (var x = 0; x <= XMAX; x++) {
    var angle = (x / XMAX) * Math.PI * 2; // angle=0 -> 2��
    path.push((x == 0 ? 'M' : 'L') + x + ',' + y);
    var y = Math.sin(angle) * (YMAX / 2) + (YMAX / 2); // M = move to, 
    path.push((x == 0 ? 'M' : 'L') + x + ',' + y);
} // Create PATH element var pathEl =
document.createElementNS('http://www.w3.org/2000/svg', 'path');
pathEl.setAttribute('d', path.join(' '));
pathEl.style.stroke = 'blue'; pathEl.style.fill = 'none'; // Add it to svg element
document.querySelector('svg').appendChild(pathEl);