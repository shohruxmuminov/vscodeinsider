# 🎓 IELTS Preparation Platform

A fully functional web application for IELTS CDI exam preparation with admin panel for uploading test materials and audio files.

## Features

✅ **Four IELTS Modules:**
- 🔊 **Listening** - Audio practice with uploaded materials
- 📖 **Reading** - HTML reading materials and tests
- ✍️ **Writing** - Writing tips and materials
- 🎤 **Speaking** - Speaking tips and guidance

✅ **Admin Panel:**
- 🔐 Secure access with PIN code (2010)
- 📤 Upload HTML materials for all modules
- 🎵 Upload audio files for listening practice
- 📋 Manage uploaded materials
- 🗑️ Delete materials as needed

✅ **Student Interface:**
- 📚 Access all uploaded materials
- 🎧 Built-in audio player for listening
- 🎨 Responsive design for all devices
- ⚡ Fast and smooth performance

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Setup Steps

1. Install Dependencies
   ```bash
   npm install
   ```

2. Start the Server
   ```bash
   npm start
   ```

3. Access the Application
   - Homepage: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin-panel.html
   - Listening: http://localhost:3000/listening.html
   - Reading: http://localhost:3000/reading.html
   - Writing: http://localhost:3000/writing.html
   - Speaking: http://localhost:3000/speaking.html

## Admin Panel Usage

### Login
1. Go to: http://localhost:3000/admin-panel.html
2. Enter code: **2010**
3. Click Login

### Upload Materials

**Listening Module (Audio Files)**
1. Click Listening tab
2. Enter title
3. Select audio file
4. Click Upload Audio

**Reading/Writing/Speaking (HTML Files)**
1. Click module tab
2. Enter title
3. Select HTML file
4. Click Upload Material

## Technology Stack

- Express.js (web framework)
- Multer (file uploads)
- Vanilla JavaScript (frontend)
- HTML5 & CSS3 (UI)
- Node.js (runtime)

## API Endpoints

- `POST /api/admin/login` - Admin authentication
- `POST /api/upload/:module` - Upload material
- `GET /api/materials/:module` - Get all materials
- `GET /api/file/:module/:id` - Download/view file
- `DELETE /api/materials/:module/:id` - Delete material

## Future Enhancements

- Database integration
- User authentication
- Progress tracking
- Quiz functionality
- Video support
- Mobile app

## Support

For issues, check browser console (F12) for error messages.
