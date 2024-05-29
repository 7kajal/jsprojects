const products =[
    {Name:"productA", Price:10, Stock:54, Category:"category1"},   
    {Name:"productB", Price:30, Stock:0, Category:"category2"},
    {Name:"productC", Price:400, Stock:50, Category:"category3"},
    {Name:"productD", Price:50, Stock:0, Category:"category4"},
    {Name:"productE", Price:320, Stock:70, Category:"category1"},
    {Name:"productF", Price:67, Stock:60, Category:"category1"},
    {Name:"productG", Price:90, Stock:130, Category:"category2"},
    {Name:"productH", Price:200, Stock:140, Category:"category4"},
];

const cart = [ ];

const addToCart = (Name, Category) =>{
  const filteredProduct =  products.filter(product => product.Category === Category);
  let productFound = false;
  filteredProduct.forEach(product => { 
    if(product.Name === Name) {
        productFound = true ;
        if(product.Stock > 0){
            cart.push(product);
            console.log(`${Name} is in stock and added to cart.`) // Product found and in stock  
        }
        else{
            console.log(`${Name} out of stock.`) // product found but not in stock
        }
    }
  });
  if(!productFound){
  console.log(`${Name} not found in  ${Category}.`);// product not found
  }
};

addToCart("productA" , "category1");
addToCart("productG" , "category2");
addToCart("productH" , "category4");
addToCart("productE" , "category1");
addToCart("productB" , "category2");
addToCart("productP" , "category4");




const calculateTotalPrice = () => {
    if (cart.length !== 0) {
      let totalPrice = cart.reduce((accumalator, curentValue) => accumalator + curentValue.Price, 0);
      if (totalPrice >= 500) {
        const discount = (totalPrice / 100) * 15;
        totalPrice -= discount;
      } else {
        totalPrice += 100;
      }
      return totalPrice;
    } else {
      console.log("Don't have any items in your cart.");
    }
  };
  

const makePyment = (paymentAmount) => {
     totalPrice = calculateTotalPrice();
    if(paymentAmount >= totalPrice){
      console.log("-------------------------------------");
      console.log(`Total Price is:  $${totalPrice}`);
      console.log("Thanks for shopping with us.")
    }
     if(paymentAmount > totalPrice){
        console.log(`Here is your remaining amount: $${paymentAmount - totalPrice}`,);
    }
    else{
        console.log("Don't have enough money to buy this item.")
    }
};
makePyment(600);

