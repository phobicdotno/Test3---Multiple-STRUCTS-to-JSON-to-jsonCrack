let jsonData;
function parseMultipleXMLtoJSON(files) {
    console.log('parseMultipleXMLtoJSON is running');

    // DEBUG //    
    /*
    if (typeof files !== "undefined" && files instanceof FileList) {
        console.log("files is an object of FileList with length of "+files.length);
        // your code here
    } else {
        console.log("files is not defined or not an object of FileList");
    }   
    if (files.length > 0) {
        console.log("file(s) available inside the files object")
        // your code here
    } else {
        console.log("no file(s) available inside the files object")
    }*/
    // DEBUG //    

    for (let i = 0; i < files.length; i++) {
        let fileIndex = i;
        console.log(i);
        const reader = new FileReader();
        reader.onload = function() {
            let data = reader.result;
            data = data.substring(data.indexOf("TYPE"));
            data = data.substring(0, data.lastIndexOf("END_TYPE"));
            jsonData = textToJSON(data);
            document.getElementById("json-text").innerHTML = "";
            document.getElementById("json-text").innerHTML = JSON.stringify(jsonData, null, 4);
            document.getElementById("file-text").innerHTML = data;
            if(jsonData !== null){
                let tab = document.createElement("div");
                tab.textContent = "File " + (fileIndex + 1);
                tab.classList.add("tab");
                document.querySelector(".tabs-container").appendChild(tab);
                sendToEmbed();
            }
        }
        reader.readAsText(files[i]);
    }
}
