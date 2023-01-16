import express from "express";
import {
  deleteCustomer,
  getCustomer,
  postCustomer,
  updateCustomer,
  getCustomerbyID,
  getSingleCustomerInstallments,
  // updateCustomers,
} from "../controllers/customerControl.js";
import protect from "../middleware/userMiddleware.js";
import { uploadFile } from "../utils/uploadImage.js";

const customer = express.Router();
customer.post(
  "/customer/post",
  uploadFile.fields([
    { name: "custImage", maxCount: 1 },
    { name: "custCnicImage", maxCount: 1 },
    { name: "custFingerImage", maxCount: 1 },
    { name: "gimage", maxCount: 1 },
    { name: "g2image", maxCount: 1 },
  ]),
  protect,
  postCustomer
);
customer.get("/customer/get", protect, getCustomer);
customer.get("/single-customer/:id", protect, getSingleCustomerInstallments);
customer.put(
  "/customer/:id",
  uploadFile.fields([{ name: "inquiryImages", maxCount: 10 }]),
  protect,
  updateCustomer
);
customer.get("/customer/get/:id", protect, getCustomerbyID);
// customer.post("/customer/", updateCustomers);
customer.delete("/customer/:id", protect, deleteCustomer);

export default customer;
