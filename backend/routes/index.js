import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/api/users', (req, res, next) => {
    res.json([{ title: 'User info here! Wow! Yum!' }]);
});

export default router;
