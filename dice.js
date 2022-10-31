var variable1 = Math.floor(Math.random()*6)+1;
var image1 = "d" + variable1 + ".jpg";
var imagesource1 = "images/" + image1;
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src",imagesource1);

var variable2 = Math.floor(Math.random()*6)+1;
var image2 = "d" + variable2 + ".jpg";
var imagesource2 = "images/" + image2;
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src",imagesource2);

if(variable1 > variable2)
{
    document.getElementById("ok").innerHTML = "p1 wins";
}
else if(variable2 > variable1)
{
    document.getElementById("ok").innerHTML = "p2 wins";
}
else
{
    document.getElementById("ok").innerHTML = "draw";
}