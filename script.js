//copyright_Shahriar Shafin
//19-Oct-2020

//keydown event
window.addEventListener('keydown', function (event) {
	//forward
	if (event.keyCode === 38) {
		document.getElementById("forward").src = "icons/up_on.png";
	}
	else if (event.keyCode === 87) //W
	{
		document.getElementById("forward").src = "icons/up_on.png";
	}

	//backward
	if (event.keyCode === 40) {
		document.getElementById("backward").src = "icons/down_on.png";
	}
	else if (event.keyCode === 83) //S
	{
		document.getElementById("backward").src = "icons/down_on.png";
	}

	//left
	if (event.keyCode === 37) {
		document.getElementById("left").src = "icons/left_on.png";
	}
	else if (event.keyCode === 65) //A
	{
		document.getElementById("left").src = "icons/left_on.png";
	}

	//right
	if (event.keyCode === 39) {
		document.getElementById("right").src = "icons/right_on.png";

	}
	else if (event.keyCode === 68) //D
	{
		document.getElementById("right").src = "icons/right_on.png";

	}

	//stop
	if (event.keyCode === 32) //space
	{
		document.getElementById("stop").src = "icons/stop_on.png";
		notifier();
	}

});


//keyup event
window.addEventListener('keyup', function (event) {
	//forward 
	if (event.keyCode === 38) {
		document.getElementById("forward").src = "icons/up_off.png";
	}
	else if (event.keyCode === 87) //W
	{
		document.getElementById("forward").src = "icons/up_off.png";
	}

	//backward
	if (event.keyCode === 40) {
		document.getElementById("backward").src = "icons/down_off.png";
	}
	else if (event.keyCode === 83) //S
	{
		document.getElementById("backward").src = "icons/down_off.png";
	}

	//left
	if (event.keyCode === 37) {
		document.getElementById("left").src = "icons/left_off.png";
	}
	else if (event.keyCode === 65) //A
	{
		document.getElementById("left").src = "icons/left_off.png";
	}

	//right
	if (event.keyCode === 39) {
		document.getElementById("right").src = "icons/right_off.png";

	}
	else if (event.keyCode === 68) //D
	{
		document.getElementById("right").src = "icons/right_off.png";

	}
	if (event.keyCode === 32) //space
	{
		document.getElementById("stop").src = "icons/stop_off.png";

	}

});

//Notifier
function notifier() {

	$('.alert').addClass("show");
	$('.alert').removeClass("hide");
	$('.alert').addClass("showAlert");
	setTimeout(function () {
		$('.alert').removeClass("show");
		$('.alert').addClass("hide");
	}, 1000);
}

// test code here 

