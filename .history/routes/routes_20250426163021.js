const express=require('express');
const router=express.Router();
var userController=require('../src/employee/employeeController');
router.route('/user/getAll').get(userController.getDataControllerfn);
router.route('/user/create').get(userController.createUserControllerfn);
router.route('/user/update/:id').get(userController.updateUserControllerfn);
router.route('/user/delete/:id').get(userController.deleteUserControllerfn);
module.exports=router;