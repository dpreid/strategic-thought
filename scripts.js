/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mysidemenu").style.width = "250px";
    document.getElementById("mainpage").style.marginLeft = "250px";
    document.getElementById("pagehead").style.marginLeft = "250px";

}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mysidemenu").style.width = "0px";
    document.getElementById("mainpage").style.marginLeft = "0px";
    document.getElementById("pagehead").style.marginLeft = "0px";
}

/* Reveal images that are hidden */
/* Bad solution, but simply adding all the images I want hidden to this function */
function revealImage(){
  document.getElementById("hiddenImage1").style.opacity=1.0;
  document.getElementById("hiddenImage2").style.opacity=1.0;
  

}

/* Hide image again */
function hideImage(){
  //console.log("Running");
  document.getElementById("hiddenImage1").style.opacity=0.0;
  document.getElementById("hiddenImage2").style.opacity=0.0;
}
