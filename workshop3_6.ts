
type Category = "Electronics" | "Clothing" | "Food";

interface Product {
    readonly id: number;
    name: string;
    category: Category;
    price: number;
}

const products: Product[] = [
 {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 25000
 },
{
        id: 2,
        name: "T-Shirt",
        category: "Clothing",
        price: 500
},
{
        id: 3,
        name: "Pizza",
        category: "Food",
        price: 200
}
];

function filterByCategory(category: Category): Product[] {
    return products.filter(product => product.category === category);
}

console.log(filterByCategory("Electronics"));
console.log(filterByCategory("Food"));