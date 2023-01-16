import express from "express";
import {
  deleteInstallment,
  //   deleteInstallment,
  getInstallment,
  postInstallment,
  //   updateInstallment,
} from "../controllers/installmentController.js";
import protect from "../middleware/userMiddleware.js";

const installment = express.Router();
installment.post("/:customerId/installment/", protect, postInstallment);
// installment.get("/:customerId/installments/", getInstallment);
installment.get("/installment/get", protect, getInstallment);
installment.delete("/installment/:id", protect, deleteInstallment);
// installment.put("/Installment/:id", updateInstallment);

export default installment;
