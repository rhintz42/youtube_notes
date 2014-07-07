      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'fAW1j71o5KU',
          playerVars: { 'controls': 0 },
          events: {
            'onReady': onPlayerStateChange,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      function onPlayerStateChange(event) {
        document.getElementById('player').blur();
      }
      
