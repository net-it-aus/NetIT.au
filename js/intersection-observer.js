// .css-examples-observed-section{
//     /* background-color: rgba(240, 40, 190, 1); */
//     /* background-color: rgba(255, 255, 255, 1); */
//     color:navy;
//     transition: background-color 4s, border 0.1s;   
// }


const sectionOne = document.querySelector(".section1");
// const observedSections = document.getElementsByClassName("observed-section");
const observedSections = document.querySelectorAll(".observed-section");

function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;
    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }
    thresholds.push(0);
    return thresholds;
}

const options = {
    root: null,
    threshold: buildThresholdList(),
    rootMargin: "-100px"
};

// const observer = new IntersectionObserver(callback(),options);
// const observer = new IntersectionObserver(callback(entries,observer){},options);
const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        // console.log(entry.target);
        // console.log(entry.target.id);
        switch (entry.target.id){
            case "text-animations":
                jumpText("jumping-text"); 
                break;
        };
        // console.log(entry);
        entry.target.classList.toggle("css-examples-observed-section");
        observer.unobserve(entry.target);
    });
},options);

// observer.observe(sectionOne);
// console.log(observedSections);
observedSections.forEach(e => {
    observer.observe(e); 
});

// observer.observe(); 

// ====================================================================================================================================================


//   // intersectObserver variables
//   const numSteps = 20.0;
//   let boxElement;
//   let prevRatio = 0.0;
//   let increasingColor = "rgba(40, 40, 190, ratio)";
//   let decreasingColor = "rgba(190, 40, 40, ratio)";
//   // intersectObserver variables

// // MONITOR WINDOW SCROLL - IntersectionObserver

// async function createObserver(e) {
//     console.log(e);
//     let observer;
//     let options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: buildThresholdList(),
//     };
//     observer = new IntersectionObserver(handleIntersect, options);
//     // observer.observe(boxElement);
//     await observer.observe(e);
//   }
  
//   function buildThresholdList() {
//     let thresholds = [];
//     let numSteps = 20;
//     for (let i = 1.0; i <= numSteps; i++) {
//       let ratio = i / numSteps;
//       thresholds.push(ratio);
//     }
//     thresholds.push(0);
//     return thresholds;
//   }
  
//   function handleIntersect(entries, observer) {
//     entries.forEach((entry) => {
//       if (entry.intersectionRatio > prevRatio) {
//         entry.target.style.backgroundColor = increasingColor.replace("ratio",entry.intersectionRatio);
//         // entry.target.style.opacity = opacity.replace("ratio",entry.intersectionRatio);
//         entry.target.classList.remove("opacity0");
//         entry.target.classList.add("opacity1");
//     } else {
//         entry.target.style.backgroundColor = decreasingColor.replace("ratio",entry.intersectionRatio);
//         // entry.target.style.opacity = opacity.replace("ratio",entry.intersectionRatio);
//         entry.target.classList.add("opacity0");
//         entry.target.classList.remove("opacity1");
//     }
//       prevRatio = entry.intersectionRatio;
//     });
//   }
  
  
//   // function scrollWatch(){
//     console.log("scrollWatch() called.");
//     const observer = new IntersectionObserver((observerCallback) => {
//       console.log("scrollWatch() called.");
//       console.log("observerCallback.length",observerCallback.length);
//       observerCallback.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting){
//           entry.target.classList.remove("opacity0");
//           entry.target.classList.add("opacity1");
//         } else {
//           entry.target.classList.add("opacity0");
//           entry.target.classList.remove("opacity1");
//         }
//       });
//     });
//     const invisibleElements = document.querySelectorAll("opacity0");
//     invisibleElements.forEach((element) => {
//       observer.observe(element)
//     });
//   // }
//   // MONITOR WINDOW SCROLL - IntersectionObserver
  