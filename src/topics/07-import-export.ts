import {Product, taxCalculation} from "./06-function-destructuring"

const shoppingCart: Product[] = [{
    description: "AppleWatch",
    price: 300
},
{
    description: "iPad",
    price: 500
}
];

const [ total, totaltax ] = taxCalculation({
    products:shoppingCart,
    tax: 0.15
});

console.log("Total: ", total)
console.log("Tax: ", totaltax)

