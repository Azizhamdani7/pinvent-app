const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "please add a name"],
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      default: "SKU",
      trim: true,
    },
    category: {
      type: String,
      required: [true, "please add a category"],
      trim: true,
    },
    quantity: {
      type: String,
      required: [true, "please add a quantity"],
      trim: true,
    },
    price: {
      type: String,
      required: [true, "please add a price"],
      trim: true,
    },
    image: {
      type: object,
      dafault: {},
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
