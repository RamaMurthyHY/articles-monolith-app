const router = require('express').Router();
const user = require('../../controllers/user.controllers');

router.get('/', (req, res) => {
  user.getAll(req, res);
});
router.get('/:id', (req, res) => {
  user.getById(req, res);
});
router.post('/create', (req, res) => {
  user.create(req, res);
});
router.post('/:id/updateForm', (req, res) => {
  user.updateFormData(req, res);
});
router.put('/:id', (req, res) => {
  user.update(req, res);
});
router.patch('/:id', (req, res) => {
  user.updateOne(req, res);
});
router.delete('/:id', (req, res) => {
  user.remove(req, res);
});

module.exports = router;
