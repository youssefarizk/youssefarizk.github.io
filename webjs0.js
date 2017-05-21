// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var picURL;

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    mute: 'true',
    events: {
      'onReady': onPlayerReady
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

function showTime(){
  alert(player.getCurrentTime());
}


function sayHello(){
  alert("Hello World")
}
var all={};
var dict = [];
var user=[];

function usern(a){
  user.push({
    username:a.value
  });
  str1 = JSON.stringify(user, null, 4);
  console.log(str1); // Logs output to dev tools console.
  alert(str1); // Displays output using window.alert()
};

function write_rate(valued) {
  dict.push({
      rate:valued.value,
      time: player.getCurrentTime(),
      url: picURL
  });
    str = JSON.stringify(dict, null, 4);
    str1 = JSON.stringify(user, null, 4);
    console.log(str1); // Logs output to dev tools console.
    alert(str1); // Displays output using window.alert()
};

function out(){
all = {
  user,
  dict
};
str = JSON.stringify(all, null, 4);
  console.log(all); // Logs output to dev tools console.
  alert(all); // Displays output using window.alert()
};

/* GET JSON FROM THE WEB, STORE IT TO A VARIABLE AND PASS IT TO HTML

var btn = document.getElementById("btn")
btn.addEventListener("click", function() {

}
)

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://...');
ourRequest.onload=function(){
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};

ourRequest.send();

*/

(function() {
  // The width and height of the captured photo. We will set the
  // width to the value defined here, but the height will be
  // calculated based on the aspect ratio of the input stream.

  var width = 320;    // We will scale the photo width to this
  var height = 0;     // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  var streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.

  var video = null;
  var canvas = null;
  var photo = null;
  var startbutton = null;

  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');
    var objbutton1 = document.getElementById('objButton1');
    var objbutton2 = document.getElementById('objButton2');
    var objbutton3 = document.getElementById('objButton3');
    var objbutton4 = document.getElementById('objButton4');
    var objbutton5 = document.getElementById('objButton5');
    var downloadButton = document.getElementById('download');

    function download(){
      var dt = canvas.toDataURL('image/jpeg');
      this.href = dt;
    }


    navigator.getMedia = ( navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

    navigator.getMedia(
      {
        video: true,
        audio: false
      },
      function(stream) {
        if (navigator.mozGetUserMedia) {
          video.mozSrcObject = stream;
        } else {
          var vendorURL = window.URL || window.webkitURL;
          video.src = vendorURL.createObjectURL(stream);
        }
        video.play();
      },
      function(err) {
        console.log("An error occured! " + err);
      }
    );

    video.addEventListener('canplay', function(ev){
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth/width);

        // Firefox currently has a bug where the height can't be read from
        // the video, so we will make assumptions if this happens.

        if (isNaN(height)) {
          height = width / (4/3);
        }

        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        streaming = true;
      }
    }, false);

    startbutton.addEventListener('click', function(ev){
      takepicture();
      ev.preventDefault();
    }, false);

    objbutton1.addEventListener('click', function(ev){
      write_rate(objbutton1);
      takepicture();
      ev.preventDefault();
    }, false);

    objbutton2.addEventListener('click', function(ev){
      write_rate(objbutton2);
      takepicture();
      ev.preventDefault();
    }, false);

    objbutton3.addEventListener('click', function(ev){
      write_rate(objbutton3);
      takepicture();
      ev.preventDefault();
    }, false);

    objbutton4.addEventListener('click', function(ev){
      write_rate(objbutton4);
      takepicture();
      ev.preventDefault();
    }, false);

    objbutton5.addEventListener('click', function(ev){
      write_rate(objbutton5);
      takepicture();
      ev.preventDefault();
    }, false);

    downloadButton.addEventListener('click',download,false);

    clearphoto();
  }



  // Fill the photo with an indication that none has been
  // captured.
  function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
  }


  function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    picURL = data;
    photo.setAttribute('src', data);
  }

  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function takepicture() {
    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      var data = canvas.toDataURL('image/png');
      photo.setAttribute('src', data);
    } else {
      clearphoto();
    }

  }


  // Set up our event listener to run the startup process
  // once loading is complete.
  window.addEventListener('load', startup, false);
})();
