// userController.js

// Assuming you have the necessary database connection and query function defined here
const { query, pool2 } = require('../db');


async function getAllUsers(req, res) {
  try {
    let sql = 'SELECT * FROM users'
    let users = await query(pool2, sql)

    if (users.length > 0) {
      res.send({
        message: 'all users',
        data: users
      })

    } else {
      res.status(400).json({ error: 'something went wrong' })
    }
  } catch (err) {
    console.log('something went wrong');
    res.status(500).json({ err: 'internal server error' })
  }
}

async function addUser(req, res) {
  try {
    let name = req.body.username;
  let ema = req.body.email;
  let mob = req.body.mobile;
  let sql = 'INSERT INTO users (username, email, mobile) VALUES (?, ?, ?)';
   await query(pool2, sql, [name, ema, mob]);

      res.status(200).json({ message: 'User added successfully' });

  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getUserById(req, res) {
  try {
    let id = req.params.id;
    let sql = 'SELECT * FROM users WHERE id = ?';
    let users = await query(pool2, sql, [id]);

    if (users.length > 0) { // Fix the typo: "length" instead of "lenght"
      res.send({
        message: 'User found',
        data: users,
      });
    } else {
      console.log('User not found');
      res.status(404).json({ error: 'User not found' }); // Use "error" instead of "err" for consistency
    }

  } catch (err) {
    console.log('Something went wrong');
    res.status(500).json({ error: 'Internal server error' }); // Set the proper status code for the error response
  }
}

async function deleteUserById(req, res) {
  try {
    let id = req.params.id;
    let sql = 'DELETE FROM users WHERE id = ?';
    await query(pool2, sql, [id]);

    res.send({
      message: 'User deleted successfully',
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateUserById(req, res) {
  try {
    let id = req.params.id;
    let username = req.body.username;
    let email = req.body.email;
    let mobile = req.body.mobile;

    let sql = 'UPDATE users SET username = ?, email = ?, mobile = ? WHERE id = ?';
    await query(pool2, sql, [username, email, mobile, id]);

    res.send({
      message: 'User updated successfully',
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// async function deleteAllUsers(req, res) {
//   try {
//     let sql = 'DELETE FROM users';
//     await query(pool2, sql);

//     res.send({
//       message: 'All users deleted successfully',
//     });
//   } catch (err) {
//     console.error('Error:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }










module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  deleteUserById,
  updateUserById,
  // deleteAllUsers
};
