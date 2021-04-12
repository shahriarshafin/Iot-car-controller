// ----------------------- START KEY LISTENER ------------------------------------ 
var cmd, keys = [];
window.addEventListener("keydown",
    function (e) {
        keys[e.keyCode] = e.keyCode;
        var keysArray = getNumberArray(keys);
        cmd = keysArray;
        controller();
    },
    false);

window.addEventListener('keyup',
    function (e) {

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

    // getting cmd(to string) as command   
    const command = cmd.toString();

    // _____________FORWARD____________
    // --------ArrowUp / KeyW---------
    if (command == "38" || command == "STOP38" || command == "87" || command == "STOP87") {

        // action 
        document.getElementById("cmd-ip").href = "http://192.168.0.105/f";
        document.getElementById("cmd-ip").click();
    }
    // ____________BACKWARD____________
    // ------ArrowDown / KeyS---------
    if (command == "40" || command == "STOP40" || command == "83" || command == "STOP83") {

        // action 
        document.getElementById("cmd-ip").href = "http://192.168.0.105/b";
        document.getElementById("cmd-ip").click();
    }
    // ___________WHEEL-LEFT___________
    // ------ArrowLeft / KeyA---------
    if (command == "37" || command == "STOP37" || command == "65" || command == "STOP65") {
        document.getElementById("leftIndicator").style.opacity = "1.0";

        // action 
        document.getElementById("cmd-ip").href = "http://192.168.0.105/left";
        document.getElementById("cmd-ip").click();
    }
    // ___________WHEEL-RIGHT__________
    // -----ArrowRight / KeyD---------
    if (command == "39" || command == "STOP39" || command == "68" || command == "STOP68") {
        document.getElementById("rightIndicator").style.opacity = "1.0";

        // action 
        document.getElementById("cmd-ip").href = "http://192.168.0.105/right";
        document.getElementById("cmd-ip").click();
    }
    // ___________FORWARD-LEFT_________
    // --Arrow[Up + Left] / Key[W + A]--
    if (command == "37,38" || command == "65,87") {
        document.getElementById("leftIndicator").style.opacity = "1.0";

        // action 
        document.getElementById("cmd-ip").href = "http://192.168.0.105/l";
        document.getElementById("cmd-ip").click();
    }
    // ___________FORWARD-RIGHT________
    // --Arrow[Up + Right] / Key[W + D]--
    if (command == "38,39" || command == "68,87") {
        document.getElementById("rightIndicator").style.opacity = "1.0";

        // action 
        document.getElementById("cmd-ip").href = "http://192.168.0.105/r";
        document.getElementById("cmd-ip").click();
    }
    // __________BACKWARD-LEFT_________
    // --Arrow[Down + Left] / Key[S + A]--
    if (command == "37,40" || command == "65,83") {

        // action 
        document.getElementById("cmd-ip").href = "http://192.168.0.105/bl";
        document.getElementById("cmd-ip").click();
    }
    // __________BACKWARD-RIGHT________
    // --Arrow[Down + Right] / Key[S + D]--
    if (command == "39,40" || command == "68,83") {

        // action 
        document.getElementById("cmd-ip").href = "http://192.168.0.105/br";
        document.getElementById("cmd-ip").click();
    }
    // ______________STOP______________
    // -----------All KeyUP---------
    if (command == "STOP") {
        // action
        document.getElementById("cmd-ip").href = "http://192.168.0.105/s";
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
        document.getElementById("cmd-ip").href = "http://192.168.0.105/s";
        document.getElementById("cmd-ip").click();
    }
    // ______________H-O-R-N____________
    // ---------------KeyH-------------
    if (command == "72") {
        document.getElementById("carHorn").play();

        // action 
        // document.getElementById("cmd-ip").href = "http://192.168.0.105/hornON";
        // document.getElementById("cmd-ip").click();
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
        //   document.getElementById("cmdip").href = document.getElementById("ip_engine").value + "/hf";
        //   document.getElementById("cmdip").click();
    }
    // ______________SPACEBAR____________
    if (event.code == "Space") {
        document.getElementById("brake").pause();
        brake.currentTime = 0;
        document.getElementById("leftIndicator").style.color = "#ffd607"
        document.getElementById("rightIndicator").style.color = "#ffd607"
        document.getElementById("leftIndicator").style.opacity = "0.2";
        document.getElementById("rightIndicator").style.opacity = "0.2";
    }
});
//----------------------- END KEY UP -------------------------------------