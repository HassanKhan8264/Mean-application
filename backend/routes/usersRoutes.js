const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');

const { getAllUsers, getUserById, addUser, deleteUserById, updateUserById, deleteAllUsers} = require('../controllers/usersController')
router.use(bodyParser.json());
router.get('/users', getAllUsers);
router.get('/user/:id', getUserById);
router.post('/user', addUser);
router.delete('/user/:id', deleteUserById);
// router.delete('/users', deleteAllUsers);
router.put('/user/:id', updateUserById);







module.exports = router