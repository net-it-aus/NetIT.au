// HEADER NAVIGATION
    const headerNavUl = document.getElementById("header-nav-ul");
    // const primaryNav = document.querySelector(".primary-navigation");
    const portraitNavToggle = document.getElementById("portrait-nav-toggle");
    // const navToggle = document.querySelector(".mobile-nav-toggle");

    console.log(headerNavUl.id);
    console.log(portraitNavToggle.id);

    portraitNavToggle.addEventListener("click",() => {
        const visibility = headerNavUl.getAttribute("data-visible");
        console.log(visibility);
        if (visibility==="false"){
            headerNavUl.setAttribute('data-visible',true);
            portraitNavToggle.setAttribute('data-visible',true);
            portraitNavToggle.innerHTML = "&#9932;";
        } else {
            headerNavUl.setAttribute('data-visible',false);
            portraitNavToggle.setAttribute('data-visible',false);
            portraitNavToggle.innerHTML = "&#9776;";
        }
    });
    headerNavUl.addEventListener("mouseleave",() => {
        headerNavUl.setAttribute('data-visible',false);
        portraitNavToggle.setAttribute('data-visible',false);
        portraitNavToggle.innerHTML = "&#9776;";
    });

    console.log(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
    let header = document.getElementById("header");
    let headerRect = header.getBoundingClientRect("height");
    let headerHeight = headerRect.height;
    let headerHeightPadding = 0;
    document.documentElement.style.setProperty('--header-height', (headerHeight + headerHeightPadding) + "px");
    console.log(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));

// HEADER NAVIGATION

// COPYRIGHT NOTICE
    function populateCopyrightNotice(){
        console.log("copyright-notice display status:- " + document.getElementById("copyright-notice").style.display);
        var dt = new Date();
        // var dt1 = dt.toLocaleString().slice(6,10);
        var dt1 = dt.getFullYear();
        // document.getElementById("copyright-notice").innerHTML =  `<span class="material-icons material-icons">copyright</span><br>&copy all rights reserved 2019-${dt1}`;
        // document.getElementById("copyright-notice").innerHTML =  '<span class="material-icons material-icons">copyright</span><br>&copy all rights reserved 2019-' + dt1;
        document.getElementById("copyright-notice").innerHTML =  '&copy all rights reserved 2019-' + dt1;
    }
    populateCopyrightNotice();
// COPYRIGHT NOTICE
  