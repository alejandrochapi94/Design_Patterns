import { Product } from "./models/Product.js";
import { Inventory } from "./services/Inventory.js";

console.log("\n--- DEMO Inventario (POO + Módulos) ---");

const inv = new Inventory();

inv.add(new Product({ sku: "A1", name: "Mouse", price: 15, stock: 10 }));
inv.add(new Product({ sku: "B2", name: "Teclado", price: 25, stock: 5 }));

inv.get("B2").increase(2);
inv.get("A1").decrease(3);

console.log("Productos:", inv.list());
console.log("Valor inventario:", inv.totalValue());
