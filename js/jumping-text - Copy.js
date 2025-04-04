var jumpingTextElements = document.querySelectorAll(".jumping-text");
console.log(jumpingTextElements);

jumpingTextElements.forEach(jumpingTextElement => {
    console.log(jumpingTextElement.id);
    jumpingTextElement.addEventListener("mouseover",function(){
        jumpText(jumpingTextElement.id);
    });
});

// function jumpText(e){
//     console.log(e.id);
//     let jumpingTextElement = document.getElementById(e.id);
//     let jumpingCharacters = jumpingTextElement.children;
//     console.log(jumpingCharacters);
//     var array = jumpingCharacters;
//     var interval = 1000; // how much time should the delay between two iterations be (in milliseconds)?
//     jumpingCharacters.forEach(function (el, index) {
//     setTimeout(function () {
//         console.log(el);
//     }, index * interval);
//     });
//     console.log('Loop finished.');
// }






// const jumpingTextElements = document.querySelectorAll(".jumping-text");
console.log(jumpingTextElements);

function jumpText(e){
    console.log(e);
    // let jumpingTextElement = document.getElementById(e.id);
    let jumpingCharacters = Array.from(document.getElementById(e).children);
    console.log(jumpingCharacters);
    let i = 0;
    jumpingCharacters.forEach(function(el,index){
        i++;
    // for (i = 0; i < jumpingCharacters.length; i++){
        // jumpingCharacters[i].style = "color:red;";
        // console.log(jumpingCharacters[i].innerText);
        // // setTimeout(delayFor, 2000);
        // delayFor(2000,jumpingCharacters[i]);
        setTimeout(function () {
            console.log(el);
            el.style = "color:red;";
            // console.log(jumpingCharacters[i]);
        }, i * 1000);
    });
}

// function a(){
//     // jumpingTextElements.forEach(jumpingTextElement => {
//         // let n = jumpingTextElement.childElementCount;
//         let jumpingCharacters = jumpingTextElement.children;
//         console.log(jumpingCharacters.length);
//         for (i = 0;i < jumpingCharacters.length;i++){
//             jumpingCharacters[i].style = "color:red;";
//             // setTimeout(jumpText, 2000);
//             // delayFor(2000,jumpingCharacters[i]);
//         }
//         // clearTimeout(jumpText);
//     // });
// }

function delayFor(n,character){
// function delayFor(){
    // return;

    setTimeout(function() {
        console.log(character);
    }, n);
}