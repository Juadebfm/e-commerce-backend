const Product = require("../models/Product.models");
const mongoose = require("mongoose");

const getAllProducts = (req, res) => {
  try {
    // Query the current product catelogue from the DB
    const {
      page = 1,
      limit = 12,
      category,
      minPrice,
      maxPrice,
      inStock,
      sortBy = "createdAt",
      sortOrder = "desc",
      search,
    } = req.query;

    // filter object
    const filter = { isActive: true };

    if (category) {
      filter.category = category;
    }

    // Easier way to do this *******************************************
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    // Easier way to do this *******************************************
    // Easier way to do this *******************************************

    if (inStock === "true") {
      filter.inStock = true;
      filter.stockQuantity = { $gt: 0 };
    }

    if (search) {
      filter.$text = { $search: search };
    }
    // Easier way to do this *******************************************

    // Pagination
    const skip = (Number(page) - 1) * Number(limit);

    // Easier way to do this *******************************************

    // Build sort
    const sort = {};
    sort[sortBy] = sortOrder === "desc";
    // Easier way to do this *******************************************
  } catch (error) {
    console.log(error.message);
  }
};

const getProductById = (req, res) => {};

const createProduct = () => {};
