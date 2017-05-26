

// 2. This code loads the IFrame Player API code asynchronously.
var testing = document.getElementById('test');
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// var picURL;

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

// function clickme(){
//   testing.innerHTML = picURL;
// }

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

function stopVideo() {
  player.stopVideo();
}

function vid1() {
  player.loadVideoById({'videoId': 'ZK3O402wf1c',
                 'suggestedQuality': 'default'});
                 vid="Lec 1 MIT 18.06 Linear Algebra Spring 2005";


}
function vid2() {
  player.loadVideoById({'videoId': 'mbyG85GZ0PI',
                 'suggestedQuality': 'default'});
                 vid="Lecture 01 - The Learning Problem";

}
function vid3() {
  player.loadVideoById({'videoId': 'gv-AB35V2k8',
                 'suggestedQuality': 'default'});
                 vid="Lec 1 MIT 18.086 Mathematical Methods for Engineers II";

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
