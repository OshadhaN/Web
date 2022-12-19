const btnDonate = document.getElementById('donatebtn');
btnDonate.addEventListener('click', donate);
var dMsg = document.getElementsByName('amount');
let cardNum = document.getElementById("cNum").value

function donate(){
    let cardNum = document.getElementById("cNum").value
    let cvv = document.getElementById("securitycode").value
    var dMsg = document.getElementsByName('amount');
    let name = document.getElementById("name");
    if(cardNum != "" && cvv != "" && name != ""){
        for(i = 0; i< dMsg.length; i++){
            if(dMsg[i].checked)
            alert(`${name.value} you have successfully donated ${dMsg[i].value} LKR...!`);
        }
    }
}