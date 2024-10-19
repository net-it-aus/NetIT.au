// window.addEventListener("load", () => { START
window.addEventListener("load", () => {
    // Fully loaded!
    // console.log(`window.addEventListener("load") completed`);

    var myBody = document.getElementsByTagName("BODY")[0];
    myBody.addEventListener("mousemove",(event)=>{
        logSiteVisit();
    },{once: true});
    myBody.addEventListener("touchstart",(event)=>{
        logSiteVisit();
    },{once: true});

    function logSiteVisit(){
        console.log("mousemove detected");
        // // GEOLOCATION start
        //     function getLocation() {
        //         if (navigator.geolocation) {
        //             navigator.geolocation.getCurrentPosition(showPosition);
        //         } else {
        //             // x.innerHTML = "Geolocation is not supported by this browser.";
        //             console.log("Geolocation is not supported by this browser.");
        //         }
        //     }
        //     getLocation();
        //     function showPosition(position) {
        //         // x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
        //         console.log("Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
        //     }
        // // GEOLOCATION end
        // IPADDRESS start
            // // external source START
            //     fetch('https://api.ipify.org/?format=json')
            //     .then(res => res.json())
            //     .then(data => console.log(data.ip))
            //     .catch(err => console.log(err))
            // // external source END
            // mySERVER start
            const data = JSON.stringify(
                {
                    variable: "nothing"
                }
            );
            const options = {method: 'POST', headers: {'Content-Type': 'application/json','mode': 'no-cors'},body: data};
            // fetch('https://netit.com.au/myIPify_BRO');
            // fetch('http://localhost:2070/myIPify_BRO',options);
            // mySERVER end
        // IPADDRESS end
        // triggerSiteVisit();
    }

    // connection / login START
        document.getElementById('connectionEmailAddress').addEventListener('blur', async (event) => {
            // event.preventDefault();
            console.log(event.target.value);
            const emailAddress = event.target.value;
            // const fetchURL = 'https://www.netit.com.au/cctConnect';
            const fetchURL = 'http://localhost:2070/cctConnect';
            const fetchOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ connectionEmailAddress: emailAddress })
            };
            // try {
            //     const response = await fetch('https://www.netit.com.au/cctConnect',
            //      {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({connectionEmailAddress: emailAddress})
            //     });
        
            //     if (response.ok) {
            //         console.log('File uploaded successfully');
            //     } else {
            //         console.error('File upload failed');
            //     }
            // } catch (error) {
            //     console.error('Error:', error);
            // }
            const response = await fetch(fetchURL, fetchOptions)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        });
    // connection / login END

    // files-input upload using DIV ~ START
        document.getElementById('files-input').addEventListener('change', function(event) {
            const files = event.target.files;
            const preview = document.getElementById('files-preview');
            const progressBar = document.getElementById('progress-bar');
            preview.innerHTML = '';
            progressBar.style.width = '0%';
            progressBar.textContent = '0%';        
            for (const file of files) {
                const fileDiv = document.createElement('div');
                fileDiv.textContent = file.name;
                preview.appendChild(fileDiv);
            }
            // Simulate file upload progress
            let progress = 0;
            const interval = setInterval(() => {
                if (progress >= 100) {
                    clearInterval(interval);
                    document.getElementById("send-email").style.display = "block";
                } else {
                    progress += 10;
                    progressBar.style.width = progress + '%';
                    progressBar.textContent = progress + '%';
                }
            }, 500);
        });
    // files-input upload using DIV ~ END

    // // files-sendEmail using EMAILJS START
    //     document.getElementById('send-email').addEventListener('click', function() {
    //         const filesSelected = document.getElementById('file-input');
    //         const files = fileInput.files;        
    //         if (files.length === 0) {
    //             alert('Please select files to upload.');
    //             return;
    //         }
    //         const formData = new FormData();
    //         for (const file of files) {
    //             formData.append('files[]', file);
    //         }
    //         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
    //             .then(function(response) {
    //                 console.log('SUCCESS!', response.status, response.text);
    //                 alert('Email sent successfully!');
    //             }, function(error) {
    //                 console.log('FAILED...', error);
    //                 alert('Failed to send email.');
    //             });
    //     });
    // // files-sendEmail using EMAILJS END

    // //  files-sendEmail using DEFAULT EMAIL CLIENT START
    //     document.getElementById('send-email').addEventListener('click', function() {
    //         const email = "donald.garton@netit.com.au";
    //         const subject = "Hello!";
    //         // const body = `<html><body><h1>This is a test email.\n</h1></body></html>`; // DOESN'T WORK
    //         const body = `This is a test email.\n\n...put more body text`;
    //         const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    //         window.location.href = mailtoLink;
    //     });
    // //  files-sendEmail using DEFAULT EMAIL CLIENT END

    //  files-sendEmail using nodemailer server-side START
        document.getElementById('send-email').addEventListener('click', function() {
            const fileInput = document.getElementById('file-input');
            const files = fileInput.files;
            const formData = new FormData();
            for (const file of files) {
                formData.append('files[]', file);
            }
            console.log(formData);
        });
    //  files-sendEmail using nodemailer server-side END

    // uploadForm START
        // version 1 START
            // document.getElementById('uploadForm').addEventListener('submit', async (event) => {
            //     event.preventDefault();            
            //     const files = document.getElementById('files');
            //     const file = files.files[0];
            //     const formData = new FormData();
            //     formData.append('file', file);
            //     try {
            //         const response = await fetch('https://www.netit.com.au/cctUpload', {
            //             method: 'POST',
            //             body: formData
            //         });
            //         if (response.ok) {
            //             console.log('File uploaded successfully');
            //         } else {
            //             console.error('File upload failed');
            //         }
            //     } catch (error) {
            //         console.error('Error:', error);
            //     }
            // });
        // version 1 END
        // version 2 START
            // document.getElementById('uploadForm').addEventListener('submit', (event) => {
            //     event.preventDefault();
            //     const files = document.getElementById('files');
            //     const file = files.files[0];
            //     const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif','application/pdf'];        
            //     if (!allowedTypes.includes(file.type)) {
            //         alert('Error!\nFile type: ' + file.type + '\nis not allowed!');
            //         return;
            //     }
            //     const formData = new FormData();
            //     formData.append('file', file);        
            //     fetch('https://netit.com.au/cctUpload', {
            //         method: 'POST',
            //         body: formData
            //     })
            //     .then(response => response.ok ? console.log('File uploaded successfully') : console.error('File upload failed'))
            //     .catch(error => console.error('Error:', error));
            // });
        // version 2 END
        // version 3 START
            document.getElementById('uploadForm').addEventListener('submit', (event) => {

                event.preventDefault();

                const myForm = event.target;
                const formData = new FormData(myForm);

                const files = document.getElementById('files').files;
                for (let i = 0; i < files.length; i++) {
                    // formData.append('key', value);
                    formData.append('files', files[i]);
                }
                for (const pair of formData.entries()) {
                    // console.log(pair[0]," ~ ", pair[1]);
                    console.log(pair[0]," ~ ", pair[1].name," ",(pair[1].size/1024).toFixed(0) + "KB");
                }
                // fetch('https://netit.com.au/cctUpload', {
                fetch('http://localhost:2070/cctUpload', {
                    method: 'POST',
                    // headers: {
                    //     'Authorization': 'Bearer your-token'
                    //     // 'Custom-Header': 'value'
                    // },
                    body: formData
                })
                .then(response => response.text())
                .then(result => {
                    console.log('Files uploaded status:', result);
                })
                .catch(error => {
                    console.error('Error uploading files:', error);
                });
            });
        // version 3 END
    // uploadForm END
    

        // IPADDRESS start
            // // external source START
            //     fetch('https://api.ipify.org/?format=json')
            //     .then(res => res.json())
            //     .then(data => console.log(data.ip))
            //     .catch(err => console.log(err))
            // // external source END
            // mySERVER start
            const data = JSON.stringify(
                {
                    variable: "nothing"
                }
            );
            const options = {method: 'POST', headers: {'Content-Type': 'application/json','mode': 'no-cors'},body: data};
            // fetch('https://netit.com.au/myIPify_BRO');
            // fetch('http://localhost:2070/myIPify_BRO',options);
            fetch('http://localhost:2070/txtFromClient',options);
            // mySERVER end
        // IPADDRESS end

})
// window.addEventListener("load", () => { END


// add additional Invoice Line Items START
    let invoiceLineItemsCount = 1 // 0 is headings; 1 is first line item
    function addInvoiceLineItem(){
        invoiceLineItemsCount += 1;
        const myDiv = document.createElement("div");
        const myNode1 = document.createElement("input");
        const myNode2 = document.createElement("input");
        const myNode3 = document.createElement("input");
        myNode1.type = "text";
        myNode2.type = "text";
        myNode3.type = "text";
        myNode1.id = "invoiceLineItem_description" + invoiceLineItemsCount;
        myNode2.id = "invoiceLineItem_amount" + invoiceLineItemsCount;
        myNode3.id = "invoiceLineItem_tourNumber" + invoiceLineItemsCount;
        myNode1.classList.add("invoiceLineItem_description");
        myNode2.classList.add("invoiceLineItem_amount");
        myNode3.classList.add("invoiceLineItem_tourNumber");
        myDiv.appendChild(myNode1);
        myDiv.appendChild(myNode2);
        myDiv.appendChild(myNode3);
        myDiv.classList.add("invoiceLineItem");
        myDiv.id = "invoiceLineItem" + invoiceLineItemsCount;
        document.getElementById("invoiceLineItems").appendChild(myDiv);
    }
// add additional Invoice Line Items END