jQuery(document).ready(function ($) {

    $('[name="listItem"]').click(function(event){
        //alert(event.delegateTarget.id);
        $('#exampleModal').modal('show');
    });
    
    //$('#content').clear();
    
    //$('#content').load('navbar.ejs');
    $('#content').append('<p>тест</p>');
    

});

