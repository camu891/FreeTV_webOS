
  //sample code for calling LS2 API
  var lunaReq= webOS.service.request("luna://com.palm.systemservice",
  {
    method:"clock/getTime",
    parameters:{},
    onSuccess: function (args) {
     console.log("UTC:", args.utc);
   },
   onFailure: function (args) {
   }
 });

  function keyboardVisibilityChange(event) {
   var visibility = event.detail.visibility;
   if(visibility){
    console.log("Virtual keyboard appeared");
        // Do something.
      }
      else{
       console.log("Virtual keyboard disappeared");
        // Do something.
      }
    }
    document.addEventListener('keyboardStateChange', keyboardVisibilityChange, false);

    function cursorVisibilityChange(event) {
     var visibility = event.detail.visibility;
     if(visibility){
      Log("Cursor appeared");
        // Do something.
      }
      else{
       Log("Cursor disappeared");
        // Do something.
      }
    }
    document.addEventListener('cursorStateChange', cursorVisibilityChange, false);

    function load() {
     document.addEventListener("cursorStateChange", onCursor, false);
     document.addEventListener("visibilitychange", function () { Log(document.visibilityState);}, false);
     window.addEventListener("blur", function() { Log("Focus off");}, false);
     window.addEventListener("focus", function() { Log("Focus on");}, false);
   }

   function onCursor(event) {
     if (event.detail.visibility)
      Log("Cursor on");
    else
      Log("Cursor off");
  }

  var line = 0;
  function Log( msg ) {
    console.log(msg);
   	//document.getElementById('log').innerHTML += ++line + ": " + msg + "<br>";
   }

  //backbutton

  /*window.addEventListener("keydown", function(inEvent){   
    if(window.event) {
      keycode = inEvent.keyCode;
    }
    if (keycode==461) {doBack();}
  });


  function doBack() {
    // Do something for Back button();

    // If you need to open Home UI
    if (someCondition == true)
      webOS.platformBack();
  }*/

