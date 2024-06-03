async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    return products;
}

async function getUsers() {
    const response = await fetch("https://fakestoreapi.com/users");
    const users = await response.json();
    return users;
}


async function ecommerce ()  {
    const users = await getUsers();
    const products = await getProducts();

     function login(email, password) {
        let userFound = false ;
        for ( i in users) {
        if(users[i].email == email){
            userFound = true ;
            if(users[i].password == password){
                return true;
                
            }
            else{
                return false;
            }
        }    
        }
        if(!userFound){
            return false;
        }

    }    
    const cart =[];

    async function addToCart (email ,password, title, category){
        const filteredProduct = products.filter(product =>product.category === category );
        const userFound=  await login(email, password);
        //console.log(filteredProduct)

        if(!userFound){
            console.log("Not valid user.");
            return;

        }
        else{
            console.log("valid user.");
        }

        let productFound = false;
        filteredProduct.map((product) =>{
            if(product.title == title){
                productFound = true
                if(product.rating.count > 0){
                    cart.push(product);
                    console.log(`${title} is added to cart.`)
                }
                else{
                    console.log(`${title} out of stock`);
                }
            }
        });
        if(!productFound){
            console.log(`${title} not found in  ${category}.`);
        }
    };
      
   await addToCart("john@gmail.com", "m38rmF$", "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "men's clothing")
   await addToCart("morrison@gmail.com", "83r5^_","Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ","electronics")
   
     function calculateTotalPrice(){
        if(cart.length !== 0){
            let totalPrice = cart.reduce((accumulator ,currentValue) => accumulator + currentValue.price ,0 );
            console.log(`Total Price is : ${totalPrice}`)
            if(totalPrice > 500){
                const discount = (totalPrice /100) * 15 ;
                totalPrice -= discount ;
            }
            else{
                totalPrice += 100;
            }
            return totalPrice.toFixed(2)
        }
        else{
            console.log("Don't have any items in your cart.")
        }
    };

    async function makePyment (paymentAmount){
       const totalPrice =  await calculateTotalPrice();
        if(paymentAmount >= totalPrice){
            console.log(`Total Price after discount Percent : $${totalPrice}`);
            console.log("Thanks for shopping with use.")
        }
        if(paymentAmount >  totalPrice){
            console.log(`Here is your remaining amount: $${paymentAmount - totalPrice}`)

        }
        else{
            console.log("Don't have enough money to buy this item.")
        }
    }
    
    makePyment(950);
    //console.log(products)
    //console.log(users);
 
};
ecommerce();
