/*
Bouw een html pagina met 5 knoppen en een rechthoek. Elke knop veroorzaakt een actie op de rechthoek.

Knop 1: verhoogt de hoogte met 10px, als deze groter is dan 100px, wordt de hoogte gereset naar 10px.
Knop 2: verandert de rechthoek in groen
Knop 3: reset de oorspronkelijke kleuren
Knop 4: Verwijdert de rechthoek
Knop 5: verschijnt weer de rechthoek       */

$("#enlarged").click(function(){
  $("#rect").height("+=10");
  if ($("#rect").height() > 100) {
    $("#rect").height(10);
  }
});

$("#green").click(function(){
  $("#rect").css("background-color", "green");;
});

$("#reset").click(function(){
  $("#rect").css("background-color", "white");
});

$("#hide").click(function(){
  $("#rect").hide();
});

$("#show").click(function(){
  $("#rect").show();
});
