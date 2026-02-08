/*
Ejemplo 2: Mercadería / Inventario
Requerimientos

Registrar productos: sku, name, price, stock.

Aumentar/disminuir stock.

Calcular el valor total del inventario.

Validar: price > 0, stock >= 0.
*/

// ===== Ejemplo 2 (Estructurada): Inventario =====

const products = new Map(); // sku -> {sku,name,price,stock}

function assertPositivePrice(price) {
  if (typeof price !== "number" || price <= 0) throw new Error("Precio inválido.");
}

function assertNonNegativeStock(stock) {
  if (!Number.isInteger(stock) || stock < 0) throw new Error("Stock inválido.");
}

function addProduct(sku, name, price, stock = 0) {
  if (!sku || typeof sku !== "string") throw new Error("SKU inválido.");
  if (!name || typeof name !== "string") throw new Error("Nombre inválido.");
  assertPositivePrice(price);
  assertNonNegativeStock(stock);

  if (products.has(sku)) throw new Error("SKU ya existe.");
  products.set(sku, { sku, name, price, stock });
  return products.get(sku);
}

function increaseStock(sku, amount) {
  if (!Number.isInteger(amount) || amount <= 0) throw new Error("Cantidad inválida.");
  const p = products.get(sku);
  if (!p) throw new Error("Producto no encontrado.");
  p.stock += amount;
  return p;
}

function decreaseStock(sku, amount) {
  if (!Number.isInteger(amount) || amount <= 0) throw new Error("Cantidad inválida.");
  const p = products.get(sku);
  if (!p) throw new Error("Producto no encontrado.");
  if (p.stock < amount) throw new Error("Stock insuficiente.");
  p.stock -= amount;
  return p;
}

function inventoryValue() {
  let total = 0;
  for (const p of products.values()) total += p.price * p.stock;
  return total;
}

// ===== Demo =====
function demoInventoryProcedural() {
  console.log("\n--- DEMO Inventario (Estructurada) ---");
  addProduct("A1", "Mouse", 15, 10);
  addProduct("B2", "Teclado", 25, 5);

  increaseStock("B2", 2);
  decreaseStock("A1", 3);

  console.log("Productos:", [...products.values()]);
  console.log("Valor inventario:", inventoryValue());
}

demoInventoryProcedural();
