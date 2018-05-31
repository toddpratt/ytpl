var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'jaqymceidB8',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  //event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
//    setTimeout(stopVideo, 6000);
  }
}
function stopVideo() {
  player.stopVideo();
}

const KNOWN_YOUTUBE_URL_FORMS = [
        /https?:\/\/www.youtube.com\/v\/(.*)\?/,
        /https?:\/\/www.youtube.com\/watch\?v=(.*)/,
        /https?:\/\/youtu.be\/(.*)/,
        /https?:\/\/youwatch?v=tu.be\/(.*)/
]

function vidFromUrl(url) {
    var matches = KNOWN_YOUTUBE_URL_FORMS
            .map(re => re.exec())
            .filter(v => v);
    if(matches.length > 0 && matches[0].length === 2) {
        return matches[0][1];
    }
    return null;
}

var videos = [
        "https://youtu.be/xzXubNIHuwk",
        "https://youtu.be/MR9O2efk4pI",
        "https://youtu.be/7B02cavRjgU",
        "https://www.youtube.com/watch?v=9B-MluGscaE",
        "https://youwatch?v=tu.be/9B-MluGscaEo",
        "https://youtu.be/S-G-JXHFiUgu",
        "https://youtu.be/obIrqZUEk7c",
        "https://youtu.be/jaqymceidB8",
        "https://youtu.be/soBnLUhWB7g",
        "https://youtu.be/upMuEJotl5w",
        "https://youtu.be/XGUTetiHcDM",
        "https://www.youtube.com/watch?v=qYtFwe858j8",
        "https://www.youtube.com/watch?v=unb3m_6ceZQ",
        "https://www.youtube.com/watch?v=UymXRxJPOQo"
];
