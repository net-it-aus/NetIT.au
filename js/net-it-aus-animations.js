/* <!-- collapse all     Ctrl + k + 0 --> */
/* <!-- expand all       Ctrl + k + j --> */
/* <!-- format           Alt + Shift + F (USE WITH CAUTION)--> */
/* <!-- word wrap toggle Alt + z --> */

// wait for DOM to load START ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener("load", () => {

    // console.log("loaded");

    var myBody = document.getElementsByTagName("BODY")[0];
    myBody.addEventListener("mousemove",(event)=>{
        clearTimeout(timertId);
    },{once: true});

    const screenInnerWidth = window.innerWidth;
    const screenInnerHeight = window.innerHeight;
    var r = document.querySelector(':root');
    r.style.setProperty('--screenInnerWidth', `${screenInnerWidth}px`);
    r.style.setProperty('--screenInnerHeight', `${screenInnerHeight}px`);
    console.log("screenInnerWidth",screenInnerWidth);
    console.log("screenInnerHeight",screenInnerHeight);
    // console.log(`${document.getElementById("bottom-banner-text").clientWidth * -1}px`);
    // console.log(`${document.getElementById("bottom-banner-text").offsetWidth * -1}px`);
    // r.style.setProperty('--bottomBannerTextWidth', `${document.getElementById("bottom-banner-text").offsetWidth * -1}px`);

    r.style.setProperty('--splashWidth', `${window.innerWidth}px`);
    r.style.setProperty('--splashHeight', `${window.innerHeight}px`);

    // document.getElementById("net-it-aus-addin").innerHTML="&#9786;"; // smiling face
    // document.getElementById("net-it-aus-addin").innerHTML="&#9881;"; // gear

    function animateButtons(){
        const buttonsToAnimate = document.getElementsByClassName("animated-button");
        for (i = 0; i < buttonsToAnimate.length;i++){
            console.log(buttonsToAnimate[i].id);
            document.getElementById(buttonsToAnimate[i].id).addEventListener("click", (event) => {
                animatedButtonClicked(event.target.id);
            });
        }
    }
    function animatedButtonClicked(targetID){
        console.log(targetID,"click");
        console.log(targetID,document.getElementById(targetID).classList);
        document.getElementById(targetID).classList.add("global-button-animation");
        setTimeout(animatedButtonRemoveAnimation,1000,targetID);
    }
    function animatedButtonRemoveAnimation(targetID){
        document.getElementById(targetID).classList.remove("global-button-animation");
    }
    animateButtons();


    let splashLayoutNumber = 1;
    let splashLayoutsCount = 4;
    let splashItemNumber = 6;
    let splashItemsCount = 6;
    let timerId = setTimeout(function transitionGrid() {
        // rearrangeGrid();
        highlightItems();
        timerId = setTimeout(transitionGrid, 5000); // (*)
    }, 5000);
    function rearrangeGrid() {
        splashLayoutNumber += 1;
        if (splashLayoutNumber > splashLayoutsCount) {
            document.startViewTransition(() => {
                document.getElementById('splash-grid').classList.toggle(`layout1`);
                document.getElementById('splash-grid').classList.remove(`layout${splashLayoutsCount}`);
            });
            splashLayoutNumber = 1;
        } else {
            document.startViewTransition(() => {
                document.getElementById('splash-grid').classList.toggle(`layout${splashLayoutNumber}`);
                document.getElementById('splash-grid').classList.remove(`layout${splashLayoutNumber - 1}`);
            });
        }
        console.log("rearrangeGrid()",'splashLayoutNumber:- ',splashLayoutNumber,Date());
    }
    // rearrangeGrid();
    function highlightItems() {
        splashItemNumber += 1;
        if (splashItemNumber > splashItemsCount) {
            document.startViewTransition(() => {
                document.getElementById('splash-grid').classList.toggle(`item1`);
                document.getElementById('splash-grid').classList.remove(`item${splashItemssCount}`);
            });
            splashItemNumber = 1;
        } else {
            document.startViewTransition(() => {
                document.getElementById('splash-grid').classList.toggle(`item${splashItemNumber}`);
                document.getElementById('splash-grid').classList.remove(`item${splashItemNumber - 1}`);
            });
        }
        console.log("highlightItems()",'splashItemNumber:- ',splashItemNumber,Date());
    }
    // rearrangeGrid();

});
// wait for DOM to load END ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
