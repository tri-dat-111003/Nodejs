const mygroupModel = require('../models/mygroup');

// Controller xử lý GET /
const getAll = (req, res) => {
  const mygroup = mygroupModel.getAll();
  res.json(mygroup);
};

// Controller xử lý POST và GET /<MSSV>/<id>
const addMember = (req, res) => {
  const { MSSV, id } = req.params;
  const newItem = req.body;

  if (MSSV === '21110162' && !mygroupModel.exists(id) && newItem.MSSV === id) {
    mygroupModel.add(newItem);
    res.json(newItem);
  } else {
    res.status(400).send('Not valid');
  }
};

const getMember = (req, res) => {
  const { id } = req.params;
  const student = mygroupModel.get(id);

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: 'not valid' });
  }
};

// Controller xử lý GET /message/<id>
const message = (req, res) => {
  const { id } = req.params;

  if (id) {
    const student = mygroupModel.get(id);
    if (student) {
      res.setHeader('Content-Type', 'text/html; charset=UTF-8');
      res.send(`<html><body><ul><li>${student.name}</li></ul></body></html>`);
    } else {
      res.setHeader('Content-Type', 'text/plain');
      res.status(404).send('Not valid');
    }
  } else {
    const students = mygroupModel.getAll();
    const studentNames = students.map(student => student.name);
    res.send(`<html><body><ul><li>${studentNames.join('</li><li>')}</li></ul></body></html>`);
  }
};

module.exports = {
  getAll,
  addMember,
  getMember,
  message,
};
