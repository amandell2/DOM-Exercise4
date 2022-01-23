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

//When sumbit is clicked , make the specified number of coins appear.
//on click, display coin using class
const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("button is clicked");
    let coinAmount = amountInput.value;
    let coin = coinInput.value;
    console.log(coin);
    console.log(coinAmount);

    //grab amount and type
    //display div and add multiple divs based on the 
    if(coinInput.id === "coinP"){
        let displayCoins = document.createElement("div");
        let penny = document.createElement("div");
        penny.setAttribute('id', 'penny');
        displayCoins.body.append(penny);
    }
});
