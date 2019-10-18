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
    client.query('SELECT * FROM articles', (err, res2) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res2.rows);
            res.send(Object.values(res2.rows));
        }
    });
});

router.get('/:articleId', (req, res) => {
    let id = parseInt(req.params.articleId);
    client.query(`SELECT * FROM articles WHERE article_id=${id}`, (err, res2) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res2.rows);
            res.send(Object.values(res2.rows))
        }
    });
});

router.get('/user/:userId', (req, res) => {
    let user_id = parseInt(req.params.userId);
    client.query(`SELECT * FROM articles WHERE user_id=${user_id}`, (err, res2) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res2.rows);
            res.send(Object.values(res2.rows))
        }
    });
});

router.post('/', (req, res) => {
    let title = req.body.title;
    let url = req.body.url;
    let user_id = req.body.user_id;
    let add_date = new Date();
    let image_id = req.body.image_id;
    let sql = 'INSERT INTO articles (title, url, user_id, add_date, image_id) VALUES ($1, $2, $3, $4, $5)';
    let params = [ title, url, user_id, add_date, image_id];
    client.query(sql, params, (err, res2) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res2.rows);
            res.send(Object.values(res2.rows));
        }
    });
});
router.put('/', (req, res) => {
    let article_id = req.body.article_id;
    let title = req.body.title;
    let url = req.body.url;
    let edit_date = new Date();
    let image_id = req.body.image_id;
    let user_id = req.body.user_id;
    let sql = 'UPDATE articles SET title = $1,url = $2, edit_date = $3, user_id = $5, image_id = $6 WHERE article_id = $4';
    let params = [title, url, edit_date, user_id, article_id, image_id];
    client.query(sql, params, (err, res2) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res2.rows);
            res.send(Object.values(res2.rows));
        }
    });
});
router.delete('/:articleId', (req, res) => {
    let article_id = req.params.articleId;
    let sql = 'DELETE FROM articles WHERE article_id = $1';
    let params = [article_id];
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