/**
 Ejemplo 3: Pedidos (Order) con reglas simples
Requerimientos

Crear un pedido con items: (sku, qty, unitPrice).

Calcular subtotal, IVA (12% ejemplo), total.

Aplicar descuento: si subtotal >= 100, descuento 10%.

Validar: qty > 0, unitPrice > 0.
 */


// ===== Ejemplo 3 (Estructurada): Pedidos =====

const TAX_RATE = 0.12;

function assertPositiveNumber(n, label) {
  if (typeof n !== "number" || n <= 0) throw new Error(`${label} inválido.`);
}

function createOrder() {
  return { items: [] };
}

function addItem(order, sku, qty, unitPrice) {
  if (!sku || typeof sku !== "string") throw new Error("SKU inválido.");
  assertPositiveNumber(qty, "qty");
  assertPositiveNumber(unitPrice, "unitPrice");

  order.items.push({ sku, qty, unitPrice });
  return order;
}

function subtotal(order) {
  return order.items.reduce((sum, it) => sum + it.qty * it.unitPrice, 0);
}

function discount(order) {
  const sub = subtotal(order);
  return sub >= 100 ? sub * 0.10 : 0;
}

function tax(order) {
  const base = subtotal(order) - discount(order);
  return base * TAX_RATE;
}

function total(order) {
  const sub = subtotal(order);
  const disc = discount(order);
  const t = tax(order);
  return sub - disc + t;
}

// ===== Demo =====
function demoOrdersProcedural() {
  console.log("\n--- DEMO Pedidos (Estructurada) ---");
  const order = createOrder();
  addItem(order, "A1", 2, 30);
  addItem(order, "B2", 1, 50);

  console.log("Order:", order);
  console.log("Subtotal:", subtotal(order));
  console.log("Descuento:", discount(order));
  console.log("IVA:", tax(order));
  console.log("Total:", total(order));
}

demoOrdersProcedural();


