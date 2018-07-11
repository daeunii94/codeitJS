$('#btn1').on('click', function() {
    $('.flag.blue').addClass('down');
    setTimeout(goUp, 1000);
    
});

$('#btn2').on('click', function() {
    $('.flag.white').addClass('down');
    setTimeout(goUp, 1000);
});

$('#btn3').on('click', function() {
    $('.flag.blue.dot').addClass('down');
    setTimeout(goUp, 1000);
});

function goUp() {
 	$('.flag').removeClass('down');   
    
}
