//copyright_Shahriar Shafin
//19-Oct-2020

//keydown event
window.addEventListener('keydown', function (event) {
	//forward
	if (event.keyCode === 38) {
		document.getElementById("forward").src = "icons/up_on.png";
		// action link
		// location.href = "https://shahriarshafin.me";
	}
	else if (event.keyCode === 87) //W
	{
		document.getElementById("forward").src = "icons/up_on.png";
		// action link
		// location.href = "https://shahriarshafin.me";
	}

	//backward
	if (event.keyCode === 40) {
		document.getElementById("backward").src = "icons/down_on.png";
		// action link
		// location.href = "https://shahriarshafin.me";
	}
	else if (event.keyCode === 83) //S
	{
		document.getElementById("backward").src = "icons/down_on.png";
		// action link
		// location.href = "https://shahriarshafin.me";
	}

	//left
	if (event.keyCode === 37) {
		document.getElementById("left").src = "icons/left_on.png";
		// action link
		// location.href = "https://shahriarshafin.me";
	}
	else if (event.keyCode === 65) //A
	{
		document.getElementById("left").src = "icons/left_on.png";
		// action link
		// location.href = "https://shahriarshafin.me";
	}

	//right
	if (event.keyCode === 39) {
		document.getElementById("right").src = "icons/right_on.png";
		// action link
		// location.href = "https://shahriarshafin.me";

	}
	else if (event.keyCode === 68) //D
	{
		document.getElementById("right").src = "icons/right_on.png";
		// action link
		// location.href = "https://shahriarshafin.me";

	}

	//stop
	if (event.keyCode === 32) //space
	{
		document.getElementById("stop").src = "icons/stop_on.png";
		// action link
		// location.href = "https://shahriarshafin.me";
		//notifier();
	}

});
    

//keyup event
window.addEventListener('keyup', function (event) {
	//forward 
	if (event.keyCode === 38) {
		document.getElementById("forward").src = "icons/up_off.png";
		// action link
		// location.href = "https://shahriarshafin.me";
	}
	else if (event.keyCode === 87) //W
	{
		document.getElementById("forward").src = "icons/up_off.png";
		// action link
		// location.href = "https://shahriarshafin.me";
	}

	//backward
	if (event.keyCode === 40) {
		document.getElementById("backward").src = "icons/down_off.png";
		// action link
		// location.href = "https://shahriarshafin.me";
	}
	else if (event.keyCode === 83) //S
	{
		document.getElementById("backward").src = "icons/down_off.png";
		// action link
		// location.href = "https://shahriarshafin.me";
	}

	//left
	if (event.keyCode === 37) {
		document.getElementById("left").src = "icons/left_off.png";
		// action link
		// location.href = "https://shahriarshafin.me";
	}
	else if (event.keyCode === 65) //A
	{
		document.getElementById("left").src = "icons/left_off.png";
		// action link
		// location.href = "https://shahriarshafin.me";
	}

	//right
	if (event.keyCode === 39) {
		document.getElementById("right").src = "icons/right_off.png";
		// action link
		// location.href = "https://shahriarshafin.me";

	}
	else if (event.keyCode === 68) //D
	{
		document.getElementById("right").src = "icons/right_off.png";
		// action link
		// location.href = "https://shahriarshafin.me";

	}
	if (event.keyCode === 32) //space
	{
		document.getElementById("stop").src = "icons/stop_off.png";
		// action link
		// location.href = "https://shahriarshafin.me";

	}

});

// IP Address 
function getIp() {
	var x ="url('";
	var y = document.getElementById("ip").value;
	var z ="')"; 
	var xyz=x+y+z;
    document.body.style.backgroundImage = xyz;
    
  }
// test code here 

//demo  http://192.168.0.106:8080/video

// test code here 

//Notifier
// function notifier() {

// 	$('.alert').addClass("show");
// 	$('.alert').removeClass("hide");
// 	$('.alert').addClass("showAlert");
// 	setTimeout(function () {
// 		$('.alert').removeClass("show");
// 		$('.alert').addClass("hide");
// 	}, 1000);
// }
