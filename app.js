
//jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

//BootStrap is awesome

//   $("p10").on("mouseover", function() {
//     $("p10").css("color", "#D8F8B7");
// });
//
// //BootStrap is awesome
// $("p11").on("mouseover", function() {
//   $("p11").css("color", "#D8F8B7");
// });
//
//
// //JQuery is awesome section
//
// $("p2").on("mouseover", function() {
//   $("p2").css("color", "#7EB5A6");
// });
//
// $("p3").on("mouseover", function() {
//   $("p3").css("color", "#C36839");
// });
//
// $("p4").on("mouseover", function() {
//   $("p4").css("color", "#170055");
// });
//
// $("p5").on("mouseover", function() {
//   $("p5").css("color", "#3E00FF");
// });
//
// $("p6").on("mouseover", function() {
//   $("p6").css("color", "#F1ECC3");
// });
//
// $("p7").on("mouseover", function() {
//   $("p7").css("color", "#C9D8B6");
// });
//
// $("p8").on("mouseover", function() {
//   $("p8").css("color", "#A03C78");
// });
//
// $("p9").on("mouseover", function() {
//   $("p9").css("color", "#ED8E7C");
// });
//
// $("button").click(function() {
//   $("p2, p3, p4, p5, p6, p7, p8, p9, p10, p11").css("color", "#B980F0");
// });
//JQuery is awesome section

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});
