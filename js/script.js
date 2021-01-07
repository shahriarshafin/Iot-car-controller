//copyright https://github.com/ShahriarShafin
//19-Oct-2020

//---------------------- NOTIFIER -------------------
function tutorial() {
  alert(
    "Controlling Guide :\n  1. Insert IP of Cam, IP of Engine & Press CONNECT.\n  2. Control - W,A,S,D or Arrow keys\n  3. Change Gear - Shift, L\n  4. Horn - H\n  5. Brake - Space\n ' Please reload this page If you encounter any Problems '"
  );
}
//---------------------------------------------------

//--------------------- IP OF CAM -------------------
function getIp() {
  var x = "url('";
  var y = document.getElementById("ip_cam").value;
  var z = "'), url(assets/Camerror.gif)"; //for invalid input the second one will load
  var xyz = x + y + z; //url('get from y') //ninja technique:D
  document.body.style.backgroundImage = xyz;
}
//---------------------------------------------------

// BUTTONS KEYCODE
var arrowUp = 38;
var arrowDown = 40;
var arrowRight = 39;
var arrowLeft = 37;
var keyW = 87;
var keyS = 83;
var keyA = 65;
var keyD = 68;
var keyH = 72;
var keySpace = 32;
var keyEnter = 13;
//---------------------------------------------------

//--------------------- KEY DOWN --------------------
window.addEventListener("keydown", function (event) {
  //SOUND_HORN
  if (event.keyCode === keyH) {
    document.getElementById("sound").play();
  }

  //____________________ S T O P ____________________
  if (event.keyCode === keySpace) {
    document.getElementById("brake").play();
    // action link
    // location.href = "https://bot-car-ip/STOP";
  }

  //_________________ F O R W A R D _________________
  if (event.keyCode === arrowUp) {
    document.getElementById("box").style.backgroundImage = "url('assets/up_on.png')";

    // action link
    // location.href = "https://bot-car-ip/FORWARD";
  } else if (event.keyCode === keyW) {
    //W
    document.getElementById("box").style.backgroundImage = "url('assets/up_on.png')";

    // action link
    // location.href = "https://bot-car-ip/FORWARD";
  }

  //________________ B A C K W A R D ________________
  if (event.keyCode === arrowDown) {
    document.getElementById("box").style.backgroundImage = "url('assets/up_on.png')";
    document.getElementById("box").style.transform = "rotate(180deg)";

    // action link
    // location.href = "https://bot-car-ip/BACKWARD";
  } else if (event.keyCode === keyS) {
    document.getElementById("box").style.backgroundImage = "url('assets/up_on.png')";
    document.getElementById("box").style.transform = "rotate(180deg)";

    // action link
    // location.href = "https://bot-car-ip/BACKWARD";
  }

  // ____________________ L E F T ___________________
  if (event.keyCode === arrowLeft) {
    document.getElementById("left").style.opacity = "1.0";

    // action link
    // location.href = "https://bot-car-ip/LEFT;
  } else if (event.keyCode === keyA) {
    document.getElementById("left").style.opacity = "1.0";

    // action link
    // location.href = "https://bot-car-ip/LEFT";
  }

  //____________________ R I G H T __________________
  if (event.keyCode === arrowRight) {
    document.getElementById("right").style.opacity = "1.0";

    // action link
    // location.href = "https://bot-car-ip/RIGHT";
  } else if (event.keyCode === keyD) {
    document.getElementById("right").style.opacity = "1.0";

    // action link
    // location.href = "https://bot-car-ip/RIGHT";
  }
});
//----------------------------------------------------

//------------------------ KEY UP --------------------
window.addEventListener("keyup", function (event) {
  //CONNECT_BUTTON_PRESSED
  if (event.keyCode === keyEnter) {
    event.preventDefault();
    document.getElementById("connectBtn").click();
  }

  //HORN_OFF
  if (event.keyCode === keyH) {
    document.getElementById("sound").pause();
    sound.currentTime = 0;
  }
  
  //BRAKE
  if (event.keyCode === keySpace) {
    document.getElementById("brake").pause();
    brake.currentTime = 0;
  }

  //_________________ F O R W A R D _________________
  if (event.keyCode === arrowUp) {
    document.getElementById("box").style.backgroundImage = "url('')";

    // action link
    // location.href = "https://bot-car-ip/STOP";
  } else if (event.keyCode === keyW) {
    document.getElementById("box").style.backgroundImage = "url('')";

    // action link
    // location.href = "https://bot-car-ip/STOP";
  }

  //________________ B A C K W A R D ________________
  if (event.keyCode === arrowDown) {
    document.getElementById("box").style.backgroundImage = "url('')";
    document.getElementById("box").style.transform = "rotate(0deg)";

    // action link
    // location.href = "https://bot-car-ip/STOP";
  } else if (event.keyCode === keyS) {
    document.getElementById("box").style.backgroundImage = "url('')";
    document.getElementById("box").style.transform = "rotate(0deg)";

    // action link
    // location.href = "https://bot-car-ip/STOP";
  }

  // ____________________ L E F T ___________________
  if (event.keyCode === arrowLeft) {
    document.getElementById("left").style.opacity = "0.2";

    // action link
    // location.href = "https://bot-car-ip/STOP";
  } else if (event.keyCode === keyA) {
    document.getElementById("left").style.opacity = "0.2";

    // action link
    // location.href = "https://bot-car-ip/STOP";
  }

  //___________________ R I G H T ___________________
  if (event.keyCode === arrowRight) {
    document.getElementById("right").style.opacity = "0.2";

    // action link
    // location.href = "https://bot-car-ip/STOP";
  } else if (event.keyCode === keyD) {
    document.getElementById("right").style.opacity = "0.2";

    // action link
    // location.href = "https://bot-car-ip/STOP";
  }
});
//-------------------------------------------------------------------------

//--------------------------START SPEED METER------------------------------
//--------------- https://codepen.io/Chmood/pen/MaBZdM --------------------

let motorSamplePath = "../audios/gear.ogg"; // https://freesound.org/data/previews/127/127980_2335231-lq.ogg

// METER
let Meter = function Meter($elm, config) {
  // DOM
  let $needle, $value;

  // Others
  let steps = (config.valueMax - config.valueMin) / config.valueStep,
    angleStep = (config.angleMax - config.angleMin) / steps;

  let margin = 10; // in %
  let angle = 0; // in degrees

  let value2angle = function (value) {
    let angle =
      (value / (config.valueMax - config.valueMin)) *
        (config.angleMax - config.angleMin) +
      config.angleMin;

    return angle;
  };

  this.setValue = function (v) {
    $needle.style.transform =
      "translate3d(-50%, 0, 0) rotate(" + Math.round(value2angle(v)) + "deg)";
    $value.innerHTML = config.needleFormat(v);
  };

  let switchLabel = function (e) {
    e.target.closest(".meter").classList.toggle("meter--big-label");
  };

  let makeElement = function (parent, className, innerHtml, style) {
    let e = document.createElement("div");
    e.className = className;

    if (innerHtml) {
      e.innerHTML = innerHtml;
    }

    if (style) {
      for (var prop in style) {
        e.style[prop] = style[prop];
      }
    }

    parent.appendChild(e);

    return e;
  };

  // Label unit
  makeElement($elm, "label label-unit", config.valueUnit);

  for (let n = 0; n < steps + 1; n++) {
    let value = config.valueMin + n * config.valueStep;
    angle = config.angleMin + n * angleStep;

    // Graduation numbers

    // Red zone
    let redzoneClass = "";
    if (value > config.valueRed) {
      redzoneClass = " redzone";
    }

    makeElement(
      $elm,
      "grad grad--" + n + redzoneClass,
      config.labelFormat(value),
      {
        left: 50 - (50 - margin) * Math.sin(angle * (Math.PI / 180)) + "%",
        top: 50 + (50 - margin) * Math.cos(angle * (Math.PI / 180)) + "%",
      }
    );

    // Tick
    makeElement($elm, "grad-tick grad-tick--" + n + redzoneClass, "", {
      left: 50 - 50 * Math.sin(angle * (Math.PI / 180)) + "%",
      top: 50 + 50 * Math.cos(angle * (Math.PI / 180)) + "%",
      transform: "translate3d(-50%, 0, 0) rotate(" + (angle + 180) + "deg)",
    });

    // Half ticks
    angle += angleStep / 2;

    if (angle < config.angleMax) {
      makeElement(
        $elm,
        "grad-tick grad-tick--half grad-tick--" + n + redzoneClass,
        "",
        {
          left: 50 - 50 * Math.sin(angle * (Math.PI / 180)) + "%",
          top: 50 + 50 * Math.cos(angle * (Math.PI / 180)) + "%",
          transform: "translate3d(-50%, 0, 0) rotate(" + (angle + 180) + "deg)",
        }
      );
    }

    // Quarter ticks
    angle += angleStep / 4;

    if (angle < config.angleMax) {
      makeElement(
        $elm,
        "grad-tick grad-tick--quarter grad-tick--" + n + redzoneClass,
        "",
        {
          left: 50 - 50 * Math.sin(angle * (Math.PI / 180)) + "%",
          top: 50 + 50 * Math.cos(angle * (Math.PI / 180)) + "%",
          transform: "translate3d(-50%, 0, 0) rotate(" + (angle + 180) + "deg)",
        }
      );
    }

    angle -= angleStep / 2;

    if (angle < config.angleMax) {
      makeElement(
        $elm,
        "grad-tick grad-tick--quarter grad-tick--" + n + redzoneClass,
        "",
        {
          left: 50 - 50 * Math.sin(angle * (Math.PI / 180)) + "%",
          top: 50 + 50 * Math.cos(angle * (Math.PI / 180)) + "%",
          transform: "translate3d(-50%, 0, 0) rotate(" + (angle + 180) + "deg)",
        }
      );
    }
  }

  // NEEDLE
  angle = value2angle(config.value);

  $needle = makeElement($elm, "needle", "", {
    transform: "translate3d(-50%, 0, 0) rotate(" + angle + "deg)",
  });

  let $axle = makeElement($elm, "needle-axle").addEventListener(
    "click",
    switchLabel
  );
  makeElement(
    $elm,
    "label label-value",
    "<div>" +
      config.labelFormat(config.value) +
      "</div>" +
      "<span>" +
      config.labelUnit +
      "</span>"
  ).addEventListener("click", switchLabel);

  $value = $elm.querySelector(".label-value div");
};

// DOM LOADED FIESTA
document.addEventListener("DOMContentLoaded", function () {
  let rpmMeter = new Meter(document.querySelector(".meter--rpm"), {
    value: 6.3,
    valueMin: 0,
    valueMax: 8000,
    valueStep: 1000,
    valueUnit: "<div>RPM</div><span>x1000</span>",
    angleMin: 30,
    angleMax: 330,
    labelUnit: "RPM",
    labelFormat: function (v) {
      return Math.round(v / 1000);
    },
    needleFormat: function (v) {
      return Math.round(v / 100) * 100;
    },
    valueRed: 6500,
  });

  let speedMeter = new Meter(document.querySelector(".meter--speed"), {
    value: 203,
    valueMin: 0,
    valueMax: 220,
    valueStep: 20,
    valueUnit: "<span>Speed</span><div>Km/h</div>",
    angleMin: 30,
    angleMax: 330,
    labelUnit: "Km/h",
    labelFormat: function (v) {
      return Math.round(v);
    },
    needleFormat: function (v) {
      return Math.round(v);
    },
  });

  let gearMeter = document.querySelector(".meter--gear div");

  // USER INPUTS
  document.onkeydown = keyDown;
  document.onkeyup = keyUp;

  function keyDown(e) {
    e = e || window.event;

    if (e.keyCode == "38") {
      // up arrow
      isAccelerating = true;
    }
    if (e.keyCode == 87) {
      // W key
      isAccelerating = true;
    } else if (e.keyCode == "32") {
      // spacebar
      isBraking = true;
    } else if (e.keyCode == "76") {
      // L key
    } else if (e.keyCode == "16") {
      // Shift key
    }
  }

  function keyUp(e) {
    e = e || window.event;

    if (e.keyCode == "38") {
      // up arrow
      isAccelerating = false;
    }
    if (e.keyCode == "87") {
      // W key
      isAccelerating = false;
    } else if (e.keyCode == "32") {
      // spacebar
      isBraking = false;
    } else if (e.keyCode == "76") {
      // L key
      gearDown();
    } else if (e.keyCode == "16") {
      // Shift key
      gearUp();
    }
  }

  function gearUp() {
    if (gear < gears.length - 1) {
      gear++;
      gearMeter.innerHTML = gear;
    }
  }

  function gearDown() {
    if (gear > 1) {
      gear--;
      gearMeter.innerHTML = gear;
    }
  }

  // VEHICLE CONFIG
  let mass = 1000,
    cx = 0.28,
    gears = [0, 0.4, 0.7, 1.0, 1.3, 1.5, 1.68],
    transmitionRatio = 0.17,
    transmitionLoss = 0.15,
    wheelDiameter = 0.5,
    brakeTorqueMax = 300,
    gear = 1,
    speed = 10, // in km/h
    overallRatio,
    wheelRpm,
    wheelTorque,
    brakeTorque,
    resistance,
    acceleration;

  // MOTOR CONFIG
  let rpmIdle = 1200,
    rpmMax = 8000,
    rpmRedzone = 6500,
    torqueMin = 20, // in m.kg
    torqueMax = 45, // in m.kg
    torque,
    rpm = 0,
    isAccelerating = false,
    isBraking = false;

  // Helper functions
  let torqueByRpm = function (rpm) {
    let torque = torqueMin + (rpm / rpmMax) * (torqueMax - torqueMin);
    return torque;
  };

  function kmh2ms(speed) {
    // Km/h to m/s
    return speed / 3.6;
  }

  // Physics 101
  /*
   * P = C w
   * P(hp) = C(m.kg) w(rpm) / 716
   *
   * F = m.a
   * Force(newton) = mass(kg) * acceleration (m/s)
   *
   * a = Cr / (r.m)
   * acceleration (m/s) = torqueWheel (m.kg) / (wheelRadius (m) * mass (kg))
   */

  let lastTime = new Date().getTime(),
    nowTime,
    delta;

  // MAIN LOOP
  (function loop() {
    window.requestAnimationFrame(loop);

    // Delta time
    nowTime = new Date().getTime();
    delta = (nowTime - lastTime) / 1000; // in seconds
    lastTime = nowTime;

    let oldSpeed = speed,
      oldRpm = rpm;

    // Torque
    if (isAccelerating && rpm < rpmMax) {
      // Gas!
      torque = torqueByRpm(rpm);
    } else {
      torque = -((rpm * rpm) / 1000000);
    }
    if (isBraking) {
      // Ooops...
      brakeTorque = brakeTorqueMax;
    } else {
      brakeTorque = 0;
    }

    overallRatio = transmitionRatio * gears[gear];
    wheelTorque = torque / overallRatio - brakeTorque;
    acceleration = (20 * wheelTorque) / ((wheelDiameter * mass) / 2);
    resistance = (0.5 * 1.2 * cx * kmh2ms(speed)) ^ 2;

    // Speed
    speed += (acceleration - resistance) * delta;

    if (speed < 0) {
      speed = 0;
    }

    wheelRpm = speed / (60 * ((Math.PI * wheelDiameter) / 1000));
    rpm =
      speed /
      (60 *
        transmitionRatio *
        gears[gear] *
        ((Math.PI * wheelDiameter) / 1000));

    // Idle
    if (rpm < rpmIdle) {
      rpm = oldRpm;
      speed = oldSpeed;
    }

    // Gear shifter
    if (rpm > rpmRedzone) {
      gearMeter.classList.add("redzone");
    } else {
      gearMeter.classList.remove("redzone");
    }

    // Update GUI
    speedMeter.setValue(speed);
    rpmMeter.setValue(rpm);

    // Update engine sound
    if (source) {
      source.playbackRate.value = rpm / 4000;
    }
    if (source2) {
      source2.playbackRate.value = speed / 500;
    }
  })();

  ///////////////////////////////////////////////
  // WEBAUDIO
  // Courtesy of https://mdn.github.io/decode-audio-data/
  // define variables
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var source, source2, gainNode;
  var songLength;
  var loader = document.querySelector(".loader");
  var btnVolume = document.querySelector(".btn-volume");

  // use XHR to load an audio track, and
  // decodeAudioData to decode it and stick it in a buffer.
  // Then we put the buffer into the source

  function getData() {
    source = audioCtx.createBufferSource();
    source2 = audioCtx.createBufferSource();
    let request = new XMLHttpRequest();

    request.open("GET", motorSamplePath, true);
    request.responseType = "arraybuffer";
    request.onload = function () {
      var audioData = request.response;

      audioCtx.decodeAudioData(
        audioData,
        function (buffer) {
          let myBuffer = buffer; // local buffer ?
          let myBuffer2 = buffer;

          //songLength = buffer.duration; // in seconds
          source.buffer = myBuffer;
          source2.buffer = myBuffer2;
          source.loop = true;
          source2.loop = true;

          // Hacky granular engine sound!
          source.loopStart = 0.1; // Tune this
          source.loopEnd = 0.1735; // Tune this
          source2.loopStart = 0.605;
          source2.loopEnd = 0.65;
          source.playbackRate.value = 1;
          source2.playbackRate.value = 1;

          // Create a gain node.
          gainNode = audioCtx.createGain();

          // Connect the source to the gain node.
          source.connect(gainNode);
          source2.connect(gainNode);

          // Connect the gain node to the destination.
          gainNode.connect(audioCtx.destination);

          // Remove loader
          loader.classList.remove("active");
        },

        function (e) {
          "Error with decoding audio data" + e.err;
        }
      );
    };
    request.send();
  }

  // wire up buttons
  btnVolume.onclick = function () {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      gainNode.gain.value = 1;
    } else {
      gainNode.gain.value = 0;
    }
  };

  // Load the sample
  getData();

  // Launch loop playing
  source.start(0);
  source2.start(0);
});
//-------------------------- END SPEED METER------------------------------
