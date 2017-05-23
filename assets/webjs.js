var dataAcc = "";

// 2. This code loads the IFrame Player API code asynchronously.
var testing = document.getElementById('test');
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
    videoId: '',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function clickme(){
  testing.innerHTML = picURL;
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

function showTime(){
  alert(player.getCurrentTime());
}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

function stopVideo() {
  player.stopVideo();
}

function sayHello(){
  alert("Hello World")
}

var testing = document.getElementById('test');

var dict = [];

var user=document.getElementById('field1');
function write_rate(valued) {
  dict.push({
    username:user.value,
    movieId:vid,
    rate:valued.value,
    time: player.getCurrentTime(),
    picuri: picURL
  })
  dataAcc += String(player.getCurrentTime())+ ", " +valued.value + "\n";
  g2 = new Dygraph(
    document.getElementById("graphdiv2"),
    "Time, Engagement Level\n" + dataAcc        // options
  );
}

function onPlayerStateChange(event) {
    if(event.data === 0) {

downloadCSV({ filename: "data.csv" });

      str = JSON.stringify(dict, null, 4);
        console.log(str); // Logs output to dev tools console.
        //document.getElementById('test').innerHTML = (str); // Displays output using window.alert()


      $.ajax({
          url: "https://requestb.in/137od0r1",
          type: "POST",
          data: str,
          dataType: "json",
          success: function (result) {
              switch (result) {
                  case true:
                      processResponse(result);
                      break;
                  default:
                      resultDiv.html(result);
              }
          },
          error: function (xhr, ajaxOptions, thrownError) {
          alert(xhr.status);
          alert(thrownError);
          }
      });
    }
}


function convertArrayOfObjectsToCSV(args) {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

function downloadCSV(args) {
    var data, filename, link;

    var csv = convertArrayOfObjectsToCSV({
        data: dict
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}




function vid1() {
  player.loadVideoById({'videoId': 'ZK3O402wf1c',
                 'suggestedQuality': 'default'});
                 vid="Lec 1 MIT 18.06 Linear Algebra, Spring 2005";
}
function vid2() {
  player.loadVideoById({'videoId': 'mbyG85GZ0PI',
                 'suggestedQuality': 'default'});
                 vid="Lecture 01 - The Learning Problem";
}
function vid3() {
  player.loadVideoById({'videoId': 'gv-AB35V2k8',
                 'suggestedQuality': 'default'});
                 vid="Lec 1 | MIT 18.086 Mathematical Methods for Engineers II";
}
function vid4() {
  player.loadVideoById({'videoId': 'T_I-CUOc_bk',
                 'suggestedQuality': 'default'});
                 vid="Big Picture: Derivatives";
}
function vid5() {
  player.loadVideoById({'videoId': 'oo1ZZlvT2LQ',
                 'suggestedQuality': 'default'});
                 vid="The Exponential Function";
}

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
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

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
