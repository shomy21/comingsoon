// Custom written jquery Scripts

/*-- Switch on No Conflict mode --*/
jQuery.noConflict();


/********* Cufon Replacement **********/

Cufon.replace('.maintitle, .aboutustitle, .subscribetitle, .btn, .time', { fontFamily: 'Bebas Neue' });
Cufon.replace('.titlemessage, .cd-time', { fontFamily: 'Note this' });


/**************************************/

jQuery(document).ready(function() {
								
	jQuery("#time").countdown({
		date: "january 13, 2023",
		 "onChange" : function(event, settings){
			Cufon.refresh();	  
        },
		leadingZero: true
	});
	
});