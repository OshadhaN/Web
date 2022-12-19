let adultcost = 0;
let children15cost = 0;
let children6cost = 0;
let halfprice = 0;
let fullprice = 0;
let twoDysPrice = 0;
let passCost = 0;
let tokenCost = 0;
let lPrice = 0;

const currentOrder = document.getElementById('current');

//Increase & decrease Local adults & current order cost change
    function localAdult(click){
        const LAdult = document.getElementById('LAdult');
        const LAdultvalue = parseInt(LAdult.innerText)+click;
        LAdult.innerText = LAdultvalue;
    
        if(LAdultvalue<0){
            LAdult.innerText=0;
            Price.innerText=(0 + children6cost + children15cost + halfprice + fullprice + twoDysPrice + passCost + tokenCost);
        }
    
    //Current order change
        if(LAdultvalue>0){
            currentOrder.textContent = 1;
        }
        else if(LAdultvalue==0){
            currentOrder.textContent = 0;
        }
    
    //Current order cost change (Local adult)
        const Price=document.getElementById("currentPrice")
        let adultPrc=2500
        adultcost = parseInt(adultPrc) * parseInt(LAdultvalue);
        Price.textContent= adultcost;
    
        Price.textContent =parseInt(adultcost + children15cost + halfprice + fullprice + twoDysPrice + passCost + tokenCost);
    }
    
    const Children15 = document.getElementById('Lchildren15');
    //Increase & decrease Local children under age 15 & current order cost change
    function LChildren15(click){
        const Children15 = document.getElementById('Lchildren15');
        const children15value = parseInt(Children15.innerText) + click;
        Children15.innerText = children15value;
    
        if(children15value < 0){
            Children15.innerText = 0;
            Price.innerText = (0 + adultcost + children6cost + passCost + tokenCost);
        }
    
        //Current order change
        if(children15value>0){
            currentOrder.textContent = 1;
        }else if(children15value==0){
            currentOrder.textContent = 0;
        }
    
    
    //Current order cost change (Local children below age 15)
        const Price=document.getElementById("currentPrice") 
        let childrenprc15 = 1000;
        children15cost = parseInt(childrenprc15) * parseInt(children15value)
        Price.textContent = children15cost;
    
        Price.textContent=parseInt(adultcost + children15cost + halfprice + fullprice + twoDysPrice + passCost + tokenCost);
    }
    
    
    const LChildren6 = document.getElementById('LChildren6');
    //Increase & decrease Local children under age 6 & current order cost change
    function Children6(click){
        const LChildren6 = document.getElementById('LChildren6');
        const LChildren6value = parseInt(LChildren6.innerText) + click;
        LChildren6.innerText = LChildren6value;
    
        if(LChildren6value < 0){
            LChildren6.innerText = 0;
            Price.innerText=(0 + adultcost + children15cost + halfprice + fullprice + twoDysPrice + passCost + tokenCost);
        }
    
        //Current order change
        if(LChildren6value>0){
            currentOrder.textContent = 1;
        }
        else if(LChildren6value==0){
            currentOrder.textContent = 0;
        }
    
    //Current order cost change (Local children below age 6) 
        const Price=document.getElementById("currentPrice")
        let childrenprc6 = 500;
        children6cost = parseInt(childrenprc6) * parseInt(LChildren6value);
        Price.textContent = children6cost;
    
        Price.textContent=parseInt(adultcost + children15cost + children6cost + halfprice + fullprice + twoDysPrice + passCost + tokenCost);
    
        
    }
    
    
//Duration
const Price=document.getElementById("currentPrice");
    
    let threeHrPrc = 0;
    let LHalfDayPrc = 250;
    let LFullDayPrc = 500;
    let LTwoDaysprc = 1000;

let time = document.querySelectorAll("input[name='duration']");
    for (let i = 0; i < time.length; i++) {
    time[i].addEventListener("change", durationTime);
    }

function durationTime() {
    if (this.value == "3hours") {
        Price.textContent = parseInt(0 + children6cost + adultcost + children15cost + passCost + tokenCost);
    }
    else if (this.value == "12hours") {
        halfprice = parseInt(LHalfDayPrc);
        Price.textContent = parseInt(halfprice + children6cost + adultcost + children15cost + passCost + tokenCost);
    }
    else if (this.value == "24hours") {
        fullprice = parseInt(LFullDayPrc);
        Price.textContent = parseInt(fullprice + children6cost + adultcost + children15cost + passCost + tokenCost);
        }
    else if (this.value == "48hours") {
        twoDysPrice = parseInt(LTwoDaysprc);
        Price.textContent = parseInt(twoDysPrice + children6cost + adultcost + children15cost + passCost + tokenCost);
        }
}

    const Pass = document.getElementById('pass');
    //Annual pass
    function pass(click){
        const Pass = document.getElementById('pass');
        const  passValue= parseInt(Pass.innerText)+click;
        Pass.innerText = passValue;
    
        if(passValue<0){
            Pass.innerText=0;
            Price.innerText=(0 + children6cost + adultcost + children15cost + halfprice + fullprice + twoDysPrice + tokenCost);
        }
    
        //Current order change
        if(passValue>0){
            currentOrder.textContent = 1;
        }
        else if(passValue==0){
            currentOrder.textContent = 0;
        }
    
        const Price=document.getElementById("currentPrice")
        let passPrc=5000
        passCost = parseInt(passPrc) * parseInt(passValue);
        Price.textContent= passCost;
            
        Price.textContent=parseInt(children6cost + adultcost + children15cost + halfprice + fullprice + twoDysPrice + passCost + tokenCost);
    }
    
    const Token = document.getElementById('token');
    //Food token 
    function token(click){
        const Token = document.getElementById('token');
        const  tokenValue= parseInt(Token.innerText)+click;
        Token.innerText = parseInt(tokenValue);
    
        if(tokenValue<0){
            Token.innerText=0;
            Price.innerText=(0 + children6cost + adultcost + children15cost + halfprice + fullprice + twoDysPrice + passCost);
        }
    
        //Current order change
        if(tokenValue>0){
            currentOrder.textContent = 1;
        }
        else if(tokenValue==0){
            currentOrder.textContent = 0;
        }
    
        const Price = document.getElementById("currentPrice");
        let tokenPrc = parseInt(500);

        tokenCost = parseInt( tokenPrc) * parseInt(tokenValue);
        Price.textContent = tokenCost;
            
        Price.textContent=parseInt(children6cost + adultcost + children15cost + halfprice + fullprice + twoDysPrice + passCost + tokenCost);
    }
    
    // Function Add to order button
    const btnAddToOrder = document.getElementById('addToOrder');
    const overallOrder = document.getElementById('overall');
    const overallPrice=document.getElementById("overallPrice")
    btnAddToOrder.addEventListener("click", Change);
    
    var total = 0;
    var Prices;
    var fPrices;
    var i;

    
    
    function change(name){
        if(currentOrder.innerText!=0){
            total ++;
            overallOrder.innerText = total;
            currentOrder.innerText = 0;
        }
        
        //overall cost increment
        
        fPrices = parseInt(fAdultcost) + parseInt(fChildcost) + parseInt(fThreeHrsprice) + parseInt(fHalfprice) + parseInt(fFullprice) + parseInt(fTwoDysprice) + parseInt(fpassCost) + parseInt(ftokenCost);
        Prices =  parseInt(passCost) + parseInt(tokenCost) + parseInt(halfprice) + parseInt(fullprice) + parseInt(twoDysPrice) + parseInt(adultcost) + parseInt(children15cost) + parseInt(children6cost);
        

        if(currentPrice.innerText != 0){
            overallPrice.textContent = parseInt(Prices) + parseInt(fPrices);
            currentPrice.innerText=0;
        }
        
        const radioBtns = document.querySelectorAll(
            "input[type='radio'][name='" + name + "']");
            radioBtns.forEach((radioBtn) => {
                if(radioBtn.checked === true)
                radioBtn.checked = false;
            });

    }

    function Change(){
        children6cost = 0;
        adultcost = 0;
        children15cost = 0;
        halfprice = 0;
        fullprice = 0;
        twoDysPrice = 0;
        passCost = 0;
        tokenCost = 0;

        LAdult.innerText = 0;
        Children15.innerText = 0;
        LChildren6.innerText = 0;
        Pass.innerText = 0;
        Token.innerText = 0;


        fAdultcost = 0;
        fChildcost = 0; 
        fThreeHrsprice = 0; 
        fHalfprice = 0; 
        fFullprice = 0; 
        fTwoDysprice = 0; 
        fpassCost = 0; 
        ftokenCost = 0;

        FAdult.innerText = 0;
        fChild.innerText = 0;
        fPass.innerText = 0;
        fToken.innerText = 0;

    }

const btnSubmit = document.getElementById('placeOrder');
btnSubmit.addEventListener('click', Order);
var Nama = document.getElementsByName("nama");

    function Order(){
        const overallOrder = document.getElementById('overall');
        var Nama = document.getElementById("nama");
        if(overallOrder.innerText>0){
            alert(`${Nama.value} you have successfully booked a train seat!\nYour train is Udarata Menike.\nEnjoy your journey...!`);   
        }
        else{
            alert("Incomplete order");
        }
    }


//Foreign
let fAdultcost = 0;
let fChildcost = 0;
let fThreeHrsprice = 0;
let fHalfprice = 0;
let fFullprice = 0;
let fTwoDysprice = 0;
let fpassCost = 0;
let ftokenCost = 0;
let fPrice = 0;


//Increase & decrease Foreign adults & current order cost change
function foreignAdult(click){
    const FAdult = document.getElementById('FAdult');
    const FAdultvalue = parseInt(FAdult.innerText)+click;
    FAdult.innerText = FAdultvalue;

    if(FAdultvalue<0){
        FAdult.innerText=0;
        Price.innerText=(0 + fChildcost + fThreeHrsprice + fHalfprice + fFullprice + fTwoDysprice + fpassCost + ftokenCost);
    }

//Current order change
    if(FAdultvalue>0){
        currentOrder.textContent = 1;
    }
    else if(FAdultvalue==0){
        currentOrder.textContent = 0;
    }

//Current order cost change (Foreign adult)
    const Price=document.getElementById("currentPrice")
    let fAdultPrc=3000
    fAdultcost = parseInt(fAdultPrc) * parseInt(FAdultvalue);
        
    Price.innerText=parseInt(fAdultcost + fChildcost + fThreeHrsprice + fHalfprice + fFullprice + fTwoDysprice + fpassCost + ftokenCost);
}


const fChild = document.getElementById('fChild');
    //Increase & decrease Foreign child & current order cost change
    function fchild(click){
        const fChild = document.getElementById('fChild');
        const fChildvalue = parseInt(fChild.innerText) + click;
        fChild.innerText = fChildvalue;
    
        if(fChildvalue < 0){
            fChild.innerText = 0;
            Price.innerText = (0 + fAdultcost + fpassCost + ftokenCost);
        }
    
        //Current order change
        if(fChildvalue>0){
            currentOrder.textContent = 1;
        }else if(fChildvalue==0){
            currentOrder.textContent = 0;
        }
    
    
    //Current order cost change (Foreign child)
        const Price=document.getElementById("currentPrice") 
        let fChildprc = 2500;
        fChildcost = parseInt(fChildprc) * parseInt(fChildvalue);
    
        Price.textContent=parseInt(fAdultcost + fChildcost + fThreeHrsprice + fHalfprice + fFullprice + fTwoDysprice + fpassCost + ftokenCost);
    }


//Duration for foreigners
let FThreeHrPrc = 1000;
let FHalfDayPrc = 500;
let FFullDayPrc = 1000;
let FTwoDaysprc = 2000;

let ftime = document.querySelectorAll("input[name='duration']");
    for (let i = 0; i < ftime.length; i++) {
    ftime[i].addEventListener("change", fDurationTime);
    }

function fDurationTime() {
    if (this.value == "f3hours") {
        fThreeHrsprice = parseInt(FThreeHrPrc)
        Price.textContent = parseInt(fThreeHrsprice + fChildcost + fAdultcost + fpassCost + ftokenCost);
    }
    else if (this.value == "f12hours") {
        fHalfprice = parseInt(FHalfDayPrc);
        Price.textContent = parseInt(fHalfprice + fChildcost + fAdultcost + fpassCost + ftokenCost);
    }
    else if (this.value == "f24hours") {
        fFullprice = parseInt(FFullDayPrc);
        Price.textContent = parseInt(fFullprice + fChildcost + fAdultcost + fpassCost + ftokenCost);
        }
    else if (this.value == "f48hours") {
        fTwoDysprice = parseInt(FTwoDaysprc);
        Price.textContent = parseInt(fTwoDysprice + fChildcost + fAdultcost + fpassCost + ftokenCost);
        }
}

const fPass = document.getElementById('fpass');
//Annual pass
function fpass(click){
    const fPass = document.getElementById('fpass');
    const  fpassValue= parseInt(fPass.innerText)+click;
    fPass.innerText = fpassValue;

    if(fpassValue<0){
        fPass.innerText=0;
        Price.innerText=(0 + fAdultcost + fChildcost + fThreeHrsprice + fHalfprice + fFullprice + fTwoDysprice + ftokenCost);
    }

    //Current order change
    if(fpassValue>0){
        currentOrder.textContent = 1;
    }
    else if(fpassValue==0){
        currentOrder.textContent = 0;
    }

    const Price=document.getElementById("currentPrice")
    let fpassPrc=5000
    fpassCost = parseInt(fpassPrc) * parseInt(fpassValue);
        
    Price.textContent=parseInt(fAdultcost + fChildcost + fThreeHrsprice + fHalfprice + fFullprice + fTwoDysprice + fpassCost + ftokenCost);
}


const fToken = document.getElementById('ftoken');
//Food token 
function ftoken(click){
    const fToken = document.getElementById('ftoken');
    const  ftokenValue= parseInt(fToken.innerText)+click;
    fToken.innerText = ftokenValue;

    if(ftokenValue<0){
        fToken.innerText=0;
        Price.innerText=(0 + fAdultcost + fChildcost + fThreeHrsprice + fHalfprice + fFullprice + fTwoDysprice + fpassCost);
    }

    //Current order change
    if(ftokenValue>0){
        currentOrder.textContent = 1;
    }
    else if(ftokenValue==0){
        currentOrder.textContent = 0;
    }


    const Price=document.getElementById("currentPrice");
    let ftokenPrc=500
    ftokenCost = parseInt(ftokenPrc) * parseInt(ftokenValue);
        
    Price.textContent=parseInt(fAdultcost + fChildcost + fThreeHrsprice + fHalfprice + fFullprice + fTwoDysprice + fpassCost + ftokenCost);
}


