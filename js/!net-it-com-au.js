// GLOBAL VARIABLES

//   // Get the root element
//   let r = document.querySelector(':root');
// // SET CSS VARIABLES USING JAVASCRIPT
//   // Create a function for getting a variable value
//   function myFunction_get() {
//     // Get the styles (properties and values) for the root
//     var rs = getComputedStyle(r);
//     // Alert the value of the --blue variable
//     alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
//   }

//   // Create a function for setting a variable value
//   function myFunction_set() {
//     // Set the value of variable --blue to another value (in this case "lightblue")
//     r.style.setProperty('--blue', 'lightblue');
//   }
// // SET CSS VARIABLES USING JAVASCRIPT

function closePopupMessage(){
  document.getElementById("popup-message").style.display="none";
}

function populateCopyrightNotice(){
  // console.log("copyright-notice display status:- " + document.getElementById("copyright-notice").style.display);
  var dt = new Date();
  // var dt1 = dt.toLocaleString().slice(6,10);
  var dt1 = dt.getFullYear();
  // document.getElementById("copyright-notice").innerHTML =  `<span class="material-icons material-icons">copyright</span><br>&copy all rights reserved 2019-${dt1}`;
  document.getElementById("copyright-notice").innerHTML =  '<span class="material-icons material-icons">copyright</span><br>&copy Net IT Australia ' + dt1;
}

window.addEventListener("load",  (event) => {

    //   boxElement = document.querySelector("#box");
  //   createObserver(boxElement);
  //   // createObserver(document.querySelector("#box"));
  //   createObserver(document.getElementById("flip-tile-1of6")); 
  //   createObserver(document.getElementById("flip-tile-2of6")); 
  //   createObserver(document.getElementById("flip-tile-3of6")); 
  //   createObserver(document.getElementById("flip-tile-4of6")); 
  //   createObserver(document.getElementById("flip-tile-5of6")); 
  //   createObserver(document.getElementById("flip-tile-6of6")); 
  //   // const myElements = document.getElementsByClassName("flip-tile");
  //   // console.log(myElements.length);
  //   // let myElement; 
  //   // for (i = 0; i < myElements.length; i++) {
  //   //   myElement = document.getElementById(myElements[i].id);
  //   //   console.log(myElement);
  //   //   createObserver(myElement);
  //   // }  

    var myBody = document.getElementsByTagName("BODY")[0];
    myBody.addEventListener("mousemove",(event)=>{
        logSiteVisit();
    },{once: true});
    myBody.addEventListener("touchstart",(event)=>{
        logSiteVisit();
    },{once: true});
    function logSiteVisit(){
        console.log("mousemove detected");
        // // GEOLOCATION start
        //     function getLocation() {
        //         if (navigator.geolocation) {
        //             navigator.geolocation.getCurrentPosition(showPosition);
        //         } else {
        //             // x.innerHTML = "Geolocation is not supported by this browser.";
        //             console.log("Geolocation is not supported by this browser.");
        //         }
        //     }
        //     getLocation();
        //     function showPosition(position) {
        //         // x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
        //         console.log("Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
        //     }
        // // GEOLOCATION end
        // IPADDRESS start
            // // external source START
            //     fetch('https://api.ipify.org/?format=json')
            //     .then(res => res.json())
            //     .then(data => console.log(data.ip))
            //     .catch(err => console.log(err))
            // // external source END
            // mySERVER start
                fetch('/myIPify');
            // mySERVER end
        // IPADDRESS end
        // triggerSiteVisit();
    }

    // document.getElementById("current-date-time").addEventListener("mouseover",function(){
    //   console.log(document.getElementById("current-date-time").style.display);
    //   var dt = new Date();
    //   // document.getElementById("current-date-time-span").innerHTML=dt.toLocaleString().slice(0,25);    
    // }); 

    // document.addEventListener("scroll",function(){
    //     // check if element is in view
    //     if (isInView("typewriter-text-animation")===true && typewriterCharInt === 0){
    //       typeOutText();
    //     }
    // });

    // document.getElementById("typewriter-text-animation").addEventListener("mouseover",function(){
    //   // check if element is in view
    //   // if (isInView("typewriter-text-animation")===true && typewriterCharInt >= typewriterText.length){
    //   document.getElementById("typewriter-text-animation").innerHTML='';
    //   typewriterCharInt = 0;
    //   typeOutText();
    //   // }
    // });

    // document.getElementById("increasing-text-size-container").addEventListener("mouseover",function(){
    //   // check if element is in view
    //  if (isInView("increasing-text-size-container")===true){
    //     document.getElementById("increasing-text-size").classList.remove("increasing-text-size");
    //     document.getElementById("increasing-text-size").offsetWidth;
    //     document.getElementById("increasing-text-size").classList.add("increasing-text-size");
    //   }
    // });
  // function isInView(e) {
  //   var rect = document.getElementById(e).getBoundingClientRect();
  //   // console.log({x0:rect.left,y1:rect.top,x1:rect.right,y0:rect.bottom});
  //   if (rect.top >= 0 && rect.left >= 0 && rect.right <= window.innerWidth && rect.bottom <= window.innerHeight) {
  //     return true;
  //   } else{
  //     document.getElementById("typewriter-text-animation").innerText="";
  //     typewriterCharInt = 0;
  //     return false;
  //   }
  // }


});




  function updateHeaderDateTime(){
  var dt = new Date();
  // document.getElementById("current-date-time-span").innerHTML=dt.toLocaleString().slice(0,25);    
}

// email various updates once daily
var dayInMilliseconds = 1000 * 60 * 60 * 24;
setInterval(function() { dailyAt1AM(); },dayInMilliseconds );
function dailyAt1AM(){
  getATOrss();
  getRBArss();
}
// email various updates once daily

