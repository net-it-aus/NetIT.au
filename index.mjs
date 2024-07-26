const aWeekDayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const aMonthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//  set the port number for the server
var v_portNumber = process.argv[2];
if (v_portNumber == undefined) {
    console.log('Port Number not provided.');
    v_portNumber = 2070;
    console.log('Port Number assigned is:- ', v_portNumber);
} else {
    console.log('Port Number argument/option:- ',v_portNumber);
}

//  express server framework
// const express = require('express');
    import express from 'express';
    const app = express();

// npm install node-fetch --save
// const fetch = require('node-fetch');
    import fetch from 'node-fetch';

// const fs = require('fs');
import fs from 'fs';

// var nodeoutlook = require('nodejs-nodemailer-outlook')
import nodeoutlook from 'nodejs-nodemailer-outlook';

//  tell the express server to host static files in the 'public' folder
    app.use(express.static('public'));
    app.use(express.static('css'));
    // app.use(express.static('images'));
    app.use(express.static('js'));
    app.use(express.static('media'));
// app.use(express.static('resources'));

//  tell the express server to recognise incoming data as JSON
    app.use(express.json({limit: '1mb'}));
//  tell the express server to recognise incoming data as JSON

// const os = require('os');
    import os from 'os';
// const os = require('os');
console.log('total memory:- ',os.totalmem()/1000000000);
console.log('free memory:- ',os.freemem()/1000000000);

console.log(Date().slice(0,25));
  app.listen( process.env.PORT || v_portNumber, () => { 
  console.log('netIT.com.au server is listening at port ' + v_portNumber + '\n');
});

// SERVER REQUESTS LOG start
app.all('*', (req, res) => {
    console.log('/////////////// app.all information START');
    const v_ipAddress = req.connection.remoteAddress;
    const v_ipAddressForwarded = req.headers['x-forwarded-for'];
    console.log('total memory:- ',os.totalmem()/1000000000);
    console.log('free memory:- ',os.freemem()/1000000000);
    console.log(`incoming IP address:-  ${v_ipAddress}`);
    // console.log(`incoming IP address length:-  ${v_ipAddress.length}`);
    console.log(`app.all req.headers['x-forwarded-for']:- ${v_ipAddressForwarded}`);
    console.log('app.all req.url:- ', req.url);
    console.log('app.all req.originalUrl:- ', req.originalUrl);
    // console.log(`app.all req date:- ${Date().slice(0, 25)}\n`);
    console.log('RunClub.net.au server is listening at port ' + v_portNumber);
    console.log(`app.all req date:- ${Date().slice(0, 25)}`);
    console.log('/////////////// app.all information END\n');

    // const emailBody = 'incoming IP address:- ' + v_ipAddress + ' ' + Date().slice(0,25) + ' ' + 'incoming originalUrl:- "' + req.originalUrl + '"';
    // console.log('emailBody:- ' + v_ipAddress + ' ' + Date().slice(0,25));
    // emailSiteVisit();

    // if (v_ipAddress.length > 3){
    //     const emailBody = 'Incoming IP address forwarded:- ' + v_ipAddressForwarded + ' ' + Date().slice(0,25) + ' ' + 'incoming originalUrl:- "' + req.originalUrl + '"';
    //     // console.log('emailBody:- ' + v_ipAddress + ' ' + Date().slice(0,25));
    //     emailSiteVisit(emailBody);
    // }
    // if (v_ipAddressForwarded.length > 3){
    if (v_ipAddressForwarded !== undefined){
        // const emailBodyHTML = `Incoming IP address:- ${v_ipAddress} ${Date().slice(0,25)} incoming originalUrl:- ${req.originalUrl}%0D%0A`;
        // const emailBodyText = `Incoming IP address:- ${v_ipAddress} ${Date().slice(0,25)} incoming originalUrl:- ${req.originalUrl}%0D%0A`;
        // const emailBodyHTML = `Incoming IP address:- ${v_ipAddress} ${Date().slice(0,25)} incoming originalUrl:- ${req.originalUrl}\r\n\r\n`;
        const emailBodyText = `\r\napp.all req.headers['x-forwarded-for']:- ${v_ipAddressForwarded} ${Date().slice(0,25)} req.body:- ${JSON.stringify(req.body)} incoming originalUrl:- ${req.originalUrl}\r\n`;
        // const folderPath_siteLog = "../RunClub.net.au-express-data";
        // console.log('emailBodyText:- \n' + emailBodyText + '\n' + Date().slice(0,25));
        console.log('emailBodyText:- ' + emailBodyText + '' + Date().slice(0,25));
        fs.appendFile("siteLog" + '.txt',emailBodyText.slice(0,255),(err) => {
            if (err){
                console.log("updated siteLog err");
            } else {
                console.log("updated siteLog OK");
            }
        });
        // // emailSiteVisit(emailBodyHTML,emailBodyText);
        // const timeout1 = setTimeout(() => {
        //     console.log("Timeout set");
        //     emailSiteVisit(emailBodyHTML,emailBodyText);
        // }, 10000);
    }
    switch (req.url) {
    case '/myIPify':
        res.send(v_ipAddressForwarded);
        const siteVisitedBy = `site visited by:- ${v_ipAddressForwarded} at ${Date().slice(0, 25)}`;
        console.log(siteVisitedBy);
        // const folderPath_siteLog = "../RunClub.net.au-express-data";
        fs.appendFile("siteLog" + '.txt',siteVisitedBy + '\r\n',(err) => {
            if (err){
                console.log("site visit - updated siteLog err\n");
            } else {
                console.log("site visit - updated siteLog OK\n");
            }
        });
        break;
    case '/myIPify_TT':
        res.send(v_ipAddressForwarded);
        const TTsiteVisitedBy = `TT site visited by:- ${v_ipAddressForwarded} at ${Date().slice(0, 25)}\r\n`;
        console.log(TTsiteVisitedBy);
        // const folderPath_siteLog = "../RunClub.net.au-express-data";
        fs.appendFile("siteLog_TT" + '.txt',TTsiteVisitedBy + '\r\n',(err) => {
            if (err){
                console.log("TT site visit - updated siteLog err\n");
            } else {
                console.log("TT site visit - updated siteLog OK\n");
            }
        });
        break;
    case '/myIPify_BGF':
        res.send(v_ipAddressForwarded);
        const BGFsiteVisitedBy = `BGF site visited by:- ${v_ipAddressForwarded} at ${Date().slice(0, 25)}\r\n`;
        console.log(BGFsiteVisitedBy);
        // const folderPath_siteLog = "../RunClub.net.au-express-data";
        fs.appendFile("siteLog_BGF" + '.txt',BGFsiteVisitedBy + '\r\n',(err) => {
            if (err){
                console.log("BGF site visit - updated siteLog err\n");
            } else {
                console.log("BGF site visit - updated siteLog OK\n");
            }
        });
        break;
    case '/getATOrss':
        getATOrss(req,res);
        break;
    case '/getRBArss':
        getRBArss(req,res);
        break;
    // case '/emailATOrss':
    //     emailATOrss(req,res);
    //     break;
    case '/saveTheData':
        saveTheData(req,res);
        break;
    case '/getTickerData_ASX_MI':
        getTickerData_ASX_MI(req,res);
        break;
    case '/getTickerData_xyz':
        getTickerData.getTickerData_xyz(req,res);
        break;
    case '/getTickerData_ASX_G':
        getTickerData_ASX_G(req,res);
        break;
    case '/getTickerData_google':
        getTickerData.getTickerData_google(req,res);
        break;
    case '/getTickerData_ASX_YH':
        getTickerData_ASX_YH(req,res);
        break;
    case '/getTickerData_yahoo':
        getTickerData.getTickerData_yahoo(req,res);
        break;
    case '/getTickerData_ASX_AX':
        getTickerData_ASX_AX(req,res);
        break;
    case '/getTickerData_afr':
        getTickerData.getTickerData_afr(req,res);
        break;
    case '/getTickerData_financialtimes':
        getTickerData.getTickerData_financialtimes(req,res);
        break;
    case '/getTickerData_ASX_MS':
        getTickerData_ASX_MS(req,res);
        break;
    case '/getVanguardETFs':
        getVanguardETFs(req,res);
        break;
    case '/getTickerData_CommSec':
        getTickerData_CommSec(req,res);
        break;
    case '/getASXannouncements':
        getASXannouncements(req,res);
        break;
    case '/txtFromClient':
        txtFromClient(req,res);
        break;
    case '/logAnalytics':
        logAnalytics(req,res);
        break;
    }
});
// SERVER REQUESTS LOG end

function emailSiteVisit(emailBody){
//     nodeoutlook.sendEmail({
//     auth: {
//         user: "Net.IT.Australia@outlook.com",
//         pass: "SonicBroom.000"
//     },
//     // from: '"No-Reply email from Net It Australia" <Net.IT.Australia@outlook.com>',
//     from: '"Net.IT.Australia@outlook.com',
//     to: 'd.garton@outlook.com',
//     subject: 'update from Net IT Australia',
//     // html: '<b>Do Not reply to this email.</b>',
//     html: `<p>${emailBody}</p>`,
//     text: 'This is text version!',
//     replyTo: 'NoReply@outlook.com',
//     onError: (e) => console.log(e),
//     onSuccess: (i) => console.log(i)
// });
}

// RECORD ANALYTICS start
// app.post('/logAnalytics_Beacon',(req) => {
async function logAnalytics_Beacon(req){
    // console.log(req.body);
    v_csvText = '' 
        + req.body.v_sessionId + ',' 
        + req.body.v_sessionStartDateTime + ',' 
        + req.body.v_sessionSecondsAlive + ',' 
        + req.body.v_sessionSecondsDuration + ',' 
        + req.body.v_wheelRolls + ',' 
        + req.body.v_navKeyPresses + ',' 
        + req.body.v_menuClicks + ',' 
        + req.body.v_sessionEventsHistory + ',' 
        + req.body.v_dateNow + ',' 
        + req.body.v_timeNow + ','  
        + req.body.v_timeNow + ','  
        + req.body.v_clientOS + ','  
        + req.body.v_browser + ',' 
        + timeStampString() + '\n';
    // console.log(v_csvText);
    // fs.appendFile('../../SiteStatistics/netit/' + req.body.v_sessionId + '.csv', v_csvText ,(err) => {
    // });
    // fs.appendFile('../../SiteStatistics/netit-com-au.csv', v_csvText ,(err) => {
    // });
    console.log('$$$ Server received analytics from client via sendBeacon. $$$\n',Date().slice(0,25));
}
// app.post('/logAnalytics',(req,res) => {
async function logAnalytics(req,res){
    console.log("YES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(req.body);
    v_csvText = '' 
        + req.body.v_sessionId + ',' 
        + req.body.v_sessionStartDateTime + ',' 
        + req.body.v_sessionSecondsAlive + ',' 
        + req.body.v_sessionSecondsDuration + ',' 
        + req.body.v_wheelRolls + ',' 
        + req.body.v_navKeyPresses + ',' 
        + req.body.v_menuClicks + ',' 
        + req.body.v_sessionEventsHistory + ',' 
        + req.body.v_dateNow + ',' 
        + req.body.v_timeNow + ','  
        + req.body.v_timeNow + ','  
        + req.body.v_clientOS + ','  
        + req.body.v_browser + ',' 
        + timeStampString() + '\n';
    // console.log(v_csvText);
    // fs.appendFile('../../SiteStatistics/netIT/' + req.body.v_sessionId + '.csv', v_csvText ,(err) => {
    // });
    // fs.appendFile('../../SiteStatistics/turramurra-trotters-analytics.csv', v_csvText ,(err) => {
    // });
    const v_data = JSON.stringify(
        {
            v_csvData: v_csvText
        }
    );
    res.send(v_data);
    res.end();
}
app.post('/recordAnalytics',(req,res) => {
    // v_csvText = req.body.v_date + ',' + req.body.v_time + ','  + req.body.v_sessionId + ',' + req.body.v_analyticDescription + ',' + req.body.v_analyticValue + ',' + req.body.v_timeStampString + '\n';
    // // console.log(v_csvText);
    // fs.appendFile('../../SiteStatistics/turramurra-trotters-analytics.csv', v_csvText ,(err) => {
    // });
    // const v_data = JSON.stringify(
    //     {
    //         v_csvData: v_csvText
    //     }
    // );
    // res.send(v_data);
    // res.end();
});
// RECORD ANALYTICS end

// app.post('/txtFromClient',(req,res) => {
function txtFromClient(req,res){
    console.log('txtFromClient:- ' + req.body.v_txt + '\n' + Date().slice(0,25) + '\n');
    res.end();
}

function timeStampString(){
    const v_dateNow = new Date(); 
    var v_fullYear = v_dateNow.getFullYear();
    var v_month = v_dateNow.getMonth()+1;
    if (v_month<10)(v_month="0"+v_month);
    var v_day = v_dateNow.getDate();
    if (v_day<10)(v_day="0"+v_day);
    var v_hour = v_dateNow.getHours();
    if (v_hour<10)(v_hour="0"+v_hour);
    var v_minute = v_dateNow.getMinutes();
    if (v_minute<10)(v_minute="0"+v_minute);
    var v_second = v_dateNow.getSeconds();
    if (v_second<10)(v_second="0"+v_second);
    var v_millisecond = v_dateNow.getMilliseconds();
    if (v_millisecond<10)(v_millisecond="0"+v_millisecond);
    if (v_millisecond<100)(v_millisecond="0"+v_millisecond);
    const v_timeStampStr = "now" + v_fullYear + v_month + v_day + v_hour + v_minute + v_second + v_millisecond;
    // console.log("v_timeStampString:- ",v_timeStampStr);
    return v_timeStampStr;
}

// async function getATOrss(req, res){
//     console.log('line 279 /getATOrss req.body:- ' + JSON.stringify(req.body));
//     // ATO - All new information
//     // This news feed contains all new information from the Tax Office.
//     await fetch('https://www.ato.gov.au/rss.aspx?category=145')    
//     // Super
//     // await fetch('https://www.ato.gov.au/rss.aspx?category=2040')
//     .then(res => {
//         // using await to ensure that the promise resolves
//         // console.log('/getATOrss:- res.text:- ',res);
//         // console.log('/getATOrss:- res.text:- ',res.text);
//         return res.text();
//     })
//     .then(res_xml => {
//         // console.log('/getATOrss:- res_xml:- ',res_xml);
//         // res.send('{"getATOrssSuper":' + res_xml + '}');
//         res.send(res_xml);
//         res.end();
//     });
// }

// function emailATOrss(req,res){
//     // console.log('line 300 /emailATOrss req.body.emailBody:- ' + JSON.stringify(req.body.emailBody));
//     nodeoutlook.sendEmail({
//         auth: {
//             user: "Net.IT.Australia@outlook.com",
//             pass: "SonicBroom.000"
//         },
//         // from: '"No-Reply email from Net It Australia" <Net.IT.Australia@outlook.com>',
//         from: '"Net.IT.Australia@outlook.com',
//         to: 'support@netit.com.au',
//         bcc: 'd.garton@outlook.com.au',
//         subject: 'update from Net IT Australia',
//         html: JSON.stringify(req.body.emailBody),
//         // html: `<p>${emailBody}</p>`,
//         text: 'This is text version!',
//         replyTo: 'support@netit.com.au',
//         onError: (e) => console.log(e),
//         onSuccess: (i) => console.log(i)
//     });
//     // .then(res =>{
//     //     return res.text();
//     // })
//     // .then(response =>{
//     //     res.send("done",response);
//     //     res.end();
//     // });
// }

async function getRBArss(req, res){
    console.log('line 320 /getRBArss req.body:- ' + JSON.stringify(req.body));
    await fetch('https://www.rba.gov.au/rss/rss-cb-bulletin.xml')    
    .then(res => {
        // using await to ensure that the promise resolves
        // console.log('/getRBArss:- res.text:- ',res);
        // console.log('/getRBArss:- res.text:- ',res.text);
        return res.text();
    })
    .then(res_xml => {
        // console.log('/getRBArss:- res_xml:- ',res_xml);
        // res.send('{"getRBArssSuper":' + res_xml + '}');
        res.send(res_xml);
        res.end();
    })
}

// TEST COMMS begin /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
app.post('/commsPostCheck',(req,res) => {
    console.log("comms check - POST fetch:- server received client request OK")
    console.log(req.body);
    res.send({text: "server response - POST fetch:- text sent from server to client OK" });
    res.end();
});
app.post('/commsGetCheck',(req,res) => {
    console.log("comms check - GET fetch:- server received client request OK")
    console.log(req.body);
    res.send({text: "server response - GET fetch:- text sent from server to client OK" });
    res.end();
});
// TEST COMMS end /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

// // same time daily START
//     setInterval(go, 1000 * 60);
//     // setInterval(go, 1000 * 60 * 0.1);
//     function go() {
//         doThisDaily(17,30);
//         // doThisDaily(4,30);
//     }
//     function doThisDaily(hh,mm){

//         // console.log('target hh:- ',hh,'target mm:- ',mm,'target minutes:- ',hh * 60 + mm);

//         // let timeNow = Date.now();
//         let timeNow = new Date();
//         // console.log('1. timeNow:- ',timeNow);
//         // console.log('1. timeNow.toString():- ',timeNow.toString());
//         let timeNowLocal = new Date(timeNow - new Date().getTimezoneOffset());
//         // console.log('2. timeNowLocal:- ',timeNowLocal);
//         // console.log('2. timeNowLocal.toString():- ',timeNowLocal.toString());
//         let timeNowMinutes = timeNow.getHours() * 60 + timeNow.getMinutes();
//         // console.log('timeNowMinutes:- ',timeNowMinutes);
//         let timeNowLocalMinutes = timeNowLocal.getHours() * 60 + timeNowLocal.getMinutes();
//         // console.log('timeNowLocalMinutes:- ',timeNowLocalMinutes);
//         // console.log(timeNowLocal - timeNow);
//         // console.log(timeNowLocalMinutes - timeNowMinutes);

//         if (timeNowMinutes === hh * 60 + mm){
//             let executionTime = new Date();
//             console.log('\n');
//             console.log('executionTime.toLocaleTimeString():- ',executionTime.toLocaleTimeString());
//             console.log('executionTime.getDay():- ',executionTime.getDay());
//             // console.log('executionTime.toTimeString():- ',executionTime.toTimeString());
//             // console.log('executionTime.toUTCString():- ',executionTime.toUTCString());
//             // console.log('\n');
//             // send ATO RSS emails only on weekdays START
//                 if (executionTime.getDay() === 0){
//                 } else if (executionTime.getDay() === 6){
//                 } else {
//                     sendATOrssALLupdate();
//                 }
//             // send ATO RSS emails only on weekdays END
//         }

//     }
//     // let myTime = new Date();
//     // console.log(myTime.toLocaleTimeString().slice(0,5),myTime.toLocaleTimeString().slice(9,11));
//     // console.log(myTime.toLocaleTimeString().slice(0,2));
//     // console.log(myTime.toLocaleTimeString().slice(3,5));
//     // console.log(myTime.toLocaleTimeString().slice(9,11));
//     // console.log('hh:- ',myTime.getHours(),'mm:- ',myTime.getMinutes());
// // same time daily END

// ATO RSS ALL email service START
    async function sendATOrssALLupdate(){
        let i,j;
        let itemCount=0;
        let pubDate;
        let rptDate;
        let res_html_temp = "";
        let res_html = "";
        let res_html_header = "";
        let res_html_footer = "";
        // await fetch('https://www.ato.gov.au/rss.aspx?category=145')    
        console.log(0);
        const resXML = await fetch('https://www.ato.gov.au/rss/all-new-information.xml');
        const res_xml = await resXML.text();
        // console.log(res_xml);

        res_html_header += `<div style="border:1px solid red;margin:5px;padding:10px;font-style:italic;color:navy;border-radius:20px;background-color:lightgrey">`;
        res_html_header += `&nbsp;&nbsp;Preparation date and time:- ${Date().toLocaleString().slice(0,25)}<br>`;
        // res_html_header += `&nbsp;&nbsp;Information sourced from:- <a href="https://www.ato.gov.au/rss/all-new-information.xml">https://www.ato.gov.au/rss/all-new-information.xml</a><br>`;
        res_html_header += `&nbsp;&nbsp;Information sourced from:- <a href="https://www.ato.gov.au/ato-forms/rss-news-feeds">https://www.ato.gov.au/ato-forms/rss-news-feeds</a><br>`;
        res_html_header += `&nbsp;&nbsp;A free subscription service, courtesy of NET IT Australia (https://www.netit.com.au)<br>`;
        res_html_header += `&nbsp;&nbsp;Send requests to <a href="mailto:subscriptions_ATO_RSS_feeds@netit.com.au">subscriptions_ATO_RSS_feeds@netit.com.au</a><br>`;
        res_html_header += `&nbsp;&nbsp;Issued weekdays at 5:30 pm<br>`;
        res_html_header += `</div>`;

        console.log(1);
        res_html += await parseXML(res_xml,0,res_html,true);
        res_html += "<br>";
        // res_html += '<hr style="border:1px solid black;color:black;">';
        // res_html += "<br>";

        console.log(2);
        res_html = await parseXML(res_xml,1,res_html,true);
        res_html += "<br>";
        // res_html += '<hr style="border:1px solid black;color:black;">';
        // res_html += "<br>";

        console.log(3);
        res_html = await parseXML(res_xml,2,res_html,true);
        res_html += "<br>";
        // res_html += '<hr style="border:1px solid black;color:black;">';
        // res_html += "<br>";

        console.log(4);
        res_html = await parseXML(res_xml,3,res_html,true);
        res_html += "<br>";
        // res_html += '<hr style="border:1px solid black;color:black;">';
        // res_html += "<br>";

        console.log(5);
        res_html = await parseXML(res_xml,4,res_html,true);
        res_html += "<br>";
        // res_html += '<hr style="border:1px solid black;color:black;">';
        // res_html += "<br>";

        console.log(6);
        res_html = await parseXML(res_xml,5,res_html,true);
        res_html += "<br>";
        // res_html += '<hr style="border:1px solid black;color:black;">';
        // res_html += "<br>";

        console.log(7);
        res_html = await parseXML(res_xml,6,res_html,true);
        res_html += "<br>";
        res_html += '<hr style="border:1px solid black;color:black;">';
        // res_html += "<br>";

        sendEmail(res_html_header + res_html);
        function parseXML(res_xml,daysOffset,res_html,skipStartDateHeading){
            let currentDate = new Date();
            // console.log(`currentDate:- ${currentDate.toLocaleDateString()}`);
            let myDate = new Date(`"${currentDate}"`);
            // console.log('myDate:- ',myDate);
            // console.log('myDate:- ',myDate.toLocaleString());
            rptDate = new Date(myDate - (60 * 60 * 24 * 1000 * parseFloat(daysOffset)));
            // console.log('myDate:- ',myDate,'rptDate:- ',rptDate);
            console.log('myDate:- ',myDate.toLocaleString(),'rptDate:- ',rptDate.toLocaleString());
            // console.log('retrieveATOrss:- res_xml.length:- ',res_xml.length);
            // console.log('\n');
            // // date heading START
            //     if (skipStartDateHeading == true){
            //         skipStartDateHeading = false;
            //     } else {
                    res_html += '<hr style="border:1px solid black;color:black;">';
                    // res_html += 'Updates from:- ' + aWeekDayNames[rptDate.getDay()] + ", " + rptDate.toLocaleString().slice(0,10) + "<br>";
                    res_html += 'Updates from:- ' + aWeekDayNames[rptDate.getDay()] + ", " + rptDate.getDate() + " " + aMonthNames[rptDate.getMonth()] + " " + rptDate.getFullYear() + "<br>";
            //     }
            // // date heading END
            // start ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                for (i = 0; i < res_xml.length; i++){
                    if (res_xml.slice(i,i+7)==="<image>"){
                        for (j=i;j<res_xml.length;j++){
                            if (res_xml.slice(j,j+8)==="</image>"){
                                i=j;
                            }
                        }
                    } else if (res_xml.slice(i,i+7)==="<title>"){
                        for (j=i;j<res_xml.length;j++){
                            if (res_xml.slice(j,j+8)==="</title>"){
                                // console.log("ATO update");
                                // console.log("TITLE:- " + res_xml.slice(i+7,j));
                                if(itemCount == 0){
                                    // // res_html_footer += rptDate.toLocaleString().slice(0,10) + "<br>";
                                    // // res_html_footer += '<hr style="border:1px solid red;color:red">';
                                    // res_html_footer += `<div style="x-border:1px solid red;margin:5px;padding:10px;font-style:italic;color:navy;border-radius:20px;background-color:lightgrey">`;
                                    // res_html_footer += `&nbsp;&nbsp;Preparation date and time:- ${rptDate.toLocaleString()}`;
                                    // res_html_footer += `&nbsp;&nbsp;ATO update<br>`;
                                    // res_html_footer += `&nbsp;&nbsp;TITLE:- ${res_xml.slice(i+7,j)}<br>`;
                                } else {
                                    res_html_temp += `<br>&nbsp;&nbsp;ATO update ${itemCount}<br>`;
                                    res_html_temp += "&nbsp;&nbsp;TITLE:- " + res_xml.slice(i+7,j) + "<br>";
                                }
                                i=j;
                                break;
                            }
                        }
                    } else if (res_xml.slice(i,i+6)==="<link>"){
                        for (j=i;j<res_xml.length;j++){
                            if (res_xml.slice(j,j+7)==="</link>"){
                                // console.log("LINK:- " + res_xml.slice(i+6,j));
                                if(itemCount != 0){
                                    res_html_temp += `&nbsp;&nbsp;LINK:- <a href="${res_xml.slice(i+6,j)}" style="color:blue;">${res_xml.slice(i+6,j)}</a><br>`;
                                }
                                i=j;
                                break;
                            }
                        }
                    } else if (res_xml.slice(i,i+13)==="<description>"){
                        for (j=i;j<res_xml.length;j++){
                            if (res_xml.slice(j,j+14)==="</description>"){
                                // console.log("DESCRIPTION:- " + res_xml.slice(i+13,j));
                                if(itemCount != 0){
                                    res_html_temp += "&nbsp;&nbsp;DESCRIPTION:- " + res_xml.slice(i+13,j) + "<br>";
                                }
                                i=j;
                                break;
                            }
                        }
                    } else if (res_xml.slice(i,i+9)==="<pubDate>"){
                        for (j=i;j<res_xml.length;j++){
                            if (res_xml.slice(j,j+10)==="</pubDate>"){
                                // console.log("PUBLISHED:- " + res_xml.slice(i+9,j));
                                // console.log("");
                                if (itemCount == 0){
                                    // // res_html_footer += "A free subscription service, courtesy of NET IT Australia (https://www.netit.com.au):- " + res_xml.slice(i+9,j) + "<br>";
                                    // res_html_footer += `&nbsp;&nbsp;Information sourced from:- <a href="https://www.ato.gov.au/rss/all-new-information.xml">https://www.ato.gov.au/rss/all-new-information.xml</a><br>`;
                                    // res_html_footer += `&nbsp;&nbsp;A free subscription service, courtesy of NET IT Australia (https://www.netit.com.au)<br>`;
                                    // // res_html_footer += '<hr style="border:1px solid red;color:red"><br>';
                                    // res_html_temp += `</div>`
                                    // // console.log(res_html_footer);
                                    pubDate = new Date(res_xml.slice(i+9,j));
                                } else {
                                    res_html_temp += "&nbsp;&nbsp;PUBLISHED:- " + res_xml.slice(i+9,j) + "<br>";
                                    pubDate = new Date(res_xml.slice(i+9,j));
                                    // console.log(pubDate);
                                }
                                // res_html_temp += "<br>";
                                i=j;
                                break;
                            }
                        }
                    }
                    if (typeof pubDate === "undefined"){
                        // console.log('IF typeof pubDate === "undefined":- ',pubDate);
                    } else if (pubDate.length === 0){
                        // console.log('IF pubDate.length === 0:- ',pubDate);
                    } else {
                        // console.log('ELSE:- ',pubDate);
                        // console.log(pubDate.toLocaleString(),rptDate.toLocaleString());
                        // console.log(pubDate.toLocaleString().slice(0,10),rptDate.toLocaleString().slice(0,10));
                        if (pubDate.toLocaleString().slice(0,10) === rptDate.toLocaleString().slice(0,10)){
                            res_html += res_html_temp;
                            res_html_temp = "";
                            pubDate = "";
                            itemCount += 1;
                        } else {
                            // res_html += rptDate.toLocaleString().slice(0,10);
                            res_html_temp = "";
                            pubDate = "";
                        }
                    }
                }
            // end ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            return res_html;
        }
        function sendEmail(res_html){
            nodeoutlook.sendEmail({
                auth: {
                    user: "Net.IT.Australia@outlook.com",
                    pass: "SonicBroom.000"
                },
                // from: '"No-Reply email from Net It Australia" <Net.IT.Australia@outlook.com>',
                from: '"Net.IT.Australia@outlook.com',
                to: 'subscriptions_ATO_RSS_feeds@netit.com.au',
                // bcc: 'd.garton@outlook.com.au;donald@bgfinancial.net.au;stephen@bgfinancial.net.au;Railesh@bgfinancial.net.au;charlotte@bgfinancial.net.au;grace@bgfinancial.net.au;faye@bgfinancial.net.au;felicia@bgfinancial.net.au;peter@bgfinancial.net.au',
                // bcc: 'les.bryce1@gmail.com;geeparadis@gmail.com',
                bcc: 'les.bryce1@gmail.com',
                subject: 'ATO RSS feeds.  Daily update.',
                // html: JSON.stringify(req.body.emailBody),
                html: res_html,
                // text: 'This is text version!',
                replyTo: 'subscriptions_ATO_RSS_feeds@netit.com.au',
                onError: (e) => console.log(e),
                // onSuccess: (i) => console.log(i)
                onSuccess: (i) => console.log("ATO RSS email sent OK\n")
            });        
        }
    }
    // // sendATOrssALLupdate();
    // const date0 = new Date();
    // const date0Time = date0.getTime();
    // // const date0TimeAdjusted = date0Time.setHours();
    // const date1 = new Date("2023-07-10T00:05:00Z");
    // const date1Time = date1.getTime();
    // // console.log("date",new Date());
    // // console.log("date0",date0);
    // // console.log("date1",date1);
    // // console.log("date0Time",date0Time);
    // // console.log("date1Time",date1Time);
    // const timeDelay = date1Time - date0Time;
    // // console.log("time delay in minutes",(date1Time - date0Time) / 60 / 60 / 24);
    // setTimeout(() =>{
    //    sendATOrssALLupdate();
    //    const intervalID1 = setInterval(sendATOrssALLupdate, 1000 * 60 * 60 * 24);
    // },
    // timeDelay)
// ATO RSS ALL email service END

// // isServerRunning() START
//     const intervalID2 = setInterval(isServerRunning, 1000 * 60 * 60);
//     async function isServerRunning(){
//         var started = Date().slice(0, 25);
//         await nodeoutlook.sendEmail({
//             auth: {
//                 user: "Net.IT.Australia@outlook.com",
//                 pass: "SonicBroom.000"
//             },
//             // from: '"No-Reply email from Net It Australia" <Net.IT.Australia@outlook.com>',
//             from: '"Net.IT.Australia@outlook.com',
//             to: 'support@netit.com.au',
//             // bcc: 'd.garton@outlook.com.au;donald@bgfinancial.net.au',
//             subject: 'Net IT Australia Server is running',
//             // html: JSON.stringify(req.body.emailBody),
//             html: `<p>Net IT Australia Server is running. ${started}</p>`,
//             text: 'This is text version!',
//             replyTo: 'support@netit.com.au',
//             onError: (e) => console.log(e),
//             // onSuccess: (i) => console.log(i)
//             onSuccess: (i) => console.log(`Email sent:- "message from Net IT Australia Server"<p>Server is running. ${started}</p>`)
//         });
//     }
// // isServerRunning() END