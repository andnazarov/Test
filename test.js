$("*").on("pagecreate", function(event) {
  if (event.target.attributes.id.value === "divisions_page") {
    divisions_page_create(event);
  } else if (event.target.attributes.id.value === "questions_page") {
    questions_page_show(event);
  } else if (event.target.attributes.id.value === "question_page") {
    question_page_show(event);
  }
});

function divisions_page_create(event) {
  $.get("divisions.json", function(datajson) {
    // Помещаем объект для дальнейшего использования.
    jQuery.data(document.body, "data", datajson);

    var itemList = datajson;
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
        item.questions.length.toString() +
        "</span></a></li>";
      divsList.append(element);
    });

    divsList.listview("refresh");

    // Обработка нажатия на раздел.
    $("#divsList li").click(function() {
      var divId = this.id.replace("div", "");
      var index = Number.parseInt(divId) - 1;
      jQuery.data(document.body, "current_division_index", index);
    });
    
  });
}

// Вызывается перед показом формы списка вопросов.
function questions_page_show(event) {
  $("#questions_page").on("pagebeforeshow", function(event) {
    var current_division_index = jQuery.data(
      document.body,
      "current_division_index"
    );

    // Установка заголовка формы.
    var current_division_index_string = (current_division_index + 1).toString();
    var questions_page_header = $("#questions_page_header");
    questions_page_header.empty();
    questions_page_header.append(
      "<h1>Раздел " + current_division_index_string + "</h1>"
    );
    questions_page_header.toolbar("refresh");

    var itemList = jQuery.data(document.body, "data");
    var division = itemList[current_division_index];

    // Перерисовываем список вопросов текущего раздела.
    var questionsList = $("#questionsList");
    questionsList.empty();
    division.questions.forEach(function(item, i, itemList) {
      var element =
        '<li class="wrap" id="ques' +
        i.toString() +
        '"><a href="#question_page"><p>' +
        item.number +
        '. ' +
        item.caption +
        '</p></a></li>';
      questionsList.append(element);
    });
    questionsList.listview("refresh");

    console.log($("#questionsList li a p"));
    
    // Обработка нажатия на вопрос.
    $("#questionsList li").click(function() {
      var quesId = this.id.replace("ques", "");
      var index = Number.parseInt(quesId) - 1;
      jQuery.data(document.body, "current_question_index", index);
    });
    
    
    
    
  });
}

function question_page_show(event) {
    $("#question_page").on("pagebeforeshow", function(event) {
    
    
    
    });

}