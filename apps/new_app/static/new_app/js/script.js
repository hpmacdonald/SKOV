function TestsFunction() {
    var T = document.getElementById("TestsDiv"),
        displayValue = "";
    if (T.style.display == "")
        displayValue = "none";

    T.style.display = displayValue;
}

function TestsFunction2() {
    var T = document.getElementById("TestsDiv2"),
        displayValue = "";
    if (T.style.display == "")
        displayValue = "none";

    T.style.display = displayValue;
}

function TestsFunction3() {
    var T = document.getElementById("TestsDiv3"),
        displayValue = "";
    if (T.style.display == "")
        displayValue = "none";

    T.style.display = displayValue;
}

function TestsFunction4() {
    var T = document.getElementById("TestsDiv4"),
        displayValue = "";
    if (T.style.display == "")
        displayValue = "none";

    T.style.display = displayValue;
}

function TestsFunction5() {
    var T = document.getElementById("TestsDiv5"),
        displayValue = "";
    if (T.style.display == "")
        displayValue = "none";

    T.style.display = displayValue;
}

function TestsFunction6() {
    var T = document.getElementById("TestsDiv6"),
        displayValue = "";
    if (T.style.display == "")
        displayValue = "none";

    T.style.display = displayValue;
}

function TestsFunction7() {
    var T = document.getElementById("TestsDiv7"),
        displayValue = "";
    if (T.style.display == "")
        displayValue = "none";

    T.style.display = displayValue;
}

// *---------------- MODAL IMAGE CLICK --------------------*
        // Get the modal
        var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = $(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function image(event)  {    
    modal.style.display = "block";
    modalImg.src = event.target.src;
    captionText.innerHTML = event.target.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
