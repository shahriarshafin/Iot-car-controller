//copyright https://github.com/ShahriarShafin
//19-Oct-2020

//---------------------- NOTIFIER -------------------
function tutorial() {
    if(window.innerHeight > window.innerWidth){
      alert("Please rotate screen to landscape mode and reload !");
    }
   else{
     alert("Controlling Guide :\n  1. Insert IP of Cam, IP of Engine & Press CONNECT.\n  2. Control - W,A,S,D or Arrow keys\n  3. Change Gear - Shift, L\n  4. Horn - H\n  5. Brake - Space\n ' Please reload this page If you encounter any Problems '");
       }
  }
  //---------------------------------------------------
  
  //------------------- Getting Cam IP -----------------
  function getIp() {
    var x = "url('";
    var y = document.getElementById("ip_cam").value;
    var z = "'), url(assets/Camerror.gif)"; //for invalid input the second one will load
    var xyz = x + y + z; //url('get from y') //ninja technique:D
    document.body.style.backgroundImage = xyz;
  }
  //---------------------------------------------------
  
  //--------------------- KEY DOWN --------------------
  window.addEventListener("keydown", function (event) {
    //SOUND_HORN
    if (event.code == 'KeyH') {
      document.getElementById("sound").play();
    }
  
    //____________________ S T O P ____________________
    if (event.code == 'Space') {
      document.getElementById("brake").play();
      document.getElementById("left").style.opacity = "1.0";
      document.getElementById("right").style.opacity = "1.0";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/stop";
      document.getElementById("cmdip").click();
    }
  
    //_________________ F O R W A R D _________________
    if (event.code == 'ArrowUp') {
      document.getElementById("box").style.backgroundImage = "url('assets/up_on.png')";
      // document.getElementById("box").style.backgroundSize = "60px 60% ";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/forward";
      document.getElementById("cmdip").click();
    } else if (event.code == 'KeyW') {
      //W
      document.getElementById("box").style.backgroundImage = "url('assets/up_on.png')";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/forward";
      document.getElementById("cmdip").click();
    }
  
    //________________ B A C K W A R D ________________
    if (event.code == 'ArrowDown') {
      document.getElementById("box").style.backgroundImage = "url('assets/up_on.png')";
      document.getElementById("box").style.transform = "rotate(180deg)";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/backward";
      document.getElementById("cmdip").click();
    } else if (event.code == 'KeyS') {
      document.getElementById("box").style.backgroundImage = "url('assets/up_on.png')";
      document.getElementById("box").style.transform = "rotate(180deg)";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/backward";
      document.getElementById("cmdip").click();
    }
  
    // ____________________ L E F T ___________________
    if (event.code == 'ArrowLeft') {
      document.getElementById("left").style.opacity = "1.0";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/left";
      document.getElementById("cmdip").click();
    } else if (event.code == 'KeyA') {
      document.getElementById("left").style.opacity = "1.0";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/left";
      document.getElementById("cmdip").click();
    }
  
    //____________________ R I G H T __________________
    if (event.code == 'ArrowRight') {
      document.getElementById("right").style.opacity = "1.0";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/right";
      document.getElementById("cmdip").click();
    } else if (event.code == 'KeyD') {
      document.getElementById("right").style.opacity = "1.0";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/right";
      document.getElementById("cmdip").click();
    }
  });
  //----------------------------------------------------
  
  //------------------------ KEY UP --------------------
  window.addEventListener("keyup", function (event) {
    //CONNECT_BUTTON_PRESSED
    if (event.code == 'Enter') {
      event.preventDefault();
      document.getElementById("connectBtn").click();
    }
  
    //HORN_OFF
    if (event.code == 'KeyH') {
      document.getElementById("sound").pause();
      sound.currentTime = 0;
    }
  
    //BRAKE
    if (event.code == 'Space') {
      document.getElementById("brake").pause();
      brake.currentTime = 0;
      document.getElementById("left").style.opacity = "0.2";
      document.getElementById("right").style.opacity = "0.2";
    }
  
    //_________________ F O R W A R D _________________
    if (event.code == 'ArrowUp') {
      document.getElementById("box").style.backgroundImage = "url('')";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/stop";
      document.getElementById("cmdip").click();
    } else if (event.code == 'KeyW') {
      document.getElementById("box").style.backgroundImage = "url('')";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/stop";
      document.getElementById("cmdip").click();
    }
  
    //________________ B A C K W A R D ________________
    if (event.code == 'ArrowDown') {
      document.getElementById("box").style.backgroundImage = "url('')";
      document.getElementById("box").style.transform = "rotate(0deg)";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/stop";
      document.getElementById("cmdip").click();
    } else if (event.code == 'KeyS') {
      document.getElementById("box").style.backgroundImage = "url('')";
      document.getElementById("box").style.transform = "rotate(0deg)";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/stop";
      document.getElementById("cmdip").click();
    }
  
    // ____________________ L E F T ___________________
    if (event.code == 'ArrowLeft') {
      document.getElementById("left").style.opacity = "0.2";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/stop";
      document.getElementById("cmdip").click();
    } else if (event.code == 'KeyA') {
      document.getElementById("left").style.opacity = "0.2";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/stop";
      document.getElementById("cmdip").click();
    }
  
    //___________________ R I G H T ___________________
    if (event.code == 'ArrowRight') {
      document.getElementById("right").style.opacity = "0.2";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/stop";
      document.getElementById("cmdip").click();
    } else if (event.code == 'KeyD') {
      document.getElementById("right").style.opacity = "0.2";
  
      // action link
      document.getElementById("cmdip").href = document.getElementById("ip_engine").value+"/stop";
      document.getElementById("cmdip").click();
    }
  });
  //-------------------------------------------------------------------------