const router = require('express').Router();
const user = require('../../controllers/user.controllers');

router.get('/add', (req, res) => {
  user.add(req, res);
});
router.get('/', (req, res) => {
  user.list(req, res);
});
router.get('/:id', (req, res) => {
  user.view(req, res);
});
router.get('/:id/edit', (req, res) => {
  user.edit(req, res);
});

module.exports = router;
