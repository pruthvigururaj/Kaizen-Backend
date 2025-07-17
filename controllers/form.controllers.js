const { validationResult } = require("express-validator");
const db = require("../models");

exports.submitForm = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, message } = req.body;

  try {
    const formEntry = await db.form.create({ fullName, email, message });
    res.status(201).json({ message: "Form submitted successfully", data: formEntry });
  } catch (error) {
    res.status(500).json({ message: "Database error", error: error.message });
  }
};

exports.getForms = async (req, res) => {
  try {
    const entries = await db.form.findAll();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: "Database error", error: error.message });
  }
};
