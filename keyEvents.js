//jQuery's document.ready shorthand
$(function() { 
      $("body").keyup(function(event) {
        //event.preventDefault();
        var tmpKeysDown = keysDown;
        
        keysDown = [];
        
        if((event.ctrlKey || event.altKey || event.shiftKey) && tmpKeysDown.length > 0)
          return combinationEvents(event, tmpKeysDown);
        
        return singleKeyEvents(event);
        
      });
      
      $("body").keydown(function(event) {
        // if one of the non-ASCII characters, then prevent browser's default action
        // Need to do it this way so that the keypress event still fires on single-keys
        if(event.ctrlKey || event.altKey || event.shiftKey)
          event.preventDefault();
        
        if(event.which != 20)
          keysDown.push(event.which);
      });
      
      $("body").keypress(function(event) {
        //alert(event.which);
        event.preventDefault();
        if(keysDown.length > 1)
          return false;
        
        return singleASCIIEvents(event);
      });
      
      combinationEvents = function(event, tmpKeysDown) {
        var command;
        
        command = commands[mode]['combination'];
        
        if(event.ctrlKey)
          command = command['ctrl'];
        
        _.each(tmpKeysDown, function(k) {
          if(command != undefined && command[k] != undefined)
            command = command[k];
        });
        
        if(command != undefined && command['default'] != undefined)
          executeDefaultAction(command.default);
        
        return false;
      }
      
      executeDefaultAction = function(defaultDict) {
        _.each(defaultDict.functions, function(f) {
          functionAPI[f.key].apply(this, f.argument_list);
        });
      }
      
      singleASCIIEvents = function(event) {
        var command;
        
        command = commands[mode]['singleASCII'][event.which];
        
        if(command != undefined && command['default'] != undefined)
          executeDefaultAction(command.default);
        
        return false;
      }
      
      singleKeyEvents = function(event) {
        var command;
        
        command = commands[mode]['singleKey'][event.which];
        
        if(command != undefined && command['default'] != undefined)
          executeDefaultAction(command.default);
        
        return false;
      }
});
