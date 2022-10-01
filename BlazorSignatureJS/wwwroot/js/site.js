function setSignature(element) {
    var canvas = document.getElementById(element.id)
    var signaturePad = new SignaturePad(canvas, {
        backgroundColor: 'rgba(255, 255, 255, 255)',
        penColor: 'rgb(0, 0, 0)'
    });

    document.getElementById('clear-signature').addEventListener('click', function () {
        signaturePad.clear();
    });

    return signaturePad.toDataURL();
}

function clearSignature(element) {
    var canvas = document.getElementById(element.id);
    var signaturePad = new SignaturePad(canvas, {
        backgroundColor: 'rgba(255, 255, 255, 255)',
        penColor: 'rgb(0, 0, 0)'
    });

    signaturePad.clear();
}

function getImageData(element) {
    var saveImage = element.toDataURL();
    return saveImage;
}