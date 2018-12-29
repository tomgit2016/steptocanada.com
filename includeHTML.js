function includeAll() {
    includeHeader();
    includeRightColumn();
    includeFooter();
}

function includeHeader() {
    var header, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    // header = document.getElementsByTagName("HEAD")[0];
    header = document.getElementById("head");
    file = "header.html";
    if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) { header.innerHTML = this.responseText; }
                if (this.status == 404) { header.innerHTML = "Page not found."; }
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
    }
}

function includeRightColumn() {
    var header, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    // header = document.getElementsByTagName("HEAD")[0];
    header = document.getElementById("rightcolumn");
    file = "rightColumn.html";
    if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) { header.innerHTML = this.responseText; }
                if (this.status == 404) { header.innerHTML = "Page not found."; }
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
    }
}
function includeFooter() {
    var footer, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    footer = document.getElementById("footer");
    file = "footer.html";
    if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) { footer.innerHTML = this.responseText; }
                if (this.status == 404) { footer.innerHTML = "Page not found."; }
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
    }
}
