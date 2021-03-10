const router = require('express').Router();

const userRouter = require('./users/users.router');
const userViewRouter = require('./users/users.view.router');

router.use('/api/users', userRouter);

router.use('/users', userViewRouter);

module.exports = router;
