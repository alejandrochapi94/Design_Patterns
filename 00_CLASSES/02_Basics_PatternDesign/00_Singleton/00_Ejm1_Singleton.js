// configSingleton.js
class Config {
  constructor() {
    // podrías validar variables obligatorias aquí
    this.env = process.env.NODE_ENV || "dev";
    this.logLevel = process.env.LOG_LEVEL || "debug";
  }
}

class ConfigSingleton {
  static instance = null;

  static getInstance() {
    if (!ConfigSingleton.instance) {
      ConfigSingleton.instance = new Config();
    }
    return ConfigSingleton.instance;
  }
}

module.exports = { ConfigSingleton };
