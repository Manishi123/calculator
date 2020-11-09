$("#add").click(function(){

 var num1 = $("#calculator").find("#num1").val();
//    var num1 = document.getElementById("num1");
var num2 = $("#calculator").find("#num2").val();
  //  var num2 = document.getElementById("num2");
 var result = parseInt(num1) + parseInt(num2);

    $("#Result").text(result.toString());

});

$("#sub").click(function(){

 var num1 = $("#calculator").find("#num1").val();
//    var num1 = document.getElementById("num1");
var num2 = $("#calculator").find("#num2").val();
  //  var num2 = document.getElementById("num2");
 var result = parseInt(num1) - parseInt(num2);

    $("#Result").text(result.toString());

});

$("#mul").click(function(){

 var num1 = $("#calculator").find("#num1").val();
//    var num1 = document.getElementById("num1");
var num2 = $("#calculator").find("#num2").val();
  //  var num2 = document.getElementById("num2");
 var result = parseInt(num1) * parseInt(num2);

    $("#Result").text(result.toString());

});

$("#div").click(function(){

 var num1 = $("#calculator").find("#num1").val();
//    var num1 = document.getElementById("num1");
var num2 = $("#calculator").find("#num2").val();
  //  var num2 = document.getElementById("num2");
 var result = parseInt(num1) / parseInt(num2);

    $("#Result").text(result.toString());

});
