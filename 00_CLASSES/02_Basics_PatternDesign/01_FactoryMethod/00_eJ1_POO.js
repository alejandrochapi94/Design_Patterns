// products.js
class PhysicalProduct {
  constructor({ name, price, weightKg, stock = 0 }) {
    this.type = "physical";
    this.name = name;
    this.price = price;
    this.weightKg = weightKg;
    this.stock = stock;
  }

  shippingCost() {
    return this.weightKg * 1.2;
  }
}

class DigitalProduct {
  constructor({ name, price, downloadUrl }) {
    this.type = "digital";
    this.name = name;
    this.price = price;
    this.downloadUrl = downloadUrl;
    this.stock = Infinity;
  }

  shippingCost() {
    return 0;
  }
}

module.exports = { PhysicalProduct, DigitalProduct };
