/*

function turnToPage(url) {
    var xhr = new XMLHttpRequest();
    // var img = document.getElementById("qr");
    xhr.open("POST", "http://" + document.domain + "/web/share.do", true);
    xhr.setRequestHeader("content-type", "text/html");
    xhr.responseType = "blob";
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var blob = this.response;
                if (blob.type.indexOf("image") >= 0) {
                    var reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onload = function (e) {
                        var bf = this.result;
                        console.log(bf);
                        // alert(bf);
                        // var newWindow = window.open();

                        // newWindow.document.write("<img src='" + bf + "'>");
                        // doc.close();
                        var img = document.getElementById("qr");
                        img.src = bf;
                        img.style = "display: inline";
                        // document.open(doc);
                        // window.open(doc);

                    }
                } else {
                    var d = new Response(blob).json();
                    d.then(res => {
                        console.log(res.code);
                        alert(res.message);
                    })
                }
            }
        }
    }
    xhr.send(url);
}
*/