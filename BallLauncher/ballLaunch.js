window.onload = pageReady;

function pageReady() {

  // LAUNCHER

  var c_launch_btn = document.querySelector("#btn_launch");
  var c_ball = document.querySelector("#ball");
  var c_launcher = document.querySelector("#launcher");

  c_launch_btn.onclick = launchBall;

  function launchBall() {
    c_ball.style.transform = "rotate(180deg)";
    c_ball.style.transformOrigin = "710px 10px";
    c_launcher.style.height = "10px";
    c_ball.style.opacity = "0";
  }


  //https://davidwalsh.name/css-animation-callback
  function whichTransitionEvent(){
      var t;
      var transitions = {
        'transition':'transitionend',
        'OTransition':'oTransitionEnd',
        'MozTransition':'transitionend',
        'WebkitTransition':'webkitTransitionEnd'
      }

      for(t in transitions){
          if( c_ball.style[t] !== undefined ){
              return transitions[t];
          }
      }
  }

  var transitionEvent = whichTransitionEvent();
  transitionEvent && c_ball.addEventListener(transitionEvent, function() {
    c_ball.style.opacity = "1";
    c_ball.style.position = "absolute";
    c_ball.style.transform = "translate(0px, 0px)";
    c_ball.style.transition = "opacity 2s ease-in";
    c_launcher.style.height = "0px";

});
}
