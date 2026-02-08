// ===== Ejemplo 1 (POO): Administración de usuarios =====

class User {
  constructor({ id, name, email, role }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }

  promoteToAdmin() {
    this.role = "admin";
  }
}

class UserService {
  #users = [];
  #nextId = 1;

  #assertValidEmail(email) {
    if (typeof email !== "string" || !email.includes("@")) {
      throw new Error("Email inválido. Debe incluir '@'.");
    }
  }

  #assertValidRole(role) {
    const valid = ["admin", "user"];
    if (!valid.includes(role)) {
      throw new Error(`Rol inválido. Use: ${valid.join(", ")}`);
    }
  }

  create(name, email, role = "user") {
    if (!name || typeof name !== "string") throw new Error("Nombre inválido.");
    this.#assertValidEmail(email);
    this.#assertValidRole(role);

    const user = new User({ id: this.#nextId++, name, email, role });
    this.#users.push(user);
    return user;
  }

  list() {
    return [...this.#users];
  }

  findById(id) {
    const user = this.#users.find(u => u.id === id);
    if (!user) throw new Error("Usuario no encontrado.");
    return user;
  }

  updateRole(id, newRole) {
    this.#assertValidRole(newRole);
    const user = this.findById(id);
    user.role = newRole;
    return user;
  }

  delete(id) {
    const idx = this.#users.findIndex(u => u.id === id);
    if (idx === -1) throw new Error("Usuario no encontrado.");
    const [deleted] = this.#users.splice(idx, 1);
    return deleted;
  }
}

// ===== Demo =====
function demoUsersOOP() {
  console.log("\n--- DEMO Users (POO) ---");
  const service = new UserService();

  const ana = service.create("Ana", "ana@mail.com", "admin");
  const luis = service.create("Luis", "luis@mail.com", "user");

  console.log("Lista:", service.list());
  // comportamiento en el objeto
  luis.promoteToAdmin();
  console.log("Luis promovido:", service.list());
  service.delete(ana.id);
  console.log("Luego de eliminar a Ana:", service.list());
}

demoUsersOOP();
