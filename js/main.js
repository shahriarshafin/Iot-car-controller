//copyright https://github.com/ShahriarShafin
//19-Oct-2020

// variables 
var modal = document.getElementById("myModal");
var vsett = document.getElementById("settPop");
var span = document.getElementsByClassName("close")[0];
//---------------------- NOTIFIER -------------------
function tutorial() {
  if (window.innerHeight > window.innerWidth) {
    alert("Please rotate screen to landscape mode and reload !");
  } else {
    modal.style.display = "block";
  }
}
//---------------------------------------------------

//-------------------- POP-UP INTRO -----------------
// loading bar
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        modal.style.display = "none";
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
// end loading bar
span.onclick = function () {
  move();
}
// clicks outside of the modal
window.onclick = function (event) {
  if (event.target == modal) {
    move();
  }
  else if (event.target == vsett) {
    settNone();
  }
}
//------------- ---- END POP-UP INTRO ----------

//------------------ POP-UP SETTINGS -----------
function settings(){
  settPop.style.display = "block";
  settIcon.style.transform = "rotate(180deg)";
  settIcon.style.setProperty("-webkit-transition", "-webkit-transform 0.3s ease-in");
}
function settNone(){
  settPop.style.display = "none";
  settIcon.style.transform = "rotate(0deg)";
  settIcon.style.setProperty("-webkit-transition", "-webkit-transform 0.3s ease-in");
}
//----------------------------------------------

//-------------------- SHOW BUTTON ------------------
function showBtn(){
  document.getElementById("connectBtn").style.display = "block"; 
}
//---------------------------------------------------

//------------------- Getting Cam IP -----------------
function getIp() {
  var x = "url('";
  var y = document.getElementById("ip_cam").value; //as http://192.168.0.106:8080
  var y1 = y+"/video";
  var z = "'), url(assets/Camerror.gif)"; //for invalid input the second one will load
  var xyz = x + y1 + z; //url('get from y1') //ninja technique:D
  document.body.style.backgroundImage = xyz;
  document.getElementById("camFrame").src = y+"/settings_window.html";
  document.getElementById("connectBtn").style.display = "none"; // hide connect button
}
//---------------------------------------------------

//--------------------- KEY DOWN --------------------
window.addEventListener("keydown", function (event) {
  //SOUND_HORN
  if (event.code == "KeyH") {
    document.getElementById("sound").play();

      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/ho";
      document.getElementById("cmdip").click();
  }

  //____________________ S T O P ____________________
  if (event.code == "Space") {
    document.getElementById("brake").play();
    document.getElementById("left").style.opacity = "1.0";
    document.getElementById("right").style.opacity = "1.0";

    // action link
    document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/s";
    document.getElementById("cmdip").click();
  }

  //_________________ F O R W A R D _________________
  if (event.code == "ArrowUp" || event.code == "KeyW") {
    document.getElementById("box").style.backgroundImage = "url('assets/up_on.png')";
    // document.getElementById("box").style.backgroundSize = "60px 60% ";

    // action link
    document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/f";
    document.getElementById("cmdip").click();
  } 

  //________________ B A C K W A R D ________________
  if (event.code == "ArrowDown" || event.code == "KeyS") {
    document.getElementById("box").style.backgroundImage = "url('assets/up_on.png')";
    document.getElementById("box").style.transform = "rotate(180deg)";

    // action link
    document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/b";
    document.getElementById("cmdip").click();
  }

  // ____________________ L E F T ___________________
  if (event.code == "ArrowLeft") {
    document.getElementById("left").style.opacity = "1.0";

    // action link
    document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/l";
    document.getElementById("cmdip").click();
  } else if (event.code == "KeyA") {
    document.getElementById("left").style.opacity = "1.0";
    document.getElementById("box").style.backgroundImage = "url('assets/up_on.png')";
    document.getElementById("box").style.transform = "rotate(180deg)";

    // action link
    document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/bl";
    document.getElementById("cmdip").click();
  }

  //____________________ R I G H T __________________
  if (event.code == "ArrowRight") {
    document.getElementById("right").style.opacity = "1.0";

    // action link
    document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/r";
    document.getElementById("cmdip").click();
  } else if (event.code == "KeyD") {
    document.getElementById("right").style.opacity = "1.0";
    document.getElementById("box").style.backgroundImage = "url('assets/up_on.png')";
    document.getElementById("box").style.transform = "rotate(180deg)";

    // action link
    document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/br";
    document.getElementById("cmdip").click();
  }
});
//----------------------------------------------------

//------------------------ KEY UP --------------------
window.addEventListener("keyup", function (event) {
  //CONNECT_BUTTON_PRESSED
  if (event.code == "Enter") {
    event.preventDefault();
    document.getElementById("ip_cam").blur();
    document.getElementById("ip_engine").blur();
    document.getElementById("connectBtn").click();
  }

  //HORN_OFF
  if (event.code == "KeyH") {
    document.getElementById("sound").pause();
    sound.currentTime = 0;

    document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/hf";
    document.getElementById("cmdip").click();
  }

  //BRAKE
  if (event.code == "Space") {
    document.getElementById("brake").pause();
    brake.currentTime = 0;
    document.getElementById("left").style.opacity = "0.2";
    document.getElementById("right").style.opacity = "0.2";
  }

  //_________________ F O R W A R D _________________
  if (event.code == "ArrowUp" || event.code == "KeyW") {
    document.getElementById("box").style.backgroundImage = "url('')";

    // action link
    document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/s";
    document.getElementById("cmdip").click();
  } 

  //________________ B A C K W A R D ________________
  if (event.code == "ArrowDown" || event.code == "KeyS") {
    document.getElementById("box").style.backgroundImage = "url('')";
    document.getElementById("box").style.transform = "rotate(0deg)";

    // action link
    document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/s";
    document.getElementById("cmdip").click();
  }
  
  // ____________________ L E F T ___________________
  if (event.code == "ArrowLeft") {
    document.getElementById("left").style.opacity = "0.2";

    // action link
    document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/s";
    document.getElementById("cmdip").click();
  } else if (event.code == "KeyA") {
    document.getElementById("left").style.opacity = "0.2";
    document.getElementById("box").style.backgroundImage = "url('')";
    document.getElementById("box").style.transform = "rotate(0deg)";

    // action link
    document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/s";
    document.getElementById("cmdip").click();
  }

  //___________________ R I G H T ___________________
  if (event.code == "ArrowRight") {
    document.getElementById("right").style.opacity = "0.2";

    // action link
    document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/s";
    document.getElementById("cmdip").click();
  } else if (event.code == "KeyD") {
    document.getElementById("right").style.opacity = "0.2";
    document.getElementById("box").style.backgroundImage = "url('')";
    document.getElementById("box").style.transform = "rotate(0deg)";

    // action link
    document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/s";
    document.getElementById("cmdip").click();
  }
});
//-------------------------------------------------------------------------