var employeeModel = require('./employeeModel');

// Create user
var createUserControllerfn = async (req, res) => {
  try {
    const body = req.body;
    const employeeModelData = new employeeModel();
    employeeModelData.name = body.name;
    employeeModelData.address = body.address;
    employeeModelData.phone = body.phone;

    await employeeModelData.save();

    res.status(200).send({
      "status": true,
      "message": "Employee created successfully"
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all users
var getDataControllerfn = async (req, res) => {
  try {
    const data = await employeeModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update user
var updateUserControllerfn = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    await employeeModel.findByIdAndUpdate(id, body);

    res.status(200).send({
      "status": true,
      "message": "Employee updated successfully"
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete user
var deleteUserControllerfn = async (req, res) => {
  try {
    const id = req.params.id;

    await employeeModel.findByIdAndDelete(id);

    res.status(200).send({
      "status": true,
      "message": "Employee deleted successfully"
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// Export all functions
module.exports = {
  createUserControllerfn,
  getDataControllerfn,
  updateUserControllerfn,
  deleteUserControllerfn
};
