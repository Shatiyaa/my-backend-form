var employeeModel = require('./employeeModel');

var createUserControllerfn = async (req, res) => {
    try {
      const { name, address, phone } = req.body;
  
      const employeeModelData = new employeeModel({
        name: name,
        address: address,
        phone: phone
      });
  
      await employeeModelData.save();
  
      res.status(200).send({
        status: true,
        message: "Employee created successfully!"
      });
    } catch (error) {
      console.error("Error while saving employee:", error);  // Add this
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












// Export all functions
module.exports = {
  createUserControllerfn,
  getDataControllerfn,
  updateUserControllerfn,
  deleteUserControllerfn
};
