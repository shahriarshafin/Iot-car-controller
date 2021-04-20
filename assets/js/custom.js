// ----------------------- START HIDE CURSOR ------------------------------------ 
$(function () {
    var timer;
    var fadeInBuffer = false;
    $(document).mousemove(function () {
        if (!fadeInBuffer && timer) {
            clearTimeout(timer);
            timer = 0;
            $('html').css({
                cursor: ''
            });
        } else {
            $('*').css({
                cursor: 'default'
            });
            fadeInBuffer = false;
        }
        timer = setTimeout(function () {
            $('*').css({
                cursor: 'none'
            });
            fadeInBuffer = true;
        }, 5000) // time 5 seconds
    });
    $('*').css({
        cursor: 'default'
    });
});
// ------------------------ END HIDE CURSOR ------------------------------------- 

// ------------------------- START NAV BAR -------------------------------------- 
$('.expandHome').mouseover(function () {
    $('.sub-home').css({
        'display': 'block'
    });
});
$('.subnavbtn').mouseover(function () {
    $('.sub-home').css({
        'display': 'none'
    });
});

$('#trapezoid').mouseleave(function () {
    $('#trapezoid').css({
        'margin-top': '-53px'
    });
    $('.sub-home').css({
        'display': 'none'
    });
}).mouseenter(function () {
    $('#trapezoid').css({
        'margin-top': '0px'
    });
});
// --------------------------- END NAV BAR --------------------------------------- 

//-------------------------- GETTING CAM IP --------------------------------------
// pressed cam input field 
function camipClicked() {
    document.getElementById("camipBtn").style.backgroundColor = "red";
}

// pressed cam icon 
function getcamIp() {
    document.getElementById("camipBtn").style.backgroundColor = "#ffd607";
    document.getElementById("cam-ip").blur();
    document.body.style.backgroundImage = "url('assets/img/camPreloader.gif')";
    
// wait 9.3 sec then execute the function
    setTimeout(function () {
    var x = "url('";
    var y = document.getElementById("cam-ip").value; //as http://192.168.0.106:8080
    var y1 = y + "/video";
    var z = "'), url(assets/img/error.png)"; //for invalid input the second one will load
    var xyz = x + y1 + z; //url('get from y1') //ninja technique for potato coder:D
    document.body.style.backgroundImage = xyz;
    }, 9300);
}

// pressed enter key cam field
var cam_ip = document.getElementById("cam-ip");
cam_ip.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("camipBtn").click();
    }
});
//-------------------------- GETTING CAM IP --------------------------------------

//------------------------- GETTING ENGIN IP -------------------------------------
// pressed engine input field 
function engineipClicked() {
    document.getElementById("engineipBtn").style.backgroundColor = "red";
}

// pressed engine icon 
function getengineIp() {
    document.getElementById("engineipBtn").style.backgroundColor = "#ffd607";
    document.getElementById("engine-ip").blur();
}

// pressed enter key engine field
var engine_ip = document.getElementById("engine-ip");
engine_ip.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("engineipBtn").click();
    }
});
//------------------------- GETTING ENGIN IP -------------------------------------

//--------------------- START TOOGLE FULL SCREEN ---------------------------------
function toggleScreen() {
    var x = document.getElementById("changeIcon");
    if (x.className === "fas fa-expand-arrows-alt") {
      x.className = "fas fa-compress-arrows-alt";
      openFullscreen();
    } else {
      x.className = "fas fa-expand-arrows-alt";
      closeFullscreen();
    }
  }
  var elem = document.documentElement;

  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  }
//---------------------- END TOOGLE FULL SCREEN ----------------------------------

// ----------------------- START KEY LISTENER ------------------------------------ 
var cmd, keys = [];
window.addEventListener("keydown",
    function (e) {
        // keyDown not work in ipInput Field 
        if (event.target.matches('[type="url"]')) {
            return;
          }
        // -----------------------------------------
        keys[e.keyCode] = e.keyCode;
        var keysArray = getNumberArray(keys);
        cmd = keysArray;
        controller();
    },
    false);

window.addEventListener('keyup',
    function (e) {
        // keyUp not work in ipInput Field  
        if (event.target.matches('[type="url"]')) {
            return;
          }
        // -----------------------------------------
        keys[e.keyCode] = false;
        cmd = "STOP" + getNumberArray(keys);
        controller();
    },
    false);

function getNumberArray(arr) {
    var newArr = new Array();
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}
// ----------------------- END KEY LISTENER ------------------------------------ 

// ----------------------- START CONTROLLER ------------------------------------ 
function controller() {
    // view command
    // console.log(cmd);

    // getting engine-ip
    var engine_val = document.getElementById("engine-ip").value;


    // getting cmd(to string) as command   
    const command = cmd.toString();

    // _____________FORWARD____________
    // --------ArrowUp / KeyW---------
    if (command == "38" || command == "STOP38" || command == "87" || command == "STOP87") {

        // action 
        document.getElementById("cmd-ip").href = engine_val + "/f";
        document.getElementById("cmd-ip").click();
    }

    // ____________BACKWARD____________
    // ------ArrowDown / KeyS---------
    if (command == "40" || command == "STOP40" || command == "83" || command == "STOP83") {

        // action 
        document.getElementById("cmd-ip").href = engine_val + "/b";
        document.getElementById("cmd-ip").click();
    }

    // ___________WHEEL-LEFT___________
    // ------ArrowLeft / KeyA---------
    if (command == "37" || command == "STOP37" || command == "65" || command == "STOP65") {
        document.getElementById("leftIndicator").style.opacity = "1.0";

        // action 
        document.getElementById("cmd-ip").href = engine_val + "/left";
        document.getElementById("cmd-ip").click();
    }

    // ___________WHEEL-RIGHT__________
    // -----ArrowRight / KeyD---------
    if (command == "39" || command == "STOP39" || command == "68" || command == "STOP68") {
        document.getElementById("rightIndicator").style.opacity = "1.0";

        // action 
        document.getElementById("cmd-ip").href = engine_val + "/right";
        document.getElementById("cmd-ip").click();
    }

    // ___________FORWARD-LEFT_________
    // --Arrow[Up + Left] / Key[W + A]--
    if (command == "37,38" || command == "65,87") {
        document.getElementById("leftIndicator").style.opacity = "1.0";

        // action 
        document.getElementById("cmd-ip").href = engine_val + "/l";
        document.getElementById("cmd-ip").click();
    }

    // ___________FORWARD-RIGHT________
    // --Arrow[Up + Right] / Key[W + D]--
    if (command == "38,39" || command == "68,87") {
        document.getElementById("rightIndicator").style.opacity = "1.0";

        // action 
        document.getElementById("cmd-ip").href = engine_val + "/r";
        document.getElementById("cmd-ip").click();
    }

    // __________BACKWARD-LEFT_________
    // --Arrow[Down + Left] / Key[S + A]--
    if (command == "37,40" || command == "65,83") {

        // action 
        document.getElementById("cmd-ip").href = engine_val + "/bl";
        document.getElementById("cmd-ip").click();
    }

    // __________BACKWARD-RIGHT________
    // --Arrow[Down + Right] / Key[S + D]--
    if (command == "39,40" || command == "68,83") {

        // action 
        document.getElementById("cmd-ip").href = engine_val + "/br";
        document.getElementById("cmd-ip").click();
    }

    // ______________STOP______________
    // -----------All KeyUP---------
    if (command == "STOP") {
        // action
        document.getElementById("cmd-ip").href = engine_val + "/s";
        document.getElementById("cmd-ip").click();
    }

    // __________EMERGENCY-BRAKE________
    // --------------SpaceBar----------
    if (command == "32") {
        document.getElementById("brake").play();

        document.getElementById("leftIndicator").style.color = "#DC3545"
        document.getElementById("rightIndicator").style.color = "#DC3545"
        document.getElementById("leftIndicator").style.opacity = "1.0";
        document.getElementById("rightIndicator").style.opacity = "1.0";

        // action
        document.getElementById("cmd-ip").href = engine_val + "/s";
        document.getElementById("cmd-ip").click();
    }

    // ______________H-O-R-N____________
    // ---------------KeyH-------------
    if (command == "72") {
        document.getElementById("carHorn").play();

        // action 
        document.getElementById("cmd-ip").href = engine_val + "/ho";
        document.getElementById("cmd-ip").click();
    }
}
// ----------------------- END CONTROLLER ------------------------------------ 

//------------------------- START KEY UP -------------------------------------
window.addEventListener("keyup", function (event) {
    // ___________WHEEL-RIGHT__________
    // -----ArrowRight / KeyD---------
    if (event.code == "ArrowLeft" || event.code == "KeyA") {
        document.getElementById("leftIndicator").style.opacity = "0.2";
    }

    // __________BACKWARD-RIGHT________
    // --Arrow[Down + Right] / Key[S + D]--
    if (event.code == "ArrowRight" || event.code == "KeyD") {
        document.getElementById("rightIndicator").style.opacity = "0.2";
    }

    // ______________HORN-OFF____________
    // ---------------KeyH-------------
    if (event.code == "KeyH") {
        document.getElementById("carHorn").pause();
        carHorn.currentTime = 0;

        // action link
        document.getElementById("cmd-ip").href = document.getElementById("engine-ip").value + "/hf";
        document.getElementById("cmd-ip").click();
    }

    // ______________SPACEBAR____________
    if (event.code == "Space") {
        document.getElementById("brake").pause();
        brake.currentTime = 0;
        document.getElementById("leftIndicator").style.color = "#ffd607"
        document.getElementById("rightIndicator").style.color = "#ffd607"
        document.getElementById("leftIndicator").style.opacity = "0.2";
        document.getElementById("rightIndicator").style.opacity = "0.2";

        // action
        document.getElementById("cmd-ip").href = document.getElementById("engine-ip").value + "/s";
        document.getElementById("cmd-ip").click();
    }
});
//----------------------- END KEY UP -------------------------------------