const service = require('../services/movementsService');

function getAll(req, res) {
  const movements = service.getAllMovements();
  res.json(movements);
}

function getById(req, res) {
  const movement = service.getMovementById(req.params.id);
  if (!movement) {
    return res.status(404).json({ error: 'Течение не найдено' });
  }
  res.json(movement);
}

function create(req, res) {
  const newMovement = service.createMovement(req.body);
  res.status(201).json(newMovement);
}

function update(req, res) {
  const updated = service.updateMovement(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ error: 'Течение не найдено' });
  }
  res.json(updated);
}

function remove(req, res) {
  const success = service.deleteMovement(req.params.id);
  if (!success) {
    return res.status(404).json({ error: 'Не удалось удалить' });
  }
  res.status(204).send();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
