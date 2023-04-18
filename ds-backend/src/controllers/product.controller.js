import Product from "../models/product.model";
import Seller from "../models/seller.model";
import asyncHandler from "../middleware/async.js";

import { makeResponse } from "../utils/response";

export const getAllProduct = asyncHandler(async (req, res) => {
  try {
    let Products = await Product.find().sort({ _id: -1 });
    if (Products) {
      makeResponse({
        res,
        status: 200,
        data: Products,
        message: "All Products",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

export const getProductCount = async () => {
  try {
    let count = await Product.count();
    return count;
  } catch (err) {
    console.log(err);
  }
};

export const postAddProduct = asyncHandler(async (req, res) => {
  const { seller } = req.user;

  // create a new product object with any relevant data
  const newProduct = new Product({
    pPid: "PID00" + (parseInt(await getProductCount()) + 1),
    pName: req.body.pName,
    pDescription: req.body.pDescription,
    pStatus: req.body.pStatus,
    pCategory: req.body.pCategory,
    pQuantity: req.body.pQuantity,
    pPrice: req.body.pPrice,
    pOffer: req.body.pOffer,
    pWeight: req.body.pWeight,
    pImages: req.body.pImages,
    // ... other properties of the product
  });
  try {
    const product = await new Product(newProduct).save();
    if (product) {
      // once the new product is saved successfully, add it to the seller's product list
      Seller.findOneAndUpdate(
        { _id: seller._id },
        { $push: { products: newProduct._id } },
        { new: true },
        (err, updatedSeller) => {
          if (err) {
            console.log(err);
            // handle any errors that occur
            return res.status(500).json({ error: "Error updating seller" });
          }

          // return a success response with the updated seller object
          return res
            .status(200)
            .json({ success: "Product created successfully" });
        }
      );
    }
  } catch (err) {

    console.log(err);
    return res.status(500).json({ error: "Error creating product" });
  }
});

// const product = newProduct.save((err) => {
//   if (err) {
//     // handle any errors that occur
//     return res.status(500).json({ error: "Error creating new product" });
//   }

//   // once the new product is saved successfully, add it to the seller's product list
//   Seller.findOneAndUpdate(
//     { _id: seller._id },
//     { $push: { products: newProduct._id } },
//     { new: true },
//     (err, updatedSeller) => {
//       if (err) {
// //         // handle any errors that occur
//         return res.status(500).json({ error: "Error updating seller" });
//       }

//       // return a success response with the updated seller object
//       return res.status(200).json({ seller: updatedSeller });
//     }
//   );
// });
