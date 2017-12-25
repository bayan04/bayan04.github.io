var i=0;
var i2=0;
var i3=0;
var img = document.getElementById('aus');
auss();
function auss() {

	var n;
	n = Math.floor(Math.random()*3+1);	
  $("#aus").css("left","1px");
  $("#aus").css("top","1px");
	switch(n){
		case 1: {
			img.src = "file:///C:/Users/%D0%91%D0%B0%D1%8F%D0%BD/Desktop/appple/img/black.png"; break;
		}
		case 2: {
			img.src = "file:///C:/Users/%D0%91%D0%B0%D1%8F%D0%BD/Desktop/appple/img/write.png"; break;
		}
		case 3: {
			img.src = "file:///C:/Users/%D0%91%D0%B0%D1%8F%D0%BD/Desktop/appple/img/wolf.png"; break;
		}
	}
}

 	$(function(){
  $("#aus").draggable();
	    $("#korzina1").droppable({
  	activeClass: "active",
  	hoverClass: "hover",
  	drop: function(){

      if (img.src=="file:///C:/Users/%D0%91%D0%B0%D1%8F%D0%BD/Desktop/appple/img/write.png") {
  		i=i+1;}
      else{ if (img.src=="file:///C:/Users/%D0%91%D0%B0%D1%8F%D0%BD/Desktop/appple/img/wolf.png"){
      i=0;
      }}
  	  $("#score1").html(""+i+"");
      auss();
  	}
	});
	});
  $("#korzina2").droppable({
    activeClass: "active",
    hoverClass: "hover",
    drop: function(){
      if (img.src=="file:///C:/Users/%D0%91%D0%B0%D1%8F%D0%BD/Desktop/appple/img/wolf.png") {
      i2=i2+1;}
      $("#score2").html(""+i2+"");
      auss();
    }
  });
  $("#korzina3").droppable({
    activeClass: "active",
    hoverClass: "hover",
    drop: function(){
      if (img.src=="file:///C:/Users/%D0%91%D0%B0%D1%8F%D0%BD/Desktop/appple/img/black.png") {
      i3=i3+1;}
      else{ if (img.src=="file:///C:/Users/%D0%91%D0%B0%D1%8F%D0%BD/Desktop/appple/img/wolf.png"){
      i3=0;
      }}
      $("#score3").html(""+i3+"");
      auss();
    }
  });
