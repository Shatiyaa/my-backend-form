// backend/src/employee/employeeController.js

const employeeModel = require('./employeeModel');

// Create a new employee
const createUserControllerfn = async (req, res) => {
  try {
    const { name, address, phone } = req.body;

    const employeeModelData = new employeeModel({
      name,
      address,
      phone
    });

    await employeeModelData.save();

    res.status(200).send({
      status: true,
      message: "Employee created successfully!"
    });
  } catch (error) {
    res.status(400).send({
      status: false,
      message: "Error creating employee",
      error: error.message
    });
  }
};

// Get all employees
const getDataControllerfn = async (req, res) => {
  try {
    const data = await employeeModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({
      status: false,
      message: "Error fetching employees",
      error: error.message
    });
  }
};

// Update an employee
const updateUserControllerfn = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    const result = await employeeModel.findByIdAndUpdate(id, updatedData, { new: true });

    if (!result) {
      return res.status(404).send({
        status: false,
        message: "Employee not found"
      });
    }

    res.status(200).send({
      status: true,
      message: "Employee updated successfully"
    });
  } catch (error) {
    res.status(400).send({
      status: false,
      message: "Error updating employee",
      error: error.message
    });
  }
};

// Delete an employee
const deleteUserControllerfn = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await employeeModel.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).send({
        status: false,
        message: "Employee not found"
      });
    }

    res.status(200).send({
      status: true,
      message: "Employee deleted successfully"
    });
  } catch (error) {
    res.status(400).send({
      status: false,
      message: "Error deleting employee",
      error: error.message
    });
  }
};

// Exporting all functions
module.exports = {
  createUserControllerfn,
  getDataControllerfn,
  updateUserControllerfn,
  deleteUserControllerfn
};
