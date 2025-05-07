const service = require('../services/philosophersService');

function getAll(req, res) {
  const philosophers = service.getAllPhilosophers();
  res.json(philosophers);
}

function getById(req, res) {
  const philosopher = service.getPhilosopherById(req.params.id);
  if (!philosopher) {
    return res.status(404).json({ error: 'Философ не найден' });
  }
  res.json(philosopher);
}

function create(req, res) {
  const newPhilosopher = service.createPhilosopher(req.body);
  res.status(201).json(newPhilosopher);
}

function update(req, res) {
  const updated = service.updatePhilosopher(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ error: 'Философ не найден' });
  }
  res.json(updated);
}

function remove(req, res) {
  const success = service.deletePhilosopher(req.params.id);
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
