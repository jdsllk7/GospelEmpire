/* //Dropdown menu
$(document).ready(function() {
        $( '.dropdown' ).hover(
            function(){
                $(this).children('.sub-menu').slideDown(200);
            },
            function(){
                $(this).children('.sub-menu').slideUp(500);
            }
        );
    }); // end ready */
	
	
	
function follow(){
	
	var toggle = document.getElementById('followDownload').value;
	var follow = "Follow";
	var unfollow = "Unfollow";
	
	if(toggle.match(follow)){
		toggle = unfollow;
	}else{
		toggle = follow;
	}
	
	document.getElementById('followDownload').value = toggle;
	
}