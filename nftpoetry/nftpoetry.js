//Dropdown menu
$(document).ready(function() {
        $( '.dropdown' ).hover(
            function(){
                $(this).children('.sub-menu').slideDown(200);
            },
            function(){
                $(this).children('.sub-menu').slideUp(500);
            }
        );
    

	
	}); // end ready
	
/* function submited() {
    alert("Thank you for submitting your work.");
} */

function myFunction() {
    document.getElementById("formSubmit").reset();
}