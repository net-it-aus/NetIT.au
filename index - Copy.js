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
const express = require('express');
const fs = require('fs');
const app = express();

// npm i bent
const bent = require('bent')
// npm install node-fetch --save
const fetch = require('node-fetch');

//  tell the express server to host static files in the 'public' folder
app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('images'));
app.use(express.static('js'));
app.use(express.static('resources'));

//  access functions stored in investor-get-ticker-prices.js
// const getTickerData = require('./mjs/investor-get-ticker-data.jms');
const getTickerData = require('./js/investor-get-ticker-data.js');

//  tell the express server to recognise incoming data as JSON
app.use(express.json({limit: '1mb'}));

var helmet = require('helmet')
app.use(helmet());

const os = require('os');
console.log('total memory:- ',os.totalmem()/1000000000);
console.log('free memory:- ',os.freemem()/1000000000);
fs.appendFile('../../SiteStatistics/netIT/RAMcheck.csv', 'total memory:- ' + os.totalmem()/1000000000 + " | " + 'free memory:- ' + os.freemem()/1000000000 + '\n' ,(err) => {
});

// nodemailer initial - start
"use strict";
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'netit.com.au@gmail.com',
        //   pass: 'SydneyBus207'
        // application-specific password set up for:- "Mail",(not outlook) and "Windows" START
        pass: 'elkqzpchxxxdched'
        // application-specific password set up for:- "Mail",(not outlook) and "Windows" END
    }
});
// nodemailer initial - end

console.log(Date().slice(0,25));
  app.listen( process.env.PORT || v_portNumber, () => { 
  console.log('netIT.com.au server is listening at port ' + v_portNumber + '\n');
});

// // SERVER REQUESTS LOG start
// app.set('trust proxy', '8.8.8.8');
// app.all('*', (req, res) => {
//     // const v_ipAddress = req.connection.remoteAddress;
//     const v_ipAddress = req.ip;
//     console.log('netIT.com.au req.ip:- ' + req.ip + ' req.ips:- ' + req.ips  + ' req.method:- ' + req.method + ' date/time:- ' + Date().slice(0,25));
// });
// // SERVER REQUESTS LOG end

// SERVER REQUESTS LOG start
app.all('*', (req, res) => {
    const v_ipAddress = req.connection.remoteAddress;
    const v_ipAddressForwarded = req.headers['x-forwarded-for'];
    console.log('total memory:- ',os.totalmem()/1000000000);
    console.log('free memory:- ',os.freemem()/1000000000);
    console.log(`incoming IP address:-  ${v_ipAddress}`);
    console.log(`app.all req.connection.remoteAddressForwarded:- ${v_ipAddressForwarded}`);
    console.log('app.all req.url:- ', req.url);
    console.log(`app.all req date:- ${Date().slice(0, 25)}\n`);

    switch (req.url) {
    case '/parseRawCSV':
        parseRawCSV(req,res);
        break;
    case '/getCurrentFile':
        getCurrentFile(req,res);
        break;
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

// app.post('/getHTMLPageLastSavedDate',(req,res) => {
// //   console.log('/getHTMLPageLastSavedDate body:- ',req.body);
//   console.log('/getHTMLPageLastSavedDate body.htmlPage:- ',req.body.htmlPage);
//   // fs.stat('./server.js', function read(err, data) {
//   // fs.stat('./sites/netitcomau/public/index.html', function read(err, data) {
//   fs.stat('public/index.html', function read(err, data) {
//           if (err) {
//           throw err;
//       }
//       var stats = data;
//       console.log('mtimeMs:- ',stats.mtimeMs,Date().slice(0,25));
//       res.send({'mtimeMs': stats.mtimeMs,'fileName': req.body.htmlPage});
//       res.end();
//   });
// });

// COMMSEC
async function getTickerData_CommSec(req, res){
  console.log('/getTickerData_CommSec req.body:- ' + req.body);
  console.log('/getTickerData_CommSec req.body.v_ticker:- ' + req.body.v_ticker);
  // get html text from ...?
  // https://www2.commsec.com.au/quotes/summary?stockCode=LTR&exchangeCode=ASX
  await fetch('https://www2.commsec.com.au/quotes/summary?stockCode=' + req.body.v_ticker + '&exchangeCode=' + req.body.v_market)
  .then(res => {
      // using await to ensure that the promise resolves
      return res.text();
  })
  .then(res_text => {
      console.log('/getTickerData_CommSec:- res_text',res_text);
      const nStart = 20 + res_text.search("{marketPrice:{value:");
      var tickerPrice = 0;
      if (nStart < 20){
          console.log('/getTickerData_CommSec nStart:- ' + nStart);
          tickerPrice = "0.00";
      } else {
          const str1 = res_text.slice(nStart,res_text.length);
          // // console.log('str1:- ',str1);
          const nEnd = str1.search(',');
          tickerPrice = res_text.slice(nStart,nStart+nEnd);
      }
      console.log('/getTickerData_CommSec tickerPrice:- ',tickerPrice);
      res.send('{"price":' + tickerPrice + '}');
      res.end();
  })
}

// MORNINGSTAR
async function getTickerData_ASX_MS(req, res){
  console.log('/getTickerData_ASX_MS req.body:- ' + req.body);
  console.log('/getTickerData_ASX_MS req.body.v_ticker:- ' + req.body.v_ticker);
  // get html text from ...?
  await fetch('https://www.morningstar.com/stocks/xasx/' + req.body.v_ticker + '/quote')
  .then(res => {
      // using await to ensure that the promise resolves
      return res.text();
  })
  .then(res_text => {
      // console.log('/getTickerData_ASX_MS:- res_text',res_text);
      const nStart = 20 + res_text.search("{marketPrice:{value:");
      var tickerPrice = 0;
      if (nStart < 20){
          console.log('/getTickerData_ASX_MS nStart:- ' + nStart);
          tickerPrice = "0.00";
      } else {
          const str1 = res_text.slice(nStart,res_text.length);
          // // console.log('str1:- ',str1);
          const nEnd = str1.search(',');
          tickerPrice = res_text.slice(nStart,nStart+nEnd);
      }
      console.log('/getTickerData_ASX_MS tickerPrice:- ',tickerPrice);
      res.send('{"price":' + tickerPrice + '}');
      res.end();
  })
}

// ASX - NOT WORKING
async function getTickerData_ASX_AX(req, res){
  console.log('/getTickerData_ASX_AX req.body:- ' + req.body);
  console.log('/getTickerData_ASX_AX req.body.v_ticker:- ' + req.body.v_ticker);
  // get html text from ...?
  await fetch('https://www2.asx.com.au/markets/company/' + req.body.v_ticker)
  .then(res => {
      // using await to ensure that the promise resolves
      return res.text();
  })
  .then(res_text => {
      console.log('/getTickerData_ASX_AX:- res_text',res_text);
      // res.send('{"/getTickerData_ASX_AX:- v_response.text():-":' + v_text + '}');
      // const nStart = 17 + v_text.search('data-last-price="');
      // const str1 = v_text.slice(nStart,v_text.length);
      // // console.log('str1:- ',str1);
      // const nEnd = str1.search('"');
      // const tickerPrice = v_text.slice(nStart,nStart+nEnd);
      // console.log('tickerPrice:- ',tickerPrice);
      res.send('{"price":' + tickerPrice + '}');
      res.end();
  })
}

// MARKET INDEX - NOT WORKING
async function getTickerData_ASX_MI(req, res){
  console.log('/getTickerData_ASX_MI req.body:- ' + req.body);
  console.log('/getTickerData_ASX_MI req.body.v_ticker:- ' + req.body.v_ticker);
  console.log('/getTickerData_ASX_MI req.body.v_market:- ' + req.body.v_market);
  // 
  // https://www.marketindex.com.au/asx/drr
  // 
  await fetch('https://www.marketindex.com.au/asx/' + req.body.v_ticker)
  .then(res => {
      // using await to ensure that the promise resolves
      return res.text()
  })
  .then(res_text => {
      console.log('/getTickerData_ASX_MI res_text:- ',res_text);
      // res.send('{"/getTickerData_ASX_MI:- v_response.text():-":' + v_text + '}');
      // const nStart = 17 + v_text.search('data-last-price="');
      // const str1 = v_text.slice(nStart,v_text.length);
      // // console.log('str1:- ',str1);
      // const nEnd = str1.search('"');
      // const tickerPrice = v_text.slice(nStart,nStart+nEnd);
      // console.log('tickerPrice:- ',tickerPrice);
      // res.send('{"price":' + tickerPrice + '}');
      res.end();
  })
}

// AUSTRALIAN FINANCIAL REVIEW
async function getTickerData_ASX_FR(req, res){
  console.log('/getTickerData_ASX_FR req.body:- ' + req.body);
  console.log('/getTickerData_ASX_FR req.body.v_ticker:- ' + req.body.v_ticker);
  console.log('/getTickerData_ASX_FR req.body.v_market:- ' + req.body.v_market);
  // 
  // https://www.afr.com/company/asx/fmg
  // 
  await fetch('https://www.afr.com/company/asx/' + req.body.v_ticker)
  .then(res => {
      // using await to ensure that the promise resolves
      return res.text()
  })
  .then(res_text => {
      // console.log('/getTickerData_ASX_FR v_response.text():- ' + res_text);
      // <!doctype html><html lang="en"
      // ,\"lastPrice\":\"
      const nStart = 15 + res_text.search('"lastPrice');
      if (nStart < 15){
          console.log('/getTickerData_ASX_FR nStart:- ' + nStart);
          var tickerPrice = "0.00";
      } else if (res_text.slice(0,15) !== "<!doctype html>"){
          console.log('/getTickerData_ASX_FR res_text.slice(0,15):- ' + res_text.slice(0,15));
          var tickerPrice = "0.00";
      } else {
          console.log('/getTickerData_ASX_FR res_text.slice(0,15):- ' + res_text.slice(0,15));
          const str1 = res_text.slice(nStart,res_text.length);
          // console.log('str1:- ',str1);
          const nEnd = str1.search('"');
          var tickerPrice = res_text.slice(nStart,nStart+nEnd-1);
      }
      console.log('/getTickerData_ASX_FR tickerPrice:- ',tickerPrice,'\n');
      res.end('{"price":' + tickerPrice + '}');
      // res.end();
  });
}

// GOOGLE
async function getTickerData_ASX_G(req, res){
  console.log('/getTickerData_ASX_G req.body:- ' + req.body);
  console.log('/getTickerData_ASX_G req.body.v_ticker:- ' + req.body.v_ticker);
  console.log('/getTickerData_ASX_G req.body.v_market:- ' + req.body.v_market);
  // 
  // https://www.google.com/finance/quote/APA:ASX THEN CLICK THE SHARE BUTTON AND COPY THE LINK ON NEXT LINE
  // const v_response = await fetch('https://g.co/finance/APA:ASX');
  // ASX delayed 20 minutes
  // 
  await fetch('https://g.co/finance/' + req.body.v_ticker + ':' + req.body.v_market)
  .then(res => {
      // using await to ensure that the promise resolves
      return res.text()
  })
  .then(res_text => {
      // console.log('/getTickerData_ASX_G v_response.text():- ' + res_text);
      // <!doctype html><html lang="en"
      // data-entity-label="      AIZ:ASX"
      // data-exchange="          ASX"
      // data-currency-code="          AUD"
      // data-last-price="
      // data-last-normal-market-timestamp="      1627612236"
      // data-tz-offset=      36000000>
      const nStart = 17 + res_text.search('data-last-price="');
      if (nStart < 17){
          console.log('/getTickerData_ASX_G nStart:- ' + nStart);
          var tickerPrice = "0.00";
      } else if (res_text.slice(0,15) !== "<!doctype html>"){
          console.log('/getTickerData_ASX_G res_text.slice(0,15):- ' + res_text.slice(0,15));
          var tickerPrice = "0.00";
      } else {
          console.log('/getTickerData_ASX_G res_text.slice(0,15):- ' + res_text.slice(0,15));
          const str1 = res_text.slice(nStart,res_text.length);
          // console.log('str1:- ',str1);
          const nEnd = str1.search('"');
          var tickerPrice = res_text.slice(nStart,nStart+nEnd);
      }
      console.log('/getTickerData_ASX_G tickerPrice:- ',tickerPrice,'\n');
      res.end('{"price":' + tickerPrice + '}');
      // res.end();
  });
}

// YAHOO
async function getTickerData_ASX_YH(req, res){
  console.log('/getTickerData_ASX_YH req.body:- ' + req.body);
  console.log('/getTickerData_ASX_YH req.body.v_ticker:- ' + req.body.v_ticker);
  console.log('/getTickerData_ASX_YH req.body.v_market:- ' + req.body.v_market);
  const goFetch = async () => {
      // get html text from ...?
      // const response = await fetch('https://au.finance.yahoo.com/quote/APA.AX?p=APA.AX');
      const response = await fetch('https://au.finance.yahoo.com/quote/' + req.body.v_ticker + '.' + req.body.v_market + '?p=' + req.body.v_ticker + '.' + req.body.v_market);
      // using await to ensure that the promise resolves
      const v_text = await response.text();
      // console.log(v_text);
      // const nStart = 9 + v_text.search('"APA.AX":{');
      // const nStart = 9 + v_text.search('"' + req.body.v_ticker + '.' + req.body.v_market + '":{');
      const nStart = 1+req.body.v_ticker.length+1+req.body.v_market.length+2 + v_text.search('"' + req.body.v_ticker + '.' + req.body.v_market + '":{');
      console.log('/getTickerData_ASX_YH:- nStart:- \n',nStart);
      if (nStart < 200000){
          console.log('/getTickerData_ASX_YH:- tickerTEXT:- \nUnsuccessful.\n');
          res.end('{"regularMarketPrice":' + 0 + '}');
      }
      const str1 = v_text.slice(nStart,v_text.length);
      const nEndTemp = str1.search('"tradeable":');
      const str2 = v_text.slice(nStart+nEndTemp,v_text.length);
      const nEnd = str2.search("}")
      const tickerTEXT = v_text.slice(nStart,nStart+nEndTemp+nEnd+1);
      console.log('/getTickerData_ASX_YH:- tickerTEXT:- \n',v_text.slice(nStart,nStart+nEndTemp+nEnd+1) + '\n');
      // DO THIS ON THE CLIENT
          // var tickerPrice = tickerTEXT.json(); 
          // console.log('tickerPrice:- \n', tickerPrice);
          // res.send('{"price":' + tickerPrice + '}');
      // DO THIS ON THE CLIENT
      res.send(tickerTEXT);
      res.end();
  }
  goFetch();
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
    fs.appendFile('../../SiteStatistics/tt/' + req.body.v_sessionId + '.csv', v_csvText ,(err) => {
    });
    fs.appendFile('../../SiteStatistics/turramurra-trotters-analytics.csv', v_csvText ,(err) => {
    });
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
    fs.appendFile('../../SiteStatistics/netIT/' + req.body.v_sessionId + '.csv', v_csvText ,(err) => {
    });
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
// app.post('/recordAnalytics',(req,res) => {
//     v_csvText = req.body.v_date + ',' + req.body.v_time + ','  + req.body.v_sessionId + ',' + req.body.v_analyticDescription + ',' + req.body.v_analyticValue + ',' + req.body.v_timeStampString + '\n';
//     // console.log(v_csvText);
//     fs.appendFile('../../SiteStatistics/turramurra-trotters-analytics.csv', v_csvText ,(err) => {
//     });
//     const v_data = JSON.stringify(
//         {
//             v_csvData: v_csvText
//         }
//     );
//     res.send(v_data);
//     res.end();
// });
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


