var lblA = document.createElement("label");
lblA.innerText = "Param a: ";
document.body.appendChild(lblA);

var txtA = document.createElement("input");
document.body.appendChild(txtA);

document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));

var lblB = document.createElement("label");
lblB.innerText = "Param b: ";
document.body.appendChild(lblB);

var txtB = document.createElement("input");
document.body.appendChild(txtB);

document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));

var lblKQ = document.createElement("label");
lblKQ.innerText = "Result: ";
document.body.appendChild(lblKQ);

var txtKQ = document.createElement("input");
txtKQ.setAttribute('disabled', true);
document.body.appendChild(txtKQ);

document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));

var btn = document.createElement("button");
btn.innerHTML = "Sum";
document.body.appendChild(btn);
btn.onclick = function() {
    var avalue = parseInt(txtA.value);
    var bvalue = parseInt(txtB.value);
    txtKQ.setAttribute('value', avalue + bvalue);
}