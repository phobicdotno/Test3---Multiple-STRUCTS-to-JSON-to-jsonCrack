function loadFilesMultiple() {
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
        const files = fileInput.files;
//        for (let i = 0; i < files.length; i++) {
//            parseMultipleXMLtoJSON(files[i]);
//        }
        parseMultipleXMLtoJSON(files);
        console.log(files);
    }
}

