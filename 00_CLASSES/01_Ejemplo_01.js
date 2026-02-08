/*
Ejemplo 1: Administración de usuarios
Requerimientos

Crear usuarios con: id, name, email, role.

Listar usuarios.

Actualizar el rol de un usuario.

Eliminar un usuario.

Validar: email debe incluir @ y el rol debe ser admin o user.

*/

// ===== Ejemplo 1 (Estructurada): Administración de usuarios =====

const users = [];
let nextUserId = 1;

function assertValidEmail(email) {
  if (typeof email !== "string" || !email.includes("@")) {
    throw new Error("Email inválido. Debe incluir '@'.");
  }
}

function assertValidRole(role) {
  const valid = ["admin", "user"];
  if (!valid.includes(role)) {
    throw new Error(`Rol inválido. Use: ${valid.join(", ")}`);
  }
}

function createUser(name, email, role = "user") {
  if (!name || typeof name !== "string") throw new Error("Nombre inválido.");
  assertValidEmail(email);
  assertValidRole(role);

  const user = { id: nextUserId++, name, email, role };
  users.push(user);
  return user;
}

function listUsers() {
  return [...users];
}

function updateUserRole(userId, newRole) {
  assertValidRole(newRole);
  const user = users.find(u => u.id === userId);
  if (!user) throw new Error("Usuario no encontrado.");
  user.role = newRole;
  return user;
}

function deleteUser(userId) {
  const idx = users.findIndex(u => u.id === userId);
  if (idx === -1) throw new Error("Usuario no encontrado.");
  const [deleted] = users.splice(idx, 1);
  return deleted;
}

// ===== Demo =====
function demoUsersProcedural() {
  console.log("\n--- DEMO Users (Estructurada) ---");
  createUser("Ana", "ana@mail.com", "admin");
  createUser("Luis", "luis@mail.com", "user");

  console.log("Lista:", listUsers());
  updateUserRole(2, "admin");
  console.log("Luego de ascender a Luis:", listUsers());
  deleteUser(1);
  console.log("Luego de eliminar a Ana:", listUsers());
}

demoUsersProcedural();
