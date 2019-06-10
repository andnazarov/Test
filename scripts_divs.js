jQuery(document).ready(function ($) {
    
    $.get("divisions.json", function (datajson) {
        console.log(datajson);
        var itemList = datajson;//JSON.parse(datajson);
        
    
        $.get("listform.html", function (data) {
            var ht = ejs.render(data, { itemList: itemList });
            $('#listform').html(ht);
            $('[name="listItem"]').click(function (event) {
                $('#exampleModal').modal('show');
            });
        });
    
    });

    
    

});

