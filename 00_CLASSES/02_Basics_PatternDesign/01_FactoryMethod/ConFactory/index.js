const { ProductService } = require("./productService");

const service = new ProductService();

const p1 = service.createProduct({
  type: "physical",
  name: "Mouse gamer",
  price: 30,
  weightKg: 0.4,
  stock: 25,
});

const p2 = service.createProduct({
  type: "digital",
  name: "E-book de programación",
  price: 10,
  downloadUrl: "https://example.com/ebook",
});

console.log("CON FACTORY");
console.log(p1, "Shipping:", p1.shippingCost());
console.log(p2, "Shipping:", p2.shippingCost());
