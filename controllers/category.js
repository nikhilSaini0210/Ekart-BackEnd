import Category from "../models/category.js";

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      success: true,
      message: "Successfully retrieved categories",
      categories: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve categories",
      error: error.message,
    });
  }
};


export { getAllCategories };