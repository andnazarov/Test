jQuery(document).ready(function ($) {

    $('[name="listItem"]').click(function (event) {
        //alert(event.delegateTarget.id);
        $('#exampleModal').modal('show');
    });

    //$('#content').clear();

    $('#navbar').ready(function (event) {
        $('#navbar').empty();
        //var template = $this.get("navbar.ejs");
        $('#navbar').load('navbar.ejs');
    });

    

    //$('#content').ready(function (event) {
    //    $('#content').empty();
    //    var template = $.get("navbar.ejs");
    //    $('#content').html()
    //});


});

