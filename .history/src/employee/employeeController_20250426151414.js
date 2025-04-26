var employeeModel=require('./employeeModel');
var createUserControllerfn=async(req,res)=>
{
    try {
        const body=req.body;
        const employeeModelData=new employeeModel()
        employeeModelData.name-body.name;
        employeeModelData.address=body.address
        employeeModelDataser.phone=body.phone
        await employeeModelData.save()
        res.status(200),send({
            "status":true,"message":"Employee created succesfully"
        });
    } catch ({error}) {
        res.status(400).send(error);
    }
}