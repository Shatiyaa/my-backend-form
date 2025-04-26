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
  











) => {



, body);


lly"






) => {


);


lly"











