import express from "express";
import {
  deleteInstallment,
  //   deleteInstallment,
  getInstallment,
  postInstallment,
  //   updateInstallment,
} from "../controllers/installmentController.js";

const installment = express.Router();
installment.post("/:customerId/installment/", postInstallment);
// installment.get("/:customerId/installments/", getInstallment);
installment.get("/installment/get", getInstallment);
installment.delete("/installment/:id", deleteInstallment);
// installment.put("/Installment/:id", updateInstallment);

export default installment;
