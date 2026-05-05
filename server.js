const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(''));

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// In-memory storage for materials
const materials = {
  listening: [],
  reading: [],
  writing: [],
  speaking: []
};

// Routes

// Admin Authentication
app.post('/api/admin/login', (req, res) => {
  const { code } = req.body;
  if (code === '2010') {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid code' });
  }
});

// Upload materials
app.post('/api/upload/:module', upload.single('file'), (req, res) => {
  const { module } = req.params;
  const { title } = req.body;

  if (!materials[module]) {
    return res.status(400).json({ success: false, message: 'Invalid module' });
  }

  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  const fileData = {
    id: Date.now(),
    title: title || req.file.originalname,
    filename: req.file.originalname,
    mimetype: req.file.mimetype,
    data: req.file.buffer.toString('base64'),
    uploadedAt: new Date()
  };

  materials[module].push(fileData);
  res.json({ success: true, message: 'File uploaded successfully', file: fileData });
});

// Get materials for a module
app.get('/api/materials/:module', (req, res) => {
  const { module } = req.params;

  if (!materials[module]) {
    return res.status(400).json({ success: false, message: 'Invalid module' });
  }

  const moduleMaterials = materials[module].map(item => ({
    id: item.id,
    title: item.title,
    filename: item.filename,
    mimetype: item.mimetype,
    uploadedAt: item.uploadedAt
  }));

  res.json({ success: true, materials: moduleMaterials });
});

// Get file data
app.get('/api/file/:module/:id', (req, res) => {
  const { module, id } = req.params;

  if (!materials[module]) {
    return res.status(400).json({ success: false, message: 'Invalid module' });
  }

  const file = materials[module].find(f => f.id == id);

  if (!file) {
    return res.status(404).json({ success: false, message: 'File not found' });
  }

  const buffer = Buffer.from(file.data, 'base64');
  res.type(file.mimetype);
  res.send(buffer);
});

// Delete material
app.delete('/api/materials/:module/:id', (req, res) => {
  const { module, id } = req.params;

  if (!materials[module]) {
    return res.status(400).json({ success: false, message: 'Invalid module' });
  }

  const index = materials[module].findIndex(f => f.id == id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'File not found' });
  }

  materials[module].splice(index, 1);
  res.json({ success: true, message: 'File deleted successfully' });
});

// Start server
app.listen(PORT, () => {
  console.log(`IELTS Preparation Platform running on http://localhost:${PORT}`);
});
