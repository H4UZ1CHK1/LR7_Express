const { readJson, writeJson } = require('../db/db');
const { v4: uuidv4 } = require('uuid');

const FILE = 'movements.json';

function getAllMovements() {
  return readJson(FILE);
}

function getMovementById(id) {
  const data = readJson(FILE);
  return data.find(m => m.id === id);
}

function createMovement(movement) {
  const data = readJson(FILE);
  const newMovement = { id: uuidv4(), ...movement };
  data.push(newMovement);
  writeJson(FILE, data);
  return newMovement;
}

function updateMovement(id, updatedFields) {
  const data = readJson(FILE);
  const index = data.findIndex(m => m.id === id);
  if (index === -1) return null;

  data[index] = { ...data[index], ...updatedFields };
  writeJson(FILE, data);
  return data[index];
}

function deleteMovement(id) {
  const data = readJson(FILE);
  const newData = data.filter(m => m.id !== id);
  if (data.length === newData.length) return false;
  writeJson(FILE, newData);
  return true;
}

module.exports = {
  getAllMovements,
  getMovementById,
  createMovement,
  updateMovement,
  deleteMovement
};
