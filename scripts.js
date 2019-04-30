jQuery(document).ready(function ($) {

    $('[name="listItem"]').click(function (event) {
        //alert(event.delegateTarget.id);
        $('#exampleModal').modal('show');
    });

    $('#navbar').ready(function (event) {
        $('#navbar').empty();
        var template = $.get("navbar.ejs");
        //var template = $('#navbar-template').innerHTML;
        
        var ht = ejs.render(template, {navItem: "Привет!"});
        $('#navbar').load(ht);
    });

    

    //$('#content').ready(function (event) {
    //    $('#content').empty();
    //    var template = $.get("navbar.ejs");
    //    $('#content').html()
    //});


});

