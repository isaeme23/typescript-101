export interface Product{
    description:string;
    price:number;
}

const phone: Product = {
    description: "iPhone 11",
    price: 500
}

const pc: Product = {
    description: "MackBook Air",
    price: 900
}

interface TaxCalculationOptions{
    tax:number;
    products: Product[];
}


export function taxCalculation(options: TaxCalculationOptions):[number,number]{
    
    const {tax, products} = options;

    let total = 0;

    products.forEach( ({ price }) =>{
        total+=price;
    });

    return [total, total*tax]
}


const shoppingCart = [phone, pc];
const tax = 0.15;


const [total, totalTax] = taxCalculation({
    products:shoppingCart,
    tax,
})



console.log('Total: ', total)
console.log('Tax: ', totalTax)