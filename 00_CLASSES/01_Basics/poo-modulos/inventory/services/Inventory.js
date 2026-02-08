export class Inventory {
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
