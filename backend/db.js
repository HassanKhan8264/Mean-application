const mysql = require('mysql2');


const dbConfig1 = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'products',
  };

  const dbConfig2 = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'userinfo',
  };

  const pool1 = mysql.createPool(dbConfig1);
  const pool2 = mysql.createPool(dbConfig2);

  // Helper function to execute queries
  function query(pool, sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        } else {
          connection.query(sql, values, (err, results) => {
            connection.release();
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
          });
        }
      });
    });
  }

  pool1.getConnection((err, connection) => {
    if (err) {
      console.log('Database 1 is not connected');
    } else {
      console.log('Database 1 is connected');
      connection.release();
    }
  });

  pool2.getConnection((err, connection) => {
    if (err) {
      console.log('Database 2 is not connected');
    } else {
      console.log('Database 2 is connected');
      connection.release();
    }
  });

  module.exports = {
    pool1,
    pool2,
    query
  }
