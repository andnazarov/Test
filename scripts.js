jQuery(document).ready(function ($) {

    $.get("navbar.html", function (template) {
        $.get("http://localhost/DemoSSL/hs/jqmob/navbar"), function (datajson, template) {
            var data = JSON.parse(datajson);
            var ht = ejs.render(template, { navItemList: data });
            $('#navbar').html(ht);
        }
    });
    
    $.get("divisions.json", function (datajson) {
    
        itemList = JSON.parse(datajson);
    
    
    
    });

    //var itemList = [
    //    { id: 'item1', caption: 'Тест 1', description: 'Дополнительное описание тест 1', isActive: 'active' },
    //    { id: 'item2', caption: 'Тест 2', description: 'Дополнительное описание тест 2', isActive: '' }
    //];
    
    $.get("listform.html", function (data) {
        var ht = ejs.render(data, { itemList: itemList });
        $('#listform').html(ht);
        $('[name="listItem"]').click(function (event) {
            $('#exampleModal').modal('show');
        });
    });

});

