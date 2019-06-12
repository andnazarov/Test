$("*").on("pagecreate", function(event) {
  $.get("divisions.json", function(datajson) {
    var itemList = datajson; //JSON.parse(datajson);

    var divsList = $("#divsList");

    itemList.forEach(function(item, i, itemList) {
      var element =
        '<li id="div' +
        item.id +
        '"><a href="#questions_page">' +
        item.id +
        ". " +
        item.caption +
        '<span class="ui-li-count">' +
        item.questions_count +
        "</span></a></li>";
      divsList.append(element);
    });

    divsList.listview("refresh");

    // Обработка нажатия на раздел.
    $("#divsList li").click(function() {
      //console.log(this.id);
      var divId = this.id.replace("div", "");
      //console.log(divId);
      var index = Number.parseInt(divId) - 1;
      console.log(itemList[index]);

      // Перерисовываем список вопросов текущего раздела.

    });
  });
});
