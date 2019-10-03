let express = require('express');
let router = express.Router();
const {Client} = require('pg');

const client = new Client({
  user: 'magda',
  host: 'localhost',
  database: 'users',
  password: 'magda',
  port: 5432,
});
client.connect();

router.get('/', (req, res, next) => {
  client.query('SELECT * FROM users', (err, res2) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res2.rows);
      res.send(Object.values(res2.rows));
    }
  });
});

router.get('/:userId', (req, res) => {
  let id = parseInt(req.params.userId);
  client.query(`SELECT * FROM users WHERE user_id=${id}`, (err, res2) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res2.rows);
      res.send(Object.values(res2.rows))
    }
  });
});

router.post('/', (req, res) => {
  let name = req.body.name;
  let surname = req.body.surname;
  let email = req.body.email;
  let join_date = new Date();
  let sql = 'INSERT INTO users (name, surname, email, join_date) VALUES ($1, $2, $3, $4) RETURNING *';
  let params = [ name, surname, email, join_date];
  client.query(sql, params, (err, res2) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log('new user',res2.rows);
      res.send(res2.rows[0]);
    }
  });
});
router.put('/', (req, res) => {
  let name = req.body.name;
  let surname = req.body.surname;
  let email = req.body.email;
  let user_id = req.body.user_id;
  let edit_date = new Date();
  let sql = 'UPDATE users SET name = $1,surname = $2, email = $3, edit_date = $4 WHERE user_id = $5 RETURNING *';
  let params = [name, surname, email, edit_date, user_id];
  client.query(sql, params, (err, res2) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res2.rows);
      res.send(res2.rows[0]);
    }
  });
});
router.delete('/:userId', (req, res) => {
  let user_id = req.params.userId;
  let sql = 'DELETE FROM users WHERE user_id = $1';
  let params = [user_id];
  client.query(sql, params, (err, res2) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res2.rows);
      res.send(Object.values(res2.rows));
    }
  });
});

module.exports = router;