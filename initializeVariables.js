// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      var beginNoteTime = 0;
      var mode = "video"; //Modes available -> video, createNote, editNote, noteList
      var controlPressed = false;
      var keyDownEventTriggered = false;
      var keyPressEventTriggered = false;
      var keysDown = [];
      
      var commands = {
        'video': {
          'combination': {
            'ctrl': {
              80: {
                'default': {
                  'name': 'Spacebar Toggle Video',
                  'functions': [
                    {
                      'key': 'toggleVideoPlayback',
                      'argument_list': []
                    }
                  ]
                },
                79: {
                  'default': function() {alert('wowzers')}
                }
              },
              79: {
                'default': {
                  'name': 'Alert hello',
                  'functions': [
                    {
                      'key': 'alert',
                      'argument_list': ["Hello", "There"]
                    }
                  ]
                },
              },
              'shift': {
                'default': function() {alert('ctrl + shift')}
              }
            }
          }, 'singleASCII': {
            32: {//' '
              'default': {
                'name': 'Spacebar Toggle Video',
                'functions': [
                  {
                    'key': 'toggleVideoPlayback',
                    'argument_list': []
                  }
                ]
              }
            }, 59: {//':'
              'default': {
                'name': 'Go Forward 5 seconds',
                'functions': [
                  {
                    'key': 'goForwardInSeconds',
                    'argument_list': [5]
                  }
                ]
              }
            }, 104: {//'h'
              'default': {
                'name': 'Go Back 5 seconds',
                'functions': [
                  {
                    'key': 'goBackInSeconds',
                    'argument_list': [5]
                  }
                ]
              }
            }, 106: {//'j'
              'default': {
                'name': 'Go Back 1 second',
                'functions': [
                  
                  {
                    'key': 'goBackInSeconds',
                    'argument_list': [1]
                  }
                ]
              }
            }, 107: {//'k'
              'default': {
                'name': 'k key Toggle Video',
                'functions': [
                  {
                    'key': 'toggleVideoPlayback',
                    'argument_list': []
                  }
                ]
              }
            }, 108: {//'l'
              'default': {
                'name': 'Go Forward 1 second',
                'functions': [
                  {
                    'key': 'goForwardInSeconds',
                    'argument_list': [1]
                  }
                ]
              }
            }, 112: {
              'default': {
                'name': 'p key Toggle Video',
                'functions': [
                  {
                    'key': 'toggleVideoPlayback',
                    'argument_list': []
                  }
                ]
              }
            }
          }, 'singleKey': {
            27: {
              'default': {
                'name': 'p key Toggle Video',
                'functions': [
                  {
                    'key': 'toggleVideoPlayback',
                    'argument_list': []
                  }
                ]
              }
            }
          }
        }
      };
      
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
