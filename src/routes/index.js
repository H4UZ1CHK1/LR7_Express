const philosophersController = require('../controllers/philosophersController');
const movementsController = require('../controllers/movementsController');

function setupRoutes(app) {
  app.get('/philosophers', philosophersController.getAll);
  app.get('/philosophers/:id', philosophersController.getById);
  app.post('/philosophers', philosophersController.create);
  app.put('/philosophers/:id', philosophersController.update);
  app.delete('/philosophers/:id', philosophersController.remove);

  app.get('/movements', movementsController.getAll);
  app.get('/movements/:id', movementsController.getById);
  app.post('/movements', movementsController.create);
  app.put('/movements/:id', movementsController.update);
  app.delete('/movements/:id', movementsController.remove);
}

module.exports = setupRoutes;
