const { ProductFactory } = require("./factories/productFactory");

class ProductService {
  createProduct(dto) {
    // Aquí NO decides qué clase crear; solo delegas al factory
    const product = ProductFactory.create(dto);

    // Aquí ya podrías: validar, guardar en DB, publicar evento, etc.
    return product;
  }
}

module.exports = { ProductService };
