jQuery(document).ready(function ($) {

    $('[name="listItem"]').click(function (event) {
        //alert(event.delegateTarget.id);
        $('#exampleModal').modal('show');
    });

    //$('#navbar').ready(function (event) {
        //$('#navbar').empty();
        $.get("navbar.ejs", function(data){
            alert(data);
            var ht = ejs.render(data, {navItem: "Привет!"});
            $('#navbar1').load(ht);
        });
        //var template = $('#navbar-template').innerHTML;
        
        
    //});

    //$('#content').ready(function (event) {
    //    $('#content').empty();
    //    var template = $.get("navbar.ejs");
    //    $('#content').html()
    //});

});

