# 🎓 IELTS Preparation Platform

A fully functional web application for IELTS CDI exam preparation with an admin panel for uploading materials and audio files.

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

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Server**
   ```bash
   npm start
   ```

3. **Access the Application**
   - **Homepage:** http://localhost:3000
   - **Admin Panel:** http://localhost:3000/admin-panel.html
   - **Listening:** http://localhost:3000/listening.html
   - **Reading:** http://localhost:3000/reading.html
   - **Writing:** http://localhost:3000/writing.html
   - **Speaking:** http://localhost:3000/speaking.html

## Admin Panel Usage

### Login
1. Go to: http://localhost:3000/admin-panel.html
2. Enter code: **2010**
3. Click Login

### Upload Materials

**Listening Module (Audio Files)**
1. Click on the **Listening** tab
2. Enter a title
3. Select an audio file (.mp3, .wav, .ogg)
4. Click **Upload Audio**

**Reading/Writing/Speaking (HTML Files)**
1. Click on the module tab
2. Enter a title
3. Select an HTML file
4. Click **Upload Material**

## Technology Stack

- **Backend:** Node.js + Express.js
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **File Handling:** Multer middleware
- **Storage:** In-memory (session-based)

## API Endpoints

- `POST /api/admin/login` - Admin authentication
- `POST /api/upload/:module` - Upload material
- `GET /api/materials/:module` - Get all materials
- `GET /api/file/:module/:id` - Download/view file
- `DELETE /api/materials/:module/:id` - Delete material

## Troubleshooting

**npm: command not found**
→ Install Node.js from nodejs.org

**Port 3000 already in use**
→ Edit server.js: Change PORT = 3000 to PORT = 3001

**Admin code doesn't work**
→ Code is: 2010 (check for spaces)

**File upload fails**
→ Check file size, format, and title field

For more help, see SETUP_GUIDE.txt
