// add event listener
var jumpingTextElements = document.querySelectorAll(".jumping-text");
// console.log(jumpingTextElements);
jumpingTextElements.forEach(jumpingTextElement => {
    // console.log(jumpingTextElement.id);
    jumpingTextElement.addEventListener("mouseover",function(){
        jumpText(jumpingTextElement.id);
    });
    jumpingTextElement.addEventListener("mouseleave",function(){
        jumpTextStop(jumpingTextElement.id);
    });
});
// add event listener

// jump text
function jumpText(e){
    // console.log(e);
    // let jumpingTextElement = document.getElementById(e.id);
    let jumpingCharacters = Array.from(document.getElementById(e).children);
    // console.log(jumpingCharacters);
    let i = 0;
    jumpingCharacters.forEach(function(el,index){
        i++;
        setTimeout(function () {
            // console.log(el);
            // el.style = "color:red;";
            el.classList.add("text-that-jumps-css-only");
        }, i * 250);
        // setTimeout(function () {
        //     console.log(el);
        //     // el.style = "color:red;";
        //     el.classList.remove("text-that-jumps-css-only");
        // }, i * 700);
    });
}
function jumpTextStop(e){
    // console.log(e);
    // let jumpingTextElement = document.getElementById(e.id);
    let jumpingCharacters = Array.from(document.getElementById(e).children);
    // console.log(jumpingCharacters);
    let i = 0;
    jumpingCharacters.forEach(function(el,index){
        i++;
        // setTimeout(function () {
        //     console.log(el);
        //     // el.style = "color:red;";
        //     el.classList.add("text-that-jumps-css-only");
        // }, i * 250);
        setTimeout(function () {
            // console.log(el);
            // el.style = "color:red;";
            el.classList.remove("text-that-jumps-css-only");
            // el.classList("");
        }, i * 250);
    });
}
// jump text
