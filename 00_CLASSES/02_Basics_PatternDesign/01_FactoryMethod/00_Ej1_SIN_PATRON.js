// productService.js (SIN FACTORY)
class ProductService {
  createProduct(dto) {
    // dto: { type, name, price, weightKg, downloadUrl, stock }
    let product;

    if (dto.type === "physical") {
      product = {
        type: "physical",
        name: dto.name,
        price: dto.price,
        weightKg: dto.weightKg,
        stock: dto.stock ?? 0,
        shippingCost() {
          return this.weightKg * 1.2; // ejemplo
        },
      };
    } else if (dto.type === "digital") {
      product = {
        type: "digital",
        name: dto.name,
        price: dto.price,
        downloadUrl: dto.downloadUrl,
        stock: Infinity,
        shippingCost() {
          return 0;
        },
      };
    } else {
      throw new Error("Tipo de producto no soportado");
    }

    // …guardar en DB, validar, etc.
    return product;
  }
}

module.exports = { ProductService };
