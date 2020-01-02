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
		
			/*Auto hide onload of page*/
			$("#facebookLink").hide();
			$("#youtubeLink").hide();
			$("#twitterLink").hide();
			$("#instagramLink").hide();
			$("#websiteLink").hide();
			$("#label1").hide();
			$("#label2").hide();
			$("#label3").hide();
			$("#label4").hide();
			$("#label5").hide();
		
		$(document).ready(function(){
			$("#optional").click(function(){
				$("#facebookLink").toggle("fast");
				$("#youtubeLink").toggle("fast");
				$("#twitterLink").toggle("fast");
				$("#instagramLink").toggle("fast");
				$("#websiteLink").toggle("fast");
				$("#label1").toggle("fast");
				$("#label2").toggle("fast");
				$("#label3").toggle("fast");
				$("#label4").toggle("fast");
				$("#label5").toggle("fast");
		
			});
		});
		
		
    }); // end ready
	
/* function submited() {
    alert("Thank you for submitting your work.");
} */

function myFunction() {
    document.getElementById("formSubmit").reset();
}