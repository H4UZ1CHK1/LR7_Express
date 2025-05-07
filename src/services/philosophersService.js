const { readJson, writeJson } = require('../db/db');
const { v4: uuidv4 } = require('uuid');

const FILE = 'philosophers.json';

function getAllPhilosophers() {
  return readJson(FILE);
}

function getPhilosopherById(id) {
  const data = readJson(FILE);
  return data.find(p => p.id === id);
}

function createPhilosopher(philosopher) {
  const data = readJson(FILE);
  const newPhilosopher = { id: uuidv4(), ...philosopher };
  data.push(newPhilosopher);
  writeJson(FILE, data);
  return newPhilosopher;
}

function updatePhilosopher(id, updatedFields) {
  const data = readJson(FILE);
  const index = data.findIndex(p => p.id === id);
  if (index === -1) return null;

  data[index] = { ...data[index], ...updatedFields };
  writeJson(FILE, data);
  return data[index];
}

function deletePhilosopher(id) {
  const data = readJson(FILE);
  const newData = data.filter(p => p.id !== id);
  if (data.length === newData.length) return false;
  writeJson(FILE, newData);
  return true;
}

module.exports = {
  getAllPhilosophers,
  getPhilosopherById,
  createPhilosopher,
  updatePhilosopher,
  deletePhilosopher
};
