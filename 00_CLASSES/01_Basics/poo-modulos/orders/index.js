import { Order } from "./models/Order.js";

console.log("\n--- DEMO Pedidos (POO + Módulos) ---");

const order = new Order({ taxRate: 0.12 });

order.addItem("A1", 2, 30);
order.addItem("B2", 1, 50);

console.log("Items:", order.items);
console.log("Subtotal:", order.subtotal());
console.log("Descuento:", order.discount());
console.log("IVA:", order.tax());
console.log("Total:", order.total());
