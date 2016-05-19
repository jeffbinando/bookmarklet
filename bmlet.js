// JavaScript Document
if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
    script = document.createElement( 'script' );
   script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'; 
    script.onload=releasetheKraken;
    document.body.appendChild(script);
} 
else {
    fillInput();
}
function fillInput() {
	var email = 'test@test.com';
	var zip = '12345';
	var phone = '0000000000';
	var text  = 'Test';
	jQuery('input').each(function(){
		if(jQuery(this).attr('type')=='submit'){
			
		}else if(jQuery(this).attr('type')=='hidden'){
		
		}else{	
			jQuery(this).val(text); 	
			jQuery("[name*='email']").val(email);
			jQuery("[name*='phone']").val(phone);	
			jQuery("[name*='zip']").val(zip);
		}	
	});
	jQuery('textarea').each(function(){
		jQuery(this).val(text);   
	});
}