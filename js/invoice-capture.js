// window.addEventListener("load", () => { START
window.addEventListener("load", () => {
    // Fully loaded!
    // console.log(`window.addEventListener("load") completed`);

    document.getElementById('supplierConnectEmail').addEventListener('submit', function(event) {
        event.preventDefault();
        // use browser email address validation, leave novalidate attribute off the form
            email = document.getElementById('supplierEmail').value
            console.log("Email address " + email + " submitted ok.")
        // use browser email address validation, leave novalidate attribute off the form
        async function supplierConnectEmail(email){
            const v_data = JSON.stringify(
                {
                    email: email
                }
            );
            const v_options = {method: 'POST', headers: {'Content-Type': 'application/json'},body: v_data};
            const url = "https://netit.com.au/cctConnectEmail";
            // const url = "/cctConnectEmail";
            await fetch(url,v_options)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then((res_data) => {
                console.log(res_data);
                if (res_data.message==="email address received by server"){
                    document.getElementById("supplierConnectCode").style.display = "block";
                    document.getElementById("supplierCode").value=null;
                }
            })
        }
        supplierConnectEmail(email);
    });
    document.getElementById('supplierConnectCode').addEventListener('submit', function(event) {
        event.preventDefault();
        email = document.getElementById('supplierEmail').value
        code = document.getElementById('supplierCode').value
        console.log("Email address " + email + " submitted ok.")
        console.log("Code " + code + " submitted ok.")
        async function supplierConnectCode(email,code){
            const v_data = JSON.stringify(
                {
                    email: email,
                    code: code
                }
            );
            const v_options = {method: 'POST', headers: {'Content-Type': 'application/json'},body: v_data};
            const url = "https://netit.com.au/cctConnectCode";
            // const url = "/cctConnectCode";
            await fetch(url,v_options)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then((res_data) => {
                console.log(res_data);
                if (res_data.message==="codes match"){
                    document.getElementById("uploadForm").style.display = "block";
                    // document.getElementById("supplierConnect").style.display = "none";
                    document.getElementById("supplierEmail").readonly=true;
                    document.getElementById("supplierEmail").disabled=true;
                    document.getElementById("supplierEmailButton").disabled=true;
                    document.getElementById("supplierCode").readonly=true;
                    document.getElementById("supplierCode").disabled=true;
                    document.getElementById("supplierCodeButton").disabled=true;
                }
            });
        }
        supplierConnectCode(email,code);
    });

    const myForm = document.getElementById("uploadForm");

    async function sendFiles() {
    // const sendFiles = async () => {
        // Object
        const form = document.getElementById('uploadForm');
        const myFiles = document.getElementById("myFiles").files;

        const formData = new FormData(form);

        // Append files to FormData
        Object.keys(myFiles).forEach(key => {
            formData.append(myFiles.item(key).name,myFiles.item(key));
        })

        // Append additional form fields to FormData
            // formData.append('key', 'value');
            formData.append('supplierEmail', document.querySelector('input[name="supplierEmail"]').value);

        // log the formData
            // Log the formData input fields
            for (let [name, value] of formData.entries()) {
                    console.log(`${name}: ${value}`);
                }
            // Log the formData entries
                for (let pair of formData.entries()) {
                    console.log(`${pair[0]}: ${pair[1]}`);
                }
            // Log the form data keys and values
                for (let [key, value] of formData.entries()) {
                    console.log(key, value);
                }

        // const url = 'http://localhost:2070/upload';
        const url = 'http://netit.com.au/upload';
        const response = await fetch(url,{
            method:'POST',
            headers: {
                'Access-Control-Allow-Origin',

            },
            body: formData
        });

        const resjson = await response.json();

        let h2a = document.getElementById('uploadStatus');
        // h2a.textContent = `Status: ${resjson.status}`
        h2a.innerHTML = `Status: ${resjson.status}`

        let h2b = document.getElementById('uploadMessage');
        // h2b.textContent = resjson.message.replaceAll("," ,", ");
        h2b.innerHTML = resjson.message.replaceAll("," ,"<br>");

        console.log(resjson);
    }

    myForm.addEventListener('submit',(e) => {
        e.preventDefault();
        sendFiles();
    });
    document.getElementById("uploadFormSubmit").addEventListener('click',(e) => {
        e.preventDefault();
        sendFiles();
    });

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
    myNode1.name = "invoiceLineItem_description" + invoiceLineItemsCount;
    myNode2.name = "invoiceLineItem_amount" + invoiceLineItemsCount;
    myNode3.name = "invoiceLineItem_tourNumber" + invoiceLineItemsCount;
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