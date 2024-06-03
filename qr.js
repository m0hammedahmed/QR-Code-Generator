let imgbox = document.querySelector("#imgbox");
let qrimg = document.querySelector("#qrimg");
let qrtext = document.querySelector("#qrtext");

function generateQRCode() {
    if(qrtext.value.trim().length > 0){
        
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrtext.value);
        imgbox.classList.add("show_img");
    }
    else
    {
        
    }
}
