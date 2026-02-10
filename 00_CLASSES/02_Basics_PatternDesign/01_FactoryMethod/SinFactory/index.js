const { ProductService } = require("./productService");

const service = new ProductService();

const p1 = service.createProduct({
  type: "physical",
  name: "Teclado mecánico",
  price: 50,
  weightKg: 1.2,
  stock: 10,
});

const p2 = service.createProduct({
  type: "digital",
  name: "Curso JavaScript",
  price: 20,
  downloadUrl: "https://example.com/descarga",
});

console.log("SIN FACTORY");
console.log(p1, "Shipping:", p1.shippingCost());
console.log(p2, "Shipping:", p2.shippingCost());
