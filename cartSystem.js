

const products =[
    {Name:"produdct A",Price:"10",Stock:"54",Category:"category 1"},   
    {Name:"produdct B",Price:"30",Stock:"80",Category:"category 2"},
    {Name:"produdct C",Price:"40",Stock:"50",Category:"category 3"},
    {Name:"produdct D",Price:"50",Stock:"100",Category:"category 4"},
    {Name:"produdct E",Price:"120",Stock:"70",Category:"category 1"},
    {Name:"produdct F",Price:"67",Stock:"60",Category:"category 1"},
    {Name:"produdct G",Price:"90",Stock:"130",Category:"category 2"},
    {Name:"produdct H",Price:"110",Stock:"140",Category:"category 4"},
];

const cart = [ ];

const addToCart = (Name, Category) =>{
    for (i in products){
        const product = products[i]
        if(product.Stock > 0){
        console.log(`Stock: ${product.Stock}`)
        }
    }
    return products.filter(product => product.Category === Category)

};
addToCart("Name ","category 1");

