
(function() {
  // The width and height of the captured photo. We will set the
  // width to the value defined here, but the height will be
  // calculated based on the aspect ratio of the input stream.

  var width1 = 320;    // We will scale the photo width to this
  var height1 = 0;     // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  var streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.

  var video = null;
  var canvas = null;
  var photo = null;


  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');

  var objbutton0 = document.getElementById('objButton0');
    var objbutton1 = document.getElementById('objButton1');
    var objbutton2 = document.getElementById('objButton2');
    var objbutton3 = document.getElementById('objButton3');
    var objbutton4 = document.getElementById('objButton4');
    var objbutton5 = document.getElementById('objButton5');
    var video1 = document.getElementById('video1');
    var video2 = document.getElementById('video2');
    var video3 = document.getElementById('video3');
    var video4 = document.getElementById('video4');
    var video5 = document.getElementById('video5');


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
        height1 = video.videoHeight / (video.videoWidth/width1);

        // Firefox currently has a bug where the height can't be read from
        // the video, so we will make assumptions if this happens.

        if (isNaN(height1)) {
          height1 = width1 / (4/3);
        }

        video.setAttribute('width', width1);
        video.setAttribute('height', height1);
        canvas.setAttribute('width', width1);
        canvas.setAttribute('height', height1);
        streaming = true;
      }
    }, false);

      video1.addEventListener('click', function(ev){
        takepicture();
        write_rate(video1);
        ev.preventDefault();
        g2 = new Dygraph(
        document.getElementById("graphdiv2"),
        "Time, Engagement Level\n" +
        dataAcc        // options
      );
    }, false);
    video2.addEventListener('click', function(ev){
      takepicture();
      write_rate(video2);
      ev.preventDefault();
      g2 = new Dygraph(
      document.getElementById("graphdiv2"),
      "Time, Engagement Level\n" +
      dataAcc        // options
    );
  }, false);
  video3.addEventListener('click', function(ev){
    takepicture();
    write_rate(video13);
    ev.preventDefault();
    g2 = new Dygraph(
    document.getElementById("graphdiv2"),
    "Time, Engagement Level\n" +
    dataAcc        // options
  );
}, false);
video4.addEventListener('click', function(ev){
  takepicture();
  write_rate(video4);
  ev.preventDefault();
  g2 = new Dygraph(
  document.getElementById("graphdiv2"),
  "Time, Engagement Level\n" +
  dataAcc        // options
);
}, false);
video5.addEventListener('click', function(ev){
  takepicture();
  write_rate(video5);
  ev.preventDefault();
  g2 = new Dygraph(
  document.getElementById("graphdiv2"),
  "Time, Engagement Level\n" +
  dataAcc        // options
);
}, false);

      objbutton1.addEventListener('click', function(ev){
      write_rate(objbutton1);
      takepicture();
      ev.preventDefault();
      g2 = new Dygraph(
        document.getElementById("graphdiv2"),
        "Time, Engagement Level\n" +
        dataAcc        // options
      );
    }, false);

    objbutton2.addEventListener('click', function(ev){
      write_rate(objbutton2);
      takepicture();
      ev.preventDefault();
      g2 = new Dygraph(
        document.getElementById("graphdiv2"),
        "Time, Engagement Level\n" +
        dataAcc        // options
      );
    }, false);

    objbutton3.addEventListener('click', function(ev){
      write_rate(objbutton3);
      takepicture();
      ev.preventDefault();
      g2 = new Dygraph(
        document.getElementById("graphdiv2"),
        "Time, Engagement Level\n" +
        dataAcc        // options
      );
    }, false);

    objbutton4.addEventListener('click', function(ev){
      write_rate(objbutton4);
      takepicture();
      ev.preventDefault();
      g2 = new Dygraph(
        document.getElementById("graphdiv2"),
        "Time, Engagement Level\n" +
        dataAcc        // options
      );
    }, false);

    objbutton5.addEventListener('click', function(ev){
      write_rate(objbutton5);
      takepicture();
      ev.preventDefault();
      g2 = new Dygraph(
        document.getElementById("graphdiv2"),
        "Time, Engagement Level\n" +
        dataAcc        // options
      );
    }, false);

    clearphoto();
  }



  function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }

  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function takepicture() {
    var context = canvas.getContext('2d');
    if (width1 && height1) {
      canvas.width = width1;
      canvas.height = height1;
      context.drawImage(video, 0, 0, width1, height1);

      var data = canvas.toDataURL('image/png');
      picURL = data;
      photo.setAttribute('src', data);
    } else {
      clearphoto();
    }

  }


  // Set up our event listener to run the startup process
  // once loading is complete.
  window.addEventListener('load', startup, false);
})();
