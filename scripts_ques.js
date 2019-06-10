jQuery(document).ready(function ($) {
    
    $.get("questions01.json", function (datajson) {
        console.log(datajson);
        var itemList = datajson;//JSON.parse(datajson);
        
    
        $.get("questions_list.html", function (data) {
            var ht = ejs.render(data, { itemList: itemList, divName: "Раздел 01" });
            $('#listform').html(ht);
            $('[name="listItem"]').click(function (event) {
                
                alert(this);
            });
        });
    
    });

    
    

});

