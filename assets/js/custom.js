
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

        // action 
        document.getElementById("cmd-ip").href = "http://192.168.0.105/left";
        document.getElementById("cmd-ip").click();
    }
    // ___________WHEEL-RIGHT__________
    // -----ArrowRight / KeyD---------
    if (command == "39" || command == "STOP39" || command == "68" || command == "STOP68") {

        // action 
        document.getElementById("cmd-ip").href = "http://192.168.0.105/right";
        document.getElementById("cmd-ip").click();
    }
    // ___________FORWARD-LEFT_________
    // --Arrow[Up + Left] / Key[W + A]--
    if (command == "37,38" || command == "65,87") {

        // action 
        document.getElementById("cmd-ip").href = "http://192.168.0.105/l";
        document.getElementById("cmd-ip").click();
    }
    // ___________FORWARD-RIGHT________
    // --Arrow[Up + Right] / Key[W + D]--
    if (command == "38,39" || command == "68,87") {

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
    // -----------Any KewDown---------
    if (command == "STOP") {

        // action 
        document.getElementById("cmd-ip").href = "http://192.168.0.105/s";
        document.getElementById("cmd-ip").click();
    }
    // __________EMERGENCY-BRAKE________
    // --------------SpaceBar----------
    if (command == "32") {

        // action
        document.getElementById("cmd-ip").href = "http://192.168.0.105/s";
        document.getElementById("cmd-ip").click();
    }
    // ______________H-O-R-N____________
    // ---------------KeyH-------------
    if (command == "72") {

        // action 
        document.getElementById("cmd-ip").href = "http://192.168.0.105/hornON";
        document.getElementById("cmd-ip").click();
    }
}
// ----------------------- END CONTROLLER ------------------------------------ 