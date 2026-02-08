export class Product {
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
