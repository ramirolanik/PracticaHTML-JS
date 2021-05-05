$(document).ready(function() {    
    $('.error').hide();
    $('.buttons-clean').click(function(){        
        let nombre = $('#name').val().trim();
        if (nombre.length < 1)
        {
        $('.error').show();
        }
        return $('.error').hide();


    })
})