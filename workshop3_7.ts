
interface Product {
  id: number;
  name: string;
  price: number;
}

type Status = "Available" | "Out of Stock";

function printSummary(product: Product, status: Status): void {
  console.log("Product Summary");
  console.log("----------------");
  console.log(`ID: ${product.id}`);
  console.log(`Name: ${product.name}`);
  console.log(`Price: $${product.price}`);
  console.log(`Status: ${status}`);
}

const product1: Product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
};

printSummary(product1, "Available");