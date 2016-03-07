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
  if(nextProfile >= 23){
    nextProfile = 0;
}
// console.log(nextProfile);
}

function prevKappa(){
  $(".user-profile" + nextProfile).hide();
  nextProfile--;
  $(".user-profile" + nextProfile).show();
    if(nextProfile < 0){
      nextProfile = 22;
  }
  // $(".user-profile" + nextProfile).show();
}



function appendDom(data){

  for(var i = 0; i < data.kappa.length; i++){

    $(".kappa").append('<div style="display:none" class="user-profile' + counter + '"></div>');

    var $el = $(".kappa").children().last();

    $el.append("<h1>" + "Name : " + data.kappa[i].name + "</h1>");
    $el.append("<h2>" + "Hometown : " +  data.kappa[i].location + "</h2>");
    $el.append("<h2>" + "Spirit Animal : " + data.kappa[i].spirit_animal + "</h2>");
    $el.append("<p>" + "Shoutout! : " + "<q>" + data.kappa[i].shoutout + "</q>" + "</p>");

    counter++;
    }
}

function showIndex(){

}
