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

// SELECT article_id FROM articles INNER JOIN tags_and_articles ON articles.article_id = tags_and_articles.article_id INNER JOIN tags ON tags.tag_id = tags_and_articles.tag_id

router.get('/', (req, res, next) => {
    client.query('SELECT tags.tag_id, tags.name, ARRAY_AGG(JSONB_BUILD_OBJECT(\'id\', tags_and_articles.article_id, \'title\', articles.title, \'url\', articles.url)) AS articles FROM tags LEFT JOIN tags_and_articles ON tags.tag_id = tags_and_articles.tag_id LEFT JOIN articles on articles.article_id = tags_and_articles.article_id GROUP BY tags.tag_id, tags.name', (err, res2) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res2.rows);
            res.send(Object.values(res2.rows));
        }
    });
});

router.get('/:tagId', (req, res) => {
    let id = parseInt(req.params.tagId);
    client.query(`SELECT * FROM tags WHERE tag_id=${id}`, (err, res2) => {
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
    let sql = 'INSERT INTO tags (name) VALUES ($1) RETURNING *';
    let params = [ name ];
    client.query(sql, params, (err, res2) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log('new tag',res2.rows);
            res.send(res2.rows[0]);
        }
    });
});
router.put('/', (req, res) => {
    let name = req.body.name;
    let tag_id = req.body.user_id;
    let sql = 'UPDATE tags SET name = $1 WHERE tag_id = $5 RETURNING *';
    let params = [name, tag_id];
    client.query(sql, params, (err, res2) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res2.rows);
            res.send(res2.rows[0]);
        }
    });
});
router.delete('/:tagId', (req, res) => {
    let tag_id = req.params.tagId;
    let sql = 'DELETE FROM table tags WHERE tag_id = $1';
    let params = [tag_id];
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