// function setTickerTapeDisplayWidth(){
//     let myWidth = window.innerWidth - 100;
//     // alert(myWidth);
//     document.getElementById("ticker-tape").style.width=`${myWidth}px`;
// }
// setTickerTapeDisplayWidth();

// let tickerTapeText = document.getElementById("ticker-tape-text").innerText;
// console.log(tickerTapeText.length);

// let tickerTapeChars = document.querySelectorAll(".ticker-tape-char");
// console.log(tickerTapeChars.length);

// let tickerTapeCharsArray = Array.prototype.slice.call(tickerTapeChars); 
// console.log(tickerTapeCharsArray.length);

// let tickerTapeDelay = 25; // 1000 = 1 second

// let tickerTapeTextPos = 0;
// let tickerTapeCharPos = tickerTapeChars.length-1;
function tickerTapeGo(){
    return;

    if (tickerTapeTextPos < tickerTapeText.length){
        console.log(tickerTapeTextPos);
        console.log(tickerTapeText[tickerTapeTextPos]);
        if (tickerTapeCharPos < 0){tickerTapeCharPos = tickerTapeChars.length-1};
        tickerTapeChars[tickerTapeCharPos].innerText = tickerTapeText[tickerTapeTextPos];
        tickerTapeTextPos = tickerTapeTextPos + 1;
        tickerTapeCharPos = tickerTapeCharPos - 1;
        setTimeout(tickerTapeGo, tickerTapeDelay);
    } else {
        clearTimeout(tickerTapeGo);
    };

}
tickerTapeGo();

// SET CSS VARIABLES USING JAVASCRIPT
function setTickerWidth(){
    return;
    console.log(getComputedStyle(document.documentElement).getPropertyValue('--ticker-width'));
    let x = document.getElementById("ticker-tape-animation").innerText;
    document.documentElement.style.setProperty('--ticker-width', -x.length + "ch");
    console.log(getComputedStyle(document.documentElement).getPropertyValue('--ticker-width'));
    document.documentElement.style.setProperty('--ticker-duration', x.length * .2 + "s");
    console.log(getComputedStyle(document.documentElement).getPropertyValue('--ticker-duration'));
}
setTickerWidth();
// SET CSS VARIABLES USING JAVASCRIPT
