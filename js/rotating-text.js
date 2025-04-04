// // =======================================================================================================================
// let panel1 = document.querySelector(".rotating-text-1-panel");
// let panel1Width = panel1.offsetWidth;
// let panel1All = document.querySelectorAll(".rotating-text-1-panel");
// // console.log(panel1Width);
// // console.log(document.querySelector(".rotating-text-1-panel").offsetWidth);
// let leftAbsPos1 = 0;
// let topAbsPos1 = 0;
// let angle1 = 0;
// let i = 0
// panel1All.forEach(function(el,index){

//     // hue
//     // console.log("color:hsl(" + 360/24*i + ",75%,75%);");

//     // left
//     leftAbsPos1 = panel1Width * i * -1;
//     // console.log("left:" + leftAbsPos1 + "px");

//     // top
//     // Returns a random integer from 0 to 30:
//         topAbsPos1 = Math.floor(Math.random() * 30);
//     // Returns a random integer from 0 to 30:
//     topAbsPos1 = 0;
//     // console.log("top:" + topAbsPos1 + "px");

//     // animation
//     // console.log("animation:rotatingText1 6s " + (i*1000/10) + "s infinite ease-in-out;");

//     // el.firstChild.style="color:hsl(" + 360/24*i + ",75%,75%);left:" + leftAbsPos1 + "px;top:" + topAbsPos1 + "px;animation:rotatingText1 6s " + (i*0.1) + "s infinite ease-in-out;";
//     el.firstChild.style="left:" + leftAbsPos1 + "px;top:" + topAbsPos1 + "px;animation:rotatingText1 6s " + (i*0.1) + "s infinite ease-in-out;";
//     // console.log(el.firstChild.style);

//     i++;

// });
// // =======================================================================================================================


// // =======================================================================================================================
// let panel3 = document.querySelector(".colorful-text-1-panel");
// let panel3Width = panel3.offsetWidth;
// let panel3All = document.querySelectorAll(".colorful-text-1-panel");
// // console.log(panel2Width);
// // console.log(document.querySelector(".rotating-text-2-panel").offsetWidth);
// let leftAbsPos3 = 0;
// let topAbsPos3 = 0;
// let angle3 = 0;
// let i3 = 0
// panel3All.forEach(function(el,index){

//     // hue
//     // console.log(".colorful-text{color:hsl(" + 360/24*i3 + ",75%,75%);}");

//     // left
//     leftAbsPos3 = panel3Width * i3 * -1;
//     // console.log("left3:" + leftAbsPos2 + "px");

//     // top
//     // Returns a random integer from 0 to 30:
//         topAbsPos3 = Math.floor(Math.random() * 30);
//     // Returns a random integer from 0 to 30:
//     topAbsPos3 = 0;
//     // console.log("top3:" + topAbsPos3 + "px");

//     // animation
//     // console.log("animation:rotatingText3 6s " + (i3*1000/10) + "s infinite ease-in-out;");

//     angle2 = 360/24*i3;
//     // console.log("transform:translate(-50%,-50%), rotateY(" + angle3 + "), translateZ(190px);");

//     // el.firstChild.style="color:hsl(" + 360/24*i2 + ",75%,75%);left:" + leftAbsPos2 + "px;top:" + topAbsPos2 + "px;animation:rotatingText2 6s " + (i2*0.1) + "s infinite ease-in-out;transform:translate(-50%,-50%), rotateY(" + angle2 + "), translateZ(190px);";
//     // console.log("color:hsl(" + 360/24*i2 + ",75%,75%);left:" + leftAbsPos2 + "px;top:" + topAbsPos2 + "px;animation:rotatingText2 6s " + (i2*0.1) + "s infinite ease-in-out;transform:translate(-50%,-50%), rotateY(" + angle2 + "), translateZ(190px);");

//     el.firstChild.style="color:hsl(" + 360/24*i3 + ",75%,75%);left:" + leftAbsPos3 + "px;top:" + topAbsPos3 + "px;";
//     // console.log(el.firstChild.style);

//     i3++;

// });
// // =======================================================================================================================