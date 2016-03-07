var counter = 0;

var nextProfile = 0;

$(document).ready(function() {
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data) {
        appendDom(data);
        console.log(data);
      }
    });

$(".kappa").on("click", ".next", nextKappa);
$(".kappa").on("click", ".prev", prevKappa);


});

function nextKappa(){
  $(".user-profile" + nextProfile).hide();
  nextProfile++;
  $(".user-profile" + nextProfile).show();
  if(nextProfile > 22){
    nextProfile = 0;
    $(".user-profile" + nextProfile).show();
}
console.log(nextProfile);
}



function prevKappa(){
  $(".user-profile" + nextProfile).hide();
  nextProfile--;
  $(".user-profile" + nextProfile).show();
    if(nextProfile < 0){
    nextProfile = 22;
    $(".user-profile" + nextProfile).show();
  }

}

function appendDom(data){

  for(var i = 0; i < data.kappa.length; i++){

    $(".kappa").append('<div style="display:none" class="user-profile' + counter + '"></div>');

    var $el = $(".kappa").children().last();

    $el.append("<h1>" + "Name : " + data.kappa[i].name + "</>");
    $el.append("<h2>" + "Hometown : " +  data.kappa[i].location + "</>");
    $el.append("<h2>" + "Spirit Animal : " + data.kappa[i].spirit_animal + "</>");
    $el.append("<q>" + data.kappa[i].shoutout +  "</>");

    counter++;
    }
      $(".user-profile" + nextProfile).show();
}

function createIndexNodes(array){
  for(var i = 0; i < array.length; i++){
    $(".index-container").append("<div class='index-point'></div>");
    var $el = $(".index-container").children().last();
    $el.data("index", i);
    console.log($el.data());
    elementArray.push($el);
  }
}
