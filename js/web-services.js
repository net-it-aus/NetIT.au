// GET ATO RSS FEEDS
async function getATOrss(){
    // https://www.ato.gov.au/RSS-news-feeds.aspx
    let html;
    const v_data = JSON.stringify(
        {
            v_variable: ""        }
    );
    const v_options = {method: 'POST', headers: {'Content-Type': 'application/json'},body: v_data};
    // if(getClientOS()=="Windows"){console.log('/getATOrss options:- ',v_options)};
    // console.log('/getATOrss options:- ',v_options);
    await fetch('/getATOrss',v_options)
    .then(res => {
        // console.log('getATOrss:- res:- ',res);
        // console.log('getATOrss:- res.body:- ',res.body);
        // // return res.json();
        return res.text();
    })
    .then((res_xml) => {
        let i;
        // console.log('getATOrss:- res_xml:- ',res_xml);
        // console.log('\n');
        for (i=0; i<res_xml.length;i++){
            if (res_xml.slice(i,i+7)==="<title>"){
                for (j=i;j<res_xml.length;j++){
                    if (res_xml.slice(j,j+8)==="</title>"){
                        // console.log("ATO update");
                        // console.log("TITLE:- " + res_xml.slice(i+7,j));
                        html += "ATO update<br>";
                        html += "TITLE:- " + res_xml.slice(i+7,j) + "<br>";
                        i=j;
                        break;
                    }
                }
            } else if (res_xml.slice(i,i+6)==="<link>"){
                for (j=i;j<res_xml.length;j++){
                    if (res_xml.slice(j,j+7)==="</link>"){
                        // console.log("LINK:- " + res_xml.slice(i+6,j));
                        html += `LINK:- <a href="${res_xml.slice(i+6,j)}" style="color:chartreuse;">` + res_xml.slice(i+6,j) + `</a><br>`;
                        i=j;
                        break;
                    }
                }
            } else if (res_xml.slice(i,i+13)==="<description>"){
                for (j=i;j<res_xml.length;j++){
                    if (res_xml.slice(j,j+14)==="</description>"){
                        // console.log("DESCRIPTION:- " + res_xml.slice(i+13,j));
                        html += "DESCRIPTION:- " + res_xml.slice(i+13,j) + "<br>";
                        i=j;
                        break;
                    }
                }
            } else if (res_xml.slice(i,i+9)==="<pubDate>"){
                for (j=i;j<res_xml.length;j++){
                    if (res_xml.slice(j,j+10)==="</pubDate>"){
                        // console.log("PUBLISHED:- " + res_xml.slice(i+9,j));
                        // console.log("");
                        html += "PUBLISHED:- " + res_xml.slice(i+9,j) + "<br>";
                        html += "<br>";
                        i=j;
                        break;
                    }
                }
            }
        }
        emailATOrss(html);
        return;
        document.getElementById("updates-ATO").innerHTML = html;
        //    res_xml = '<?xml version="1.0" encoding="utf-8"?><?xml-stylesheet type="text/xsl" href="xsl/atorss.xsl"?><rss version="2.0"><channel><title>ATO - Super</title><link>https://www.ato.gov.au</link><description /><language>en-au</language><pubDate>Thu, 16 Mar 2023 14:08:01</pubDate><image><url>img/logo-ato.gif</url><title>Australian Taxation Office</title><link>https://www.ato.gov.au</link></image><item><title>Self-managed super fund quarterly statistical report - December 2022</title><link>https://www.ato.gov.au/Super/Self-managed-super-funds/In-detail/Statistics/Quarterly-reports/Self-managed-super-fund-quarterly-statistical-report---December-2022/</link><description>What is included in our most recent statistical report for the self-managed super fund (SMSF) market.</description><pubDate>Thu, 9 Mar 2023 00:00:00</pubDate></item></channel></rss>'
        // ...what to look for
            //   <title>Self-managed super fund quarterly statistical report - December 2022</title>
            //   <link>https://www.ato.gov.au/Super/Self-managed-super-funds/In-detail/Statistics/Quarterly-reports/Self-managed-super-fund-quarterly-statistical-report---December-2022/</link>
            //   <description>What is included in our most recent statistical report for the self-managed super fund (SMSF) market.</description>
            //   <pubDate>Thu, 9 Mar 2023 00:00:00</pubDate>
        // ...what to look for
    })
}
// getATOrss();
async function emailATOrss(html){
    const v_data = JSON.stringify(
        {
            emailBody: html
        }
    );
    const v_options = {method: 'POST', headers: {'Content-Type': 'application/json'},body: v_data};
    await fetch('/emailATOrss',v_options)
    .then(res => {
        console.log(res);
        // // return res.json();
        // return res.text();
    });
}
// GET ATO RSS FEEDS

// GET RBA RSS FEEDS
async function getRBArss(){
    // https://www.rba.gov.au/updates/rss-feeds.html
    const v_data = JSON.stringify(
        {
            v_variable: ""        
        }
    );
    const v_options = {method: 'POST', headers: {'Content-Type': 'application/json'},body: v_data};
    // if(getClientOS()=="Windows"){console.log('/getRBArss options:- ',v_options)};
    // console.log('/getRBArss options:- ',v_options);
    await fetch('/getRBArss',v_options)
    .then(res => {
        // console.log('getRBArss:- res:- ',res);
        // console.log('getRBArss:- res.body:- ',res.body);
        // // return res.json();
        return res.text();
    })
    .then((res_xml) => {
        let i;
        // console.log('getRBArss:- res_xml:- ',res_xml);
        // console.log('\n');
        for (i=0; i<res_xml.length;i++){
            if (res_xml.slice(i,i+7)==="<title>"){
                for (j=i;j<res_xml.length;j++){
                    if (res_xml.slice(j,j+8)==="</title>"){
                        // console.log("RBA update");
                        // console.log("TITLE:- " + res_xml.slice(i+7,j));
                        i=j;
                        break;
                    }
                }
            } else if (res_xml.slice(i,i+6)==="<link>"){
                for (j=i;j<res_xml.length;j++){
                    if (res_xml.slice(j,j+7)==="</link>"){
                        // console.log("LINK:- " + res_xml.slice(i+6,j));
                        i=j;
                        break;
                    }
                }
            } else if (res_xml.slice(i,i+13)==="<description>"){
                for (j=i;j<res_xml.length;j++){
                    if (res_xml.slice(j,j+14)==="</description>"){
                        // console.log("DESCRIPTION:- " + res_xml.slice(i+13,j));
                        i=j;
                        break;
                    }
                }
            } else if (res_xml.slice(i,i+9)==="<dc:date>"){
                for (j=i;j<res_xml.length;j++){
                    if (res_xml.slice(j,j+10)==="</dc:date>"){
                        // console.log("PUBLISHED:- " + res_xml.slice(i+9,j));
                        // console.log("");
                        i=j;
                        break;
                    }
                }
            }
        }
        return;
        //    res_xml = '<?xml version="1.0" encoding="utf-8"?><?xml-stylesheet type="text/xsl" href="xsl/atorss.xsl"?><rss version="2.0"><channel><title>ATO - Super</title><link>https://www.ato.gov.au</link><description /><language>en-au</language><pubDate>Thu, 16 Mar 2023 14:08:01</pubDate><image><url>img/logo-ato.gif</url><title>Australian Taxation Office</title><link>https://www.ato.gov.au</link></image><item><title>Self-managed super fund quarterly statistical report - December 2022</title><link>https://www.ato.gov.au/Super/Self-managed-super-funds/In-detail/Statistics/Quarterly-reports/Self-managed-super-fund-quarterly-statistical-report---December-2022/</link><description>What is included in our most recent statistical report for the self-managed super fund (SMSF) market.</description><pubDate>Thu, 9 Mar 2023 00:00:00</pubDate></item></channel></rss>'
        // ...what to look for
            //   <title>Self-managed super fund quarterly statistical report - December 2022</title>
            //   <link>https://www.ato.gov.au/Super/Self-managed-super-funds/In-detail/Statistics/Quarterly-reports/Self-managed-super-fund-quarterly-statistical-report---December-2022/</link>
            //   <description>What is included in our most recent statistical report for the self-managed super fund (SMSF) market.</description>
            //   <pubDate>Thu, 9 Mar 2023 00:00:00</pubDate>
        // ...what to look for
        // let itemStart,itemEnd,titleStart, titleEnd,linkStart,linkEnd,descriptionStart,descriptionEnd,publishedStart,publishedEnd;
        // let charStart=0;
        // let charEnd=0;
        // // console.log('LENGTH:-',res_xml.length);
        // for (i=0; i<res_xml.length;i++){
        //     if (res_xml.slice(i,i+6)==="<item>"){
        //         itemStart = i;
        //         // console.log('itemStart:-',itemStart,res_xml.slice(i,i+6));
        //         for (a=i; a<res_xml.length;a++){
        //             if (res_xml.slice(a,a+7)==="<title>"){
        //                 titleStart = a;
        //                 // console.log('titleStart:-',titleStart,res_xml.slice(a,a+7));
        //                 for (b=a; b<res_xml.length;b++){
        //                     if (res_xml.slice(b,b+8)==="</title>"){
        //                         titleEnd = b;
        //                         // console.log('titleEnd:-',titleEnd,res_xml.slice(b,b+8));
        //                         console.log('\n');
        //                         console.log('title:-',res_xml.slice(titleStart+7,titleEnd));
        //                         for (c=b;c<res_xml.length;c++){
        //                             if (res_xml.slice(c,c+6)==="<link>"){
        //                                 linkStart = c;
        //                                 // console.log('linkStart:-',linkStart,res_xml.slice(c,c+6));
        //                                 for (d=c;d<res_xml.length;d++){
        //                                     if (res_xml.slice(d,d+7)==="</link>"){
        //                                         linkEnd = d;
        //                                         // console.log('linkEnd:-',linkEnd,res_xml.slice(d,d+7));
        //                                         console.log('link:-',res_xml.slice(linkStart+6,linkEnd));
        //                                         for (d1=d;d1<res_xml.length;d1++){
        //                                             if (res_xml.slice(d1,d1+13)==="<description>"){
        //                                                 descriptionStart = d1;
        //                                                 // console.log('descriptionStart:-',descriptionStart,res_xml.slice(d1,d1+13));
        //                                                 for (d2=d1;d2<res_xml.length;d2++){
        //                                                     if (res_xml.slice(d2,d2+14)==="</description>"){
        //                                                         descriptionEnd = d2;
        //                                                         // console.log('descriptionEnd:-',descriptionEnd,res_xml.slice(d2,d2+14));
        //                                                         console.log('description:-',res_xml.slice(descriptionStart+13,descriptionEnd));
        //                                                         for (e=d2;e<res_xml.length;e++){
        //                                                             if (res_xml.slice(e,e+9)==="<pubDate>"){
        //                                                                 publishedStart = e;
        //                                                                 // console.log('publishedStart:-',publishedStart,res_xml.slice(e,e+9));
        //                                                                 for (f=e;f<res_xml.length;f++){
        //                                                                     if (res_xml.slice(f,f+10)==="</pubDate>"){
        //                                                                         publishedEnd = f;
        //                                                                         // console.log('publishedEnd:-',publishedEnd,res_xml.slice(f,f+10));
        //                                                                         console.log('published:-',res_xml.slice(publishedStart+9,publishedEnd));
        //                                                                         for (g=f;g<res_xml.length;g++){
        //                                                                             if (res_xml.slice(g,g+7)==="</item>"){
        //                                                                                 itemEnd = g;
        //                                                                                 // console.log('itemEnd:-',itemEnd,res_xml.slice(g,g+7));
        //                                                                                 console.log('');
        //                                                                                 i=g+1;
        //                                                                             } else {
        //                                                                                 i=g+1;
        //                                                                             }
        //                                                                         }
        //                                                                     }
        //                                                                 }
        //                                                             }
        //                                                         }
        //                                                     }
        //                                                 }
        //                                             }
        //                                         }
        //                                     }
        //                                 }
        //                             }
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
        // writeToLocalStorage('clickedTickerPrice',res_data.price);
        // writeToLocalStorage('clickedTickerDateTime',v_dateTime);
        // writeToLocalStorage(`lastPrice_CommSec_${p_ticker}`,res_data.price);
        // writeToLocalStorage(`lastDateTime_CommSec_${p_ticker}`,v_dateTime);
        // return res_data.price;
    })
}
// getRBArss();
// GET ATO RSS FEEDS