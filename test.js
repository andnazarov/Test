$( "*" ).on( "pagecreate", function( event ) {

    $.get("divisions.json", function (datajson) {
        var itemList = datajson;//JSON.parse(datajson);
        
        var divsList = $("#divsList");
        
        itemList.forEach(function(item, i, itemList) {
           
           var element = '<li id="div' + item.id + '"><a href="#">' + item.id + '. ' + item.caption + '<span class="ui-li-count">' + item.questions_count + '</span></a></li>';
           divsList.append(element);
            
        });
        
        divsList.listview("refresh");
    
    });

});

$("#divsList > li").on("click", function(ebent) {
    alert(event);

});