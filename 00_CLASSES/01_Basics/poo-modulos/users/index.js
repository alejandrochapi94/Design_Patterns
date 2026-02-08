import { UserService } from "./services/UserService.js";

console.log("\n--- DEMO Users (POO + Módulos) ---");

const service = new UserService();

const ana = service.create("Ana", "ana@mail.com", "admin");
const luis = service.create("Luis", "luis@mail.com", "user");

console.log("Lista:", service.list());

luis.promoteToAdmin();
console.log("Luego de promover a Luis:", service.list());

service.delete(ana.id);
console.log("Luego de eliminar a Ana:", service.list());
