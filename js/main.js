$(function() {
    baguetteBox.run('.gallery');


    $( window ).scroll (function() {
        if( $( this ).scrollTop() > 300 ) {
            $( '.scroll_to_top' ).fadeIn();
        } else {
            $( '.scroll_to_top' ).fadeOut();
        }
    });

    $( '.scroll_to_top' ).click( function() {
        $( 'html, body' ).animate({ scrollTop: 0 }, 800);
        return false;
    });

});

function onYouTubeIframeAPIReady() {
    var iStatus;

    oPlayer = new YT.Player('videoPlayer', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    var $playButton = $('#videoPlayBtn');
    $playButton.on("click", function() {
        if (iStatus == YT.PlayerState.PLAYING) {
            $playButton.show();
            oPlayer.pauseVideo();
            iStatus = YT.PlayerState.PAUSED;
        } else {
            oPlayer.playVideo();
            iStatus = YT.PlayerState.PLAYING;
            $playButton.hide();
        }
    });

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PAUSED) {
            $playButton.show();
            iStatus = YT.PlayerState.PAUSED;
        } else if (event.data == YT.PlayerState.PLAYING) {
            iStatus = YT.PlayerState.PLAYING;
            $playButton.hide();
        }
    }
}

var firstScriptTag = document.getElementsByTagName('script')[0];