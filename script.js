//Coins hidden
//const penny = document.getElementById("penny");
//const nickel = document.getElementById("nickel");
//const dime = document.getElementById("dime");
//const quarter = document.getElementById("quarter");
//penny.style.display = "none";
//nickel.style.display = "none";
//dime.style.display = "none";
//quarter.style.display = "none";

const amountInput = document.getElementById("amount");
const coinInput = document.getElementById("coinType");
let displayCoins = document.getElementById("coinContainer");
const theForm = document.getElementById("theForm");

//When sumbit is clicked , make the specified number of coins appear.


theForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("button is clicked");
    let coinAmount = amountInput.value;
    let coin = coinInput.value;
    
    console.log(coin);
    console.log(coinAmount);

    //grab amount and type
    //display div and add multiple divs based on the 
    if(coin === "Penny"){
    //For loop to create number of divs given User Input number
        for(i=0; i < coinAmount; i++){    
        let penny = document.createElement("div");
        penny.setAttribute('id', 'penny');
        penny.innerText= "Penny";
        displayCoins.append(penny);
        penny.addEventListener("click", (event) => {
            console.log(event);
             penny.remove();
         });
        }
    } else if(coin === "Nickel"){
        for(i=0; i < coinAmount; i++){    
            let nickel = document.createElement("div");
            nickel.setAttribute('id', 'nickel');
            nickel.innerText= "Nickel";
            displayCoins.append(nickel);
            nickel.addEventListener("click", (event) => {
                nickel.remove();
            });
        }
    } else if(coin === "Dime"){
        for(i=0; i < coinAmount; i++){    
            let dime = document.createElement("div");
            dime.setAttribute('id', 'dime');
            dime.innerText= "Dime";
            displayCoins.append(dime);
            dime.addEventListener("click", (event) => {
                dime.remove();
            });            
        }
    } else{
        for(i=0; i < coinAmount; i++){    
            let quarter = document.createElement("div");
            quarter.setAttribute('id', 'quarter');
            quarter.innerText= "Quarter";
            displayCoins.append(quarter);
            quarter.addEventListener("click", (event) => {
                quarter.remove();
            });
        }
    }
});

