/*
Bouw een html pagina met een vierkant. Wanneer een richtingstoets wordt ingedrukt
 (pijltjes toetsen), beweegt het vierkantje 10px in de juiste richting.

BONUS: Wanneer het blok de ene kant van de pagina bereikt, moet het aan de andere
kant weer verschijnen.      */

$(document).keydown(function(e) {
switch (e.which) {
case 37:
$('#movingBox').stop().animate({
left: '-=10'
}); //left arrow key
break;
case 38:
$('#movingBox').stop().animate({
top: '-=10'
}); //up arrow key
break;
case 39:
$('#movingBox').stop().animate({
left: '+=10'
}); //right arrow key
break;
case 40:
$('#movingBox').stop().animate({
top: '+=10'
}); //bottom arrow key
break;
}
});
