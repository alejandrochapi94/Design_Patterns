// ===== Ejemplo 3 (POO): Pedidos =====

class OrderItem {
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

class Order {
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

// ===== Demo =====
function demoOrdersOOP() {
  console.log("\n--- DEMO Pedidos (POO) ---");
  const order = new Order({ taxRate: 0.12 });
  order.addItem("A1", 2, 30);
  order.addItem("B2", 1, 50);

  console.log("Items:", order.items);
  console.log("Subtotal:", order.subtotal());
  console.log("Descuento:", order.discount());
  console.log("IVA:", order.tax());
  console.log("Total:", order.total());
}

demoOrdersOOP();
