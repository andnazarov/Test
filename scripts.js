jQuery(document).ready(function ($) {

    $('[name="listItem"]').click(function (event) {
        //alert(event.delegateTarget.id);
        $('#exampleModal').modal('show');
    });

    $('#navbar').ready(function (event) {
        $('#navbar').empty();
        var template = $.get("navbar.ejs");
        var ht = ejs.render(template);
        console.log(ht);
        $('#navbar').load('navbar.ejs');
    });

    

    //$('#content').ready(function (event) {
    //    $('#content').empty();
    //    var template = $.get("navbar.ejs");
    //    $('#content').html()
    //});


});

