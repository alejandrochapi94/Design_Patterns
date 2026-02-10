const { PhysicalProduct, DigitalProduct } = require("../models/products");

class ProductFactory {
  // Este es el FACTORY METHOD (punto único de creación)
  static create(dto) {
    switch (dto.type) {
      case "physical":
        return new PhysicalProduct(dto);

      case "digital":
        return new DigitalProduct(dto);

      default:
        throw new Error(`Tipo de producto no soportado: ${dto.type}`);
    }
  }
}

module.exports = { ProductFactory };
