export async function fileUpload(files, successCallback, errCallback){
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const curriculum = JSON.parse(reader.result);
            isValidJsonUpload(reader) ? successCallback(curriculum) : errCallback("Invalid JSON file");
        } catch (err) {
            errCallback("Invalid JSON file");
        }
    }
    reader.onabort = () => alert('Process aborted!');
    reader.onerror = (e) => errCallback(e);
    reader.readAsText(files[0]);
}

function isValidJsonUpload(reader) {
    const curriculum = JSON.parse(reader.result);
    return curriculum && curriculum.name && curriculum.standards;
}