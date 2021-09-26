// **********  portfolio-filter *************
function filterSelection(category) {    
    var column, i;
    column = document.getElementsByClassName("column");      
    if (category == "all") category = "";

    for (i=0; i<column.length; i++) {        
            setTimeout(
                column[i].classList.remove("show")
                , 5000);        
        if (column[i].className.indexOf(category) > -1) {
            setTimeout(
                column[i].classList.add("show")
                , 5000)
        };          
    }
}
// var controls = document.getElementsByClassName("control");
// for (var i = 0; i < controls.length; i++) {           
//     controls[i].addEventListener("click", function(){           
//         var current = document.getElementsByClassName("active");        
//         current[0].className = current[0].className.replace(" active", "");        
//         this.className += " active";
//     });
// }

// **********  popup *********

// Get the modal
var modal = document.querySelector('.modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption

var imgs =document.querySelectorAll('.column a');
var modalImg = document.querySelector(".modal-content");

imgs.forEach(function(img){

    img.addEventListener('click', function(e){
        e.preventDefault();
        modal.style.display = "block";        
        modalImg.src = this.href;
    })
})
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("btn-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}