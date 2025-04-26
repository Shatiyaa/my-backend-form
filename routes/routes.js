const express = require('express');
const router = express.Router();
const userController = require('../src/employee/employeeController');

router.route('/user/getAll').get(userController.getDataControllerfn);
router.route('/user/create').post(userController.createUserControllerfn);   // Use POST for create
router.route('/user/update/:id').put(userController.updateUserControllerfn); // Use PUT for update
router.route('/user/delete/:id').delete(userController.deleteUserControllerfn); // Use DELETE for delete

module.exports = router;
