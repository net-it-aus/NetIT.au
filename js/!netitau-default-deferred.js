// collapse all    Ctrl + k + 0
// expand all      Ctrl + k + j
// word wrap       Alt + z

function getClientOS() {
    // returns i)@ | Windows | Android
    const isIOS = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod',
        ].indexOf(navigator.platform) !== -1;
    const isWindows = [
        'Win32'
        ].indexOf(navigator.platform) !== -1;
    const isAndroid = [
        'Linux armv8l'
        ].indexOf(navigator.platform) !== -1;
    // alert('navigator.platform:- '+navigator.platform); 
    // /* DETECTS "iPhone" on an iPhone using: Edge; Safari; Chrome */
    // /* DETECTS "Macintel" on an iPad using: Safari;  */
    // /* DETECTS "iPad" on an iPad using: Chrome;  */
    // /* DETECTS "Win32" on Windows10Pro using: Edge; Chrome; Mozilla */
    // /* DETECTS "Linux armv8l" on Android11 Nokia3.4 using: Chrome; */
    // /* DETECTS "Linux aarch64"  on Android11 Nokia3.4 using: Edge; */
    // alert('navigator.userAgent:- '+navigator.userAgent);
    // /* DETECTS "iPhone" on an iPhone using: Edge; Safari; Chrome */
    // /* DETECTS "Macintosh" on an iPad using: Safari;  */
    // /* DETECTS "iPad" on an iPad using: Chrome;  */
    // /* DETECTS "Windows NT 10" on Windows10Pro using: Edge; Chrome; Mozilla */
    // /* DETECTS "Linux; Android 10" on Android11 Nokia3.4 using: Edge; Chrome; */
    // alert('navigator.vendor:- '+navigator.vendor); 
    // /* DETECTS "Apple Computer, Inc." on an iPhone using: Edge; Safari; Chrome */
    // /* DETECTS "Apple Computer, Inc." on an iPad using: Safari; Chrome; */
    // /* DETECTS "Google Inc." on Windows10Pro using: Edge; Chrome */
    // /* DETECTS "Google Inc." on Android11 Nokia3.4 using: Edge; Chrome; */
        if (isIOS==true) {return 'iOS';}
        if (isWindows==true) {return 'Windows';}
        if (isAndroid==true) { return 'Android';}
}
// document.getElementById("clientOS").innerText = getClientOS() + ' ' +  navigator.appCodeName;
// console.log(document.getElementById("clientOS").innerText);

// COPYRIGHT NOTICE
    function populateCopyrightNotice(){
        // console.log("copyright-notice display status:- " + document.getElementById("copyright-notice").style.display);
        var dt = new Date();
        // var dt1 = dt.toLocaleString().slice(6,10);
        var dt1 = dt.getFullYear();
        // document.getElementById("copyright-notice").innerHTML =  `<span class="material-icons material-icons">copyright</span><br>&copy all rights reserved 2019-${dt1}`;
        // document.getElementById("copyright-notice").innerHTML =  '<span class="material-icons material-icons">copyright</span><br>&copy all rights reserved 2019-' + dt1;
        // document.getElementById("copyright-notice").innerHTML =  'Web Site Builder<br>&copy Net IT Australia 2019-' + dt1;
        // document.getElementById("copyright-notice").innerHTML =  'BG Financial Group<br>Copyright &copy ' + dt1 + '.';
        // document.getElementById("copyright-notice").innerHTML =  'BG Financial Group, copyright &copy 2023-' + dt1 + ' all rights reserved.';
        document.getElementById("copyright-notice").innerHTML =  '&copy ' + dt1 + ' Net IT Australia.';
    }
    populateCopyrightNotice();
// COPYRIGHT NOTICE

// GENERAL EVENT LISTENERS

// GENERAL EVENT LISTENERS

function calcHeaderHeight(){
    // console.log(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
    let header = document.getElementById("header");
    let headerRect = header.getBoundingClientRect("height");
    let headerHeight = headerRect.height;
    let headerHeightPadding = 0;
    document.documentElement.style.setProperty('--header-height', (headerHeight + headerHeightPadding) + "px");
    // console.log(getComputedStyle(document.documentElement).getPropertyValue('--header-height') + " " + Date());
    // alert(getComputedStyle(document.documentElement).getPropertyValue('--header-height') + " " + Date());
}
calcHeaderHeight();
// window.location.reload();
// alert("loaded");