$('#send').on('click', function() {
    var mes = $('textarea').val();
    if(mes !== '') {
        $('.chatbox').append('<div class = "my-bubble bubble">' + mes + '</div>');
        $('textarea').val('');
    }
});
