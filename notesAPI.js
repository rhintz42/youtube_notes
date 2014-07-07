 
      function toggleVideoPlayback() {
        if(player.getPlayerState() == YT.PlayerState.PLAYING) {
          player.pauseVideo();
        } else if(player.getPlayerState() == YT.PlayerState.PAUSED || player.getPlayerState() == YT.PlayerState.CUED) {
          player.playVideo();
        }
      }
      
      function goBackInMilliseconds (milliseconds) {
        player.seekTo(player.getCurrentTime()-(milliseconds/1000));
      }
      
      function goBackInSeconds (seconds) {
        goBackInMilliseconds(1000*seconds);
      }
      
      function goForwardInMilliseconds (milliseconds) {
        player.seekTo(player.getCurrentTime()+(milliseconds/1000));
      }
      
      function goForwardInSeconds (seconds) {
        goForwardInMilliseconds(1000*seconds);
      }
      
      function setMode (m) {
        mode = m;
        $("#mode").html('Mode: ' + mode);
      }

      function noteCreate () {
        if($("#note-edit").length > 0) {
          $("#note-edit textarea").focus();
        } else {
          $("#notes-create-container").append("<div id='note-edit'><textarea rows='4' cols='50'></textarea></div>")
          $("#note-edit textarea").focus();
        }

        setMode("noteEdit");
      }
