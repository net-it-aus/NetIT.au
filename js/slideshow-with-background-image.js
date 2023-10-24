let slideshowBackgroundImages = 4;
let slideIndex = 0;

function nextSlide() {

    // console.log(slideIndex);
    // console.log("url('!slide" + slideIndex + ".jpg')");
    // document.getElementById("slide-background").style.backgroundImage = "url('./media - partial/slide" + slideIndex + ".jpg')";

    switch (slideIndex){
        case 1:
            // document.getElementById("slide-caption").innerHTML = `<div class="slide-caption-animation"><span style="color:white;text-shadow: 2px 3px navy;">Advisory services.</span><span style="color:navy;text-shadow: 2px 3px white;"><br>BG Financial Group</span><br><span style="color:white;text-shadow: 2px 3px navy;padding-top:0;margin-top:0;">Chartered Accountants</span></div>`;
            document.getElementById("slide-caption").innerHTML = `<div class="slide-caption-animation"><span style="color:white;text-shadow: 2px 3px navy;">Business advisory.</span></div>`;
            // document.getElementById("slide-background").style.backgroundColor = `rgba(130, 200, 255, 0.99)`;
            document.getElementById("slide-background").style.backgroundColor = `rgb(230,240,255)`;
            document.getElementById("slide-background").style.backgroundBlendMode = `multiply`;
            document.getElementById("slide-background").style.zIndex = `90`;
            break;
        case 2:
            // document.getElementById("slide-caption").innerHTML = `<div class="slide-caption-animation"><span style="color:white;text-shadow: 2px 3px navy;">Tax services.</span><span style="color:navy;text-shadow: 2px 3px white;"><br>BG Financial Group</span><br><span style="color:white;text-shadow: 2px 3px navy;padding-top:0;margin-top:0;">Chartered Accountants</span></div>`;
            document.getElementById("slide-caption").innerHTML = `<div class="slide-caption-animation"><span style="color:white;text-shadow: 2px 3px navy;">Tax & accounting.</span></div>`;
            document.getElementById("slide-background").style.backgroundColor = `rgba(130, 200, 255, 0.99)`;
            document.getElementById("slide-background").style.backgroundColor = `rgb(230,240,255)`;
            document.getElementById("slide-background").style.backgroundBlendMode = `multiply`;
            document.getElementById("slide-background").style.zIndex = `90`;
            break;
        case 3:
            // document.getElementById("slide-caption").innerHTML = `<div class="slide-caption-animation"><span style="color:white;text-shadow: 2px 3px navy;">Business & accounting services.</span><span style="color:navy;text-shadow: 2px 3px white;"><br>BG Financial Group</span><br><span style="color:white;text-shadow: 2px 3px navy;padding-top:0;margin-top:0;">Chartered Accountants</span></div>`;
            document.getElementById("slide-caption").innerHTML = `<div class="slide-caption-animation"><span style="color:white;text-shadow: 2px 3px navy;">Portfolio services.</span></div>`;
            document.getElementById("slide-background").style.backgroundColor = `rgba(130, 200, 255, 0.99)`;
            document.getElementById("slide-background").style.backgroundColor = `rgb(230,240,255)`;
            document.getElementById("slide-background").style.backgroundBlendMode = `multiply`;
            document.getElementById("slide-background").style.zIndex = `90`;
            break;
        case 4:
            // document.getElementById("slide-caption").innerHTML = `<div class="slide-caption-animation"><span style="color:white;text-shadow: 2px 3px navy;">Audit & assurance services.</span><span style="color:navy;text-shadow: 2px 3px white;"><br>BG Financial Group</span><br><span style="color:white;text-shadow: 2px 3px navy;padding-top:0;margin-top:0;">Chartered Accountants</span></div>`;
            document.getElementById("slide-caption").innerHTML = `<div class="slide-caption-animation"><span style="color:white;text-shadow: 2px 3px navy;">Audit & assurance.</span></div>`;
            document.getElementById("slide-background").style.backgroundColor = `rgba(130, 200, 255, 0.99)`;
            document.getElementById("slide-background").style.backgroundColor = `rgb(230,240,255)`;
            document.getElementById("slide-background").style.backgroundBlendMode = `multiply`;
            document.getElementById("slide-background").style.zIndex = `90`;
            break;
        default:
            // document.getElementById("slide-caption").innerHTML = `<span style="color:navy;text-shadow: 2px 3px white;"><br>BG Financial Group</span><br><span style="color:white;text-shadow: 2px 3px navy;padding-top:0;margin-top:0;">Chartered Accountants</span>`;
            document.getElementById("slide-caption").innerHTML = `<span style="color:navy;text-shadow: 2px 3px white;"><br>BG Financial Group</span><br><span style="color:white;text-shadow: 2px 3px navy;padding-top:0;margin-top:0;">Chartered Accountants</span>`;
            document.getElementById("slide-background").style.backgroundColor = `chartreuse`;
            document.getElementById("slide-background").style.backgroundColor = `rgb(230,240,255)`;
            document.getElementById("slide-background").style.backgroundBlendMode = `multiply`;
            document.getElementById("slide-background").style.zIndex = `90`;
            break;
    }

    slideIndex += 1; 
    if (slideIndex > slideshowBackgroundImages) {slideIndex = 1;}

}

function initialSlide(n){

    // console.log(n);
    // console.log("url('!slide" + n + ".jpg')");
    document.getElementById("slide-background").style.backgroundImage = "url('./media - partial/slide" + n + ".jpg')";

    // document.getElementById("slide-caption").innerHTML = `<div class="slide-caption-animation"><span style="color:white;text-shadow: 2px 3px navy;">Advisory services.</span><span style="color:navy;text-shadow: 2px 3px white;padding-bottom:0;margin-bottom:0;"><br>BG Financial Group</span><br><span style="color:white;text-shadow: 2px 3px navy;padding-top:0;margin-top:0;">Chartered Accountants</span></div>`;
    document.getElementById("slide-caption").innerHTML = `<div class="slide-caption-animation"><span style="color:white;text-shadow: 2px 3px navy;">Business advisory.</span></div>`;
    document.getElementById("slide-background").style.backgroundColor = `rgba(130, 200, 255, 0.99)`;
    document.getElementById("slide-background").style.backgroundColor = `rgb(230,240,255)`;
    document.getElementById("slide-background").style.backgroundBlendMode = `multiply`;
    document.getElementById("slide-background").style.zIndex = `90`;

    slideIndex = n + 1; 

}
initialSlide(1);

slideshowInterval = setInterval(() => nextSlide(), 6000);