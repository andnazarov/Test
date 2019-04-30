jQuery(document).ready(function ($) {

    $('[name="listItem"]').click(function (event) {
        $('#exampleModal').modal('show');
    });

    
    $.get("navbar.html", function(data) {
        var ht = ejs.render(data, {navItem: "Привет!"});
        $('#navbar1').html(ht);
    });
       
    var itemList = [
        {id: 'item1', caption: 'Тест 1', description: 'Дополнительное описание тест 1', isActive: 'active'},
        ];
    $.get("listform.html", function(data) {
        var ht = ejs.render(data, {itemList: itemList});
        $('#listform').html(ht);
    });

});

