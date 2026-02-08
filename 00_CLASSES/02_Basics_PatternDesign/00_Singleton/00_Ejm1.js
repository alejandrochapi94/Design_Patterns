// employeeService.js (SIN PATRÓN)
class Logger {
  constructor(level) {
    this.level = level;
  }
  info(msg) {
    console.log(`[INFO][${this.level}] ${msg}`);
  }
}

class Config {
  constructor() {
    this.env = process.env.NODE_ENV || "dev";
    this.logLevel = process.env.LOG_LEVEL || "debug";
  }
}

class EmployeeService {
  constructor() {
    // Problema: cada vez que creas EmployeeService, creas Config y Logger nuevos
    this.config = new Config();
    this.logger = new Logger(this.config.logLevel);
    this.employees = [];
  }

  addEmployee(name, role) {
    this.employees.push({ name, role });
    this.logger.info(`Empleado creado: ${name} (${role}) en env=${this.config.env}`);
  }
}

module.exports = { EmployeeService };
