
function generateQRCode() {
    var textinput = document.getElementById("textinput").value;
if (textinput) {
    var qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: textinput,
        width: 512,
        height: 512,
        colorDark:  "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    document.getElementById("qrcode-container").style.display = "block";
} else {
    alert("Введите значение!");
    }
}

function downloadQR() {
    var img = document.getElementById("qrcode").lastChild;
    var url = img.src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');   
    var downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "QR.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

