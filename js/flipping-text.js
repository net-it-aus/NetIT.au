// // =======================================================================================================================
// let flippingPanel1 = document.querySelector(".flipping-text-1-panel");
// let flippingPanel1Width = flippingPanel1.offsetWidth;
// let flippingPanel1All = document.querySelectorAll(".flipping-text-1-panel");
// // console.log(flippingPanel1Width);
// // console.log(document.querySelector(".flipping-text-1-panel").offsetWidth);
// let leftAbsFlipPos1 = 0;
// let topAbsFlipPos1 = 0;
// let iFlip = 0
// flippingPanel1All.forEach(function(el,index){

//     // hue
//     // console.log("color:hsl(" + 360/24*iFlip + ",75%,75%);");

//     // left
//     leftAbsFlipPos1 = flippingPanel1Width * iFlip * -1;
//     // console.log("left:" + leftAbsFlipPos1 + "px");

//     // top
//     // Returns a random integer from 0 to 30:
//         topAbsFlipPos1 = Math.floor(Math.random() * 30);
//     // Returns a random integer from 0 to 30:
//     topAbsFlipPos1 = 0;
//     // console.log("top:" + topAbsFlipPos1 + "px");

//     // animation
//     // console.log("animation:flippingText1 6s " + (i*1000/10) + "s infinite ease-in-out;");

//     // el.firstChild.style="color:hsl(" + 360/24*iFlip + ",75%,75%);left:" + leftAbsFlipPos1 + "px;top:" + topAbsFlipPos1 + "px;animation:flippingText1 6s " + (iFlip*0.1) + "s infinite ease-in-out;";
//     // el.firstChild.style="left:" + leftAbsFlipPos1 + "px;top:" + topAbsFlipPos1 + "px;animation:flippingText1 6s " + (iFlip*0.1) + "s infinite ease-in-out;";
//     // el.firstChild.style="animation:flippingText1 6s " + (iFlip*0.3) + "s forward linear;";
//     // el.firstChild.style="animation-name:flippingText1;animation-duration:1s;animation-delay:" + iFlip*0.5 + "s;animation-iteration-count:infinite;animation-direction:normal;animation-timing-function:linear;"
//     el.firstChild.style="animation-name:flippingText1;animation-duration:5s;animation-delay:" + iFlip*0.5 + "s;animation-iteration-count:1;animation-direction:normal;animation-timing-function:linear;"
//     // console.log(el.firstChild.style);

//     iFlip++;

// });
// // =======================================================================================================================
