 
      function toggleVideoPlayback() {
        if(player.getPlayerState() == YT.PlayerState.PLAYING) {
          player.pauseVideo();
        } else if(player.getPlayerState() == YT.PlayerState.PAUSED || player.getPlayerState() == YT.PlayerState.CUED) {
          player.playVideo();
        }
      }
      
      goBackInMilliseconds = function (milliseconds) {
        player.seekTo(player.getCurrentTime()-(milliseconds/1000));
      }
      
      goBackInSeconds = function (seconds) {
        goBackInMilliseconds(1000*seconds);
      }
      
      goForwardInMilliseconds = function (milliseconds) {
        player.seekTo(player.getCurrentTime()+(milliseconds/1000));
      }
      
      goForwardInSeconds = function (seconds) {
        goForwardInMilliseconds(1000*seconds);
      }
      
      setMode = function (m) {
        mode = m;
      }
      
      //Load in all of the values from yml file
      
      var functionAPI = {
        'alert': alert,
        'goBackInMilliseconds': goBackInMilliseconds,
        'goBackInSeconds': goBackInSeconds,
        'goForwardInMilliseconds': goForwardInMilliseconds,
        'goForwardInSeconds': goForwardInSeconds,
        'toggleVideoPlayback': toggleVideoPlayback
      }

