import { OrderItem } from "./OrderItem.js";

export class Order {
  constructor({ taxRate = 0.12 } = {}) {
    this.taxRate = taxRate;
    this.items = [];
  }

  addItem(sku, qty, unitPrice) {
    this.items.push(new OrderItem({ sku, qty, unitPrice }));
  }

  subtotal() {
    return this.items.reduce((sum, it) => sum + it.lineTotal(), 0);
  }

  discount() {
    const sub = this.subtotal();
    return sub >= 100 ? sub * 0.10 : 0;
  }

  tax() {
    const base = this.subtotal() - this.discount();
    return base * this.taxRate;
  }

  total() {
    return this.subtotal() - this.discount() + this.tax();
  }
}
