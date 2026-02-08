export class OrderItem {
  constructor({ sku, qty, unitPrice }) {
    if (!sku || typeof sku !== "string") throw new Error("SKU inválido.");
    if (typeof qty !== "number" || qty <= 0) throw new Error("qty inválido.");
    if (typeof unitPrice !== "number" || unitPrice <= 0) throw new Error("unitPrice inválido.");

    this.sku = sku;
    this.qty = qty;
    this.unitPrice = unitPrice;
  }

  lineTotal() {
    return this.qty * this.unitPrice;
  }
}
