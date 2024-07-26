// GLOBAL VARIABLES
    let typewriterCharInt = 0;
    let typewriterSpeed = 250;
    // let typewriterText = `Typewriter effect, can~span multiple rows.`;
    // let typewriterText = `Typewriter effect, can span multiple rows.`;
    // let typewriterText = `Typewriter effect. ("mouseover" this text)`;
    let typewriterText = `Typewriter effect. ('mouseover' this text)`;
// GLOBAL VARIABLES

// document.getElementById("typewriter-text-animation").addEventListener("mouseover",typeOutText());

// TYPEWRITER start
  // var i = 0;
  // var typewriterText = `Web SITES, Web APPS, Web HOSTING, SSL certificates,~Custom Analytics.~Domain names, Microsoft 365 subscriptions.~`;
  var elementID = "typewriter-text-animation";
  function typeOutText() {
    // console.log(typewriterCharInt);
    if (typewriterCharInt < typewriterText.length) {
      if (typewriterText.charAt(typewriterCharInt)==="~"){
          document.getElementById(elementID).innerHTML += `<br>`;
      } else {
          document.getElementById(elementID).innerHTML += typewriterText.charAt(typewriterCharInt);
      }
      typewriterCharInt++;
      setTimeout(typeOutText, typewriterSpeed);
    } else {
      if (typewriterCharInt >= typewriterText.length) {
        // alert("D");
        clearTimeout(typeOutText);
      }
    }
  }
// TYPEWRITER end

// /* TYPEWRITER TEXT ANIMATION */
// .typewriter-text-animation{
//   color:chartreuse; 
//   font-family:"Source Code Pro",monospace;
//   min-height:11px;
// }
// /* TYPEWRITER TEXT ANIMATION */
