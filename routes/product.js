const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

// Public
router.get("/", getAllProducts);
router.post("/create-product", auth, createProduct);
