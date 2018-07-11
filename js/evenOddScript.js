$('#even-btn').on('click', function() {
    $('div').removeClass('selected');
    
    $('.card').each(function() {
        if( Number($(this).text()) % 2 === 0)
            $(this).addClass('selected');
            
    });  
   
});


$('#odd-btn').on('click', function() {
    $('div').removeClass('selected');
    
    $('.card').each(function() {
        if( Number($(this).text()) % 2 !== 0)
            $(this).addClass('selected');
            
    }); 
    
});