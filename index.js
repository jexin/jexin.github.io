var scroll = new SmoothScroll('a[href*="#bg"]');

var pressed = false;
var ball = document.getElementById("ball");
var game = document.getElementById("game");
var control = document.getElementById("control");
var unit = document.querySelector(".col-3");
var hoop = document.querySelectorAll(".hoop");

$(window).bind("load", function() {
	control.style.height = control.offsetHeight + 'px';
});

window.addEventListener("keyup", function (event) {
	pressed = false;
});

function leftKey() {
	if (parseInt(ball.style.left) > 0) {
		ball.style.left = parseInt(ball.style.left) - unit.offsetWidth + 'px';
	}
}
function rightKey() {
	if (parseInt(ball.style.left) < unit.offsetWidth*3) {
		ball.style.left = parseInt(ball.style.left) + unit.offsetWidth + 'px';
	}
}
function enterKey() {
	if (parseInt(ball.style.left) === 0) {
		shootUp();
		setTimeout(function() {
			about();
	     }, 1350);
	} else if (parseInt(ball.style.left) === unit.offsetWidth) {
		shootUp();
		setTimeout(function() {
			experience();
	     }, 1350);
	} else if (parseInt(ball.style.left) === unit.offsetWidth*2) {
		shootUp();
		setTimeout(function() {
			projects();
	     }, 1350);
	} else {
		shootUp();
		setTimeout(function() {
			skills();
	     }, 1350);
	}
};
function shootUp() {
  ball.style.zIndex = 1;
  for(var i = 0;i < hoop.length;i++){
     hoop[i].style.zIndex = 0;
  }
  var pos = 0;
  var ratio = 60;
  var id = setInterval(frame, 8);
  function frame() {
    if (pos < -game.offsetHeight/0.9) {
      clearInterval(id);
      shootDown();
    } else {
      pos-=8;
      ball.style.top = pos + 'px';
      ratio-=0.3;
	  ball.style.width = ratio + '%';
	  ball.style.height = 'auto';
    }
  }
}
function shootDown() {
  ball.style.zIndex = 0;
  for(var i = 0;i < hoop.length;i++){
     hoop[i].style.zIndex = 1;
  }
  var pos = -600;
  var id = setInterval(frame, 8);
  function frame() {
    if (pos > 0) {
      clearInterval(id);
      ball.style.top = "0px";
      ball.style.width = '60%';
	  ball.style.height = 'auto';
    } else {
      pos+=7;
      ball.style.top = pos + 'px';
    }
  }
}
function about() {
	document.getElementById("about").click();
}
function experience() {
	document.getElementById("experience").click();
}
function projects() {
	document.getElementById("projects").click();
}
function skills() {
	document.getElementById("skills").click();
}
function moveSelection(event) {
	if (!pressed) {
		switch (event.keyCode) {
		    case 37:
		    leftKey();
		    pressed = true;
		    break;
		    case 39:
		    rightKey();
		    pressed = true;
		    break;
		    case 13:
		    enterKey();
		    break;
		}
	}
};
function docReady() {
  window.addEventListener("keydown", moveSelection);
}
