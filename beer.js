// This code runs right when the page is loaded
var x = 99
while(x>0){
	console.log(x + "bottles of beer on the wall" + x + 
		"bottles of beer, take one down,pass it around" + 
		x + "bottles of beer on the wall")
	x--;
}

// This code is connected to the click button
$(document).ready(function(){
	$("#button").click(function(){
		$("#modal").show();

		var x = 99
		while(x>0){
			$('#one').text(x + "bottles of beer on the wall");
			$('#two').text(x + "bottles of beer,");
			x--;
			$('#three').text(x + "bottles of beer on the wall");
		};	
	});//get text to show

	$("#modal").click(function(){
		$("#modal").hide();
	});// This should hide the modal but does not seem to work
});

// This is just swimming out there on it's own.
// function beer(){
// 	while(x>0){
// 		(x + $("#one").text('bottles of beer on the wall') + x +("#two").text + ("#three").text + x);
// 		x--;
// 	};
// };
// $('#one').text('2222')