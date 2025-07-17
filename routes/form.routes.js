const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const formController = require("../controllers/form.controller");

router.post(
  "/form",
  [
    body("fullName").notEmpty().withMessage("Full name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("message").notEmpty().withMessage("Message is required"),
  ],
  formController.submitForm
);

router.get("/form", formController.getForms);

module.exports = router;
