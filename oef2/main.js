var count=0;
$( "#counter" ).click(function(){
    count++;
    $("#text").html(count);
});

$( "#counter-" ).click(function(){
    count--;
    $("#text").html(count);
});
