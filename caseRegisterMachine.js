const cashRegister = {
            itemsForSale : [
            {Name :"Phone" , Price :300 },
            {Name :"Smart Tv" , Price :220 },
            {Name :"Gaming Console" , Price :150 },
 ],
 shoppingCart : [], 

addItem: function (Name) {
    let itemFound = false;
    this.itemsForSale.map(item =>{
        if (item.Name == Name){
            this.shoppingCart.push(item);
            itemFound = true;
            console.log(`${item.Name}  $${item.Price} added to shopping cart.`)//$$ - one for price sign and second for access variable.
        }
    })
    if(!itemFound){   {

    }
        console.log("Not sell this items.")
    }
},
calculateTotalPrice: function() {
    return this.shoppingCart.reduce((accumalator, currentvalue) => accumalator +currentvalue.Price , 0);
  },
pay: function(paymentAmount){
    let totalPrice = this.calculateTotalPrice();
    if(totalPrice > 400){
       const discount = (totalPrice / 100) *10;
       totalPrice -= discount

    }
    if(paymentAmount == totalPrice){
        console.log("Thank you for shopping with us.")
    }
    else if(paymentAmount > totalPrice){
        console.log(`Thanks for shopping with us,and here is your remaining amount: $${(paymentAmount - totalPrice)}`);
    }
    else{
        console.log("You don't have enough money to buy this item.")
    }

}
};

cashRegister.addItem("Phone");
cashRegister.addItem("Smart Tv");
cashRegister.addItem("Game");

const totalPrice = cashRegister.calculateTotalPrice();
console.log(`Total Price is :${totalPrice}`);

cashRegister.pay(500);
cashRegister.pay(200); 



