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
  


rs
trollerfn = async (req, res) => {

 = await employeeModel.find();
(200).send(data);
or) {
(400).send(error);



Controllerfn = async (req, res) => {

 req.params.id;
 = req.body;
oyeeModel.findByIdAndUpdate(id, body);
(200).send({
: true,
": "Employee updated successfully"

or) {
(400).send(error);















// Export all functions
module.exports = {
  createUserControllerfn,
  getDataControllerfn,
  updateUserControllerfn,
  deleteUserControllerfn
};
