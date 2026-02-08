// ===== Ejemplo 2 (POO): Inventario =====

class Product {
  constructor({ sku, name, price, stock }) {
    if (!sku || typeof sku !== "string") throw new Error("SKU inválido.");
    if (!name || typeof name !== "string") throw new Error("Nombre inválido.");
    if (typeof price !== "number" || price <= 0) throw new Error("Precio inválido.");
    if (!Number.isInteger(stock) || stock < 0) throw new Error("Stock inválido.");

    this.sku = sku;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  increase(amount) {
    if (!Number.isInteger(amount) || amount <= 0) throw new Error("Cantidad inválida.");
    this.stock += amount;
  }

  decrease(amount) {
    if (!Number.isInteger(amount) || amount <= 0) throw new Error("Cantidad inválida.");
    if (this.stock < amount) throw new Error("Stock insuficiente.");
    this.stock -= amount;
  }

  value() {
    return this.price * this.stock;
  }
}

class Inventory {
  #products = new Map(); // sku -> Product

  add(product) {
    if (this.#products.has(product.sku)) throw new Error("SKU ya existe.");
    this.#products.set(product.sku, product);
  }

  get(sku) {
    const p = this.#products.get(sku);
    if (!p) throw new Error("Producto no encontrado.");
    return p;
  }

  list() {
    return [...this.#products.values()];
  }

  totalValue() {
    return this.list().reduce((sum, p) => sum + p.value(), 0);
  }
}

// ===== Demo =====
function demoInventoryOOP() {
  console.log("\n--- DEMO Inventario (POO) ---");
  const inv = new Inventory();

  inv.add(new Product({ sku: "A1", name: "Mouse", price: 15, stock: 10 }));
  inv.add(new Product({ sku: "B2", name: "Teclado", price: 25, stock: 5 }));

  inv.get("B2").increase(2);
  inv.get("A1").decrease(3);

  console.log("Productos:", inv.list());
  console.log("Valor inventario:", inv.totalValue());
}

demoInventoryOOP();
