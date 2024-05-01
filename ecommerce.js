const users=[
    {username:"Roma", password:"1234",email:"roma1234@gmail.com"},
    {username:"Shyam",password:"5678",email:"shyam5678@gmail.com"},
    {username:"Rohan", password:"3453",email:"rohan3453@gmail.com"}
];

const products =[
    {Name:"produdct A",Price:"10",Stock:"54",category:"category 1"},   
    {Name:"produdct B",Price:"30",Stock:"80",category:"category 2"},
    {Name:"produdct C",Price:"40",Stock:"50",category:"category 3"},
    {Name:"produdct D",Price:"50",Stock:"100",category:"category 4"},
    {Name:"produdct E",Price:"120",Stock:"70",category:"category 1"},
    {Name:"produdct F",Price:"67",Stock:"60",category:"category 1"},
    {Name:"produdct G",Price:"90",Stock:"130",category:"category 2"},
    {Name:"produdct H",Price:"110",Stock:"140",category:"category 4"},


];

const cart = [ ];

const login =(email,password) =>{
    users.map((user) =>{
        let userFound = false ;
    if(user.email === email){
        userFound = true ;
    }
    if(!userFound){

    }
   });
   console.log("user is not Found");

};

console.log(login("rohan3453@gmail.com","3453"));

