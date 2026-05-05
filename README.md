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

1. **Clone or Download the Project**
   ```bash
   cd "c:\Users\User\Desktop\ieltspro2\vs code"
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

   This will install:
   - Express.js (web framework)
   - Multer (file upload handling)
   - Body-parser (request parsing)

3. **Start the Server**
   ```bash
   npm start
   ```

   Or run the batch file:
   ```bash
   start.bat
   ```

4. **Access the Application**
   - **Homepage:** http://localhost:3000
   - **Admin Panel:** http://localhost:3000/admin-panel.html
   - **Modules:** 
     - Listening: http://localhost:3000/listening.html
     - Reading: http://localhost:3000/reading.html
     - Writing: http://localhost:3000/writing.html
     - Speaking: http://localhost:3000/speaking.html

## Admin Panel Usage

### Login
1. Go to: http://localhost:3000/admin-panel.html
2. Enter the admin code: **2010**
3. Click **Login**

### Upload Materials

#### Listening Module (Audio Files)
1. Click on the **Listening** tab
2. Enter a title (e.g., "Practice Test 1")
3. Select an audio file (.mp3, .wav, .ogg)
4. Click **Upload Audio**
5. Material appears in the list below

#### Reading Module (HTML Files)
1. Click on the **Reading** tab
2. Enter a title (e.g., "Test Material 1")
3. Select an HTML file
4. Click **Upload Material**
5. Students can view by clicking "Open Material"

#### Writing Module (HTML Files)
1. Click on the **Writing** tab
2. Enter a title (e.g., "Writing Tips")
3. Select an HTML file
4. Click **Upload Material**

#### Speaking Module (HTML Files)
1. Click on the **Speaking** tab
2. Enter a title (e.g., "Speaking Guide")
3. Select an HTML file
4. Click **Upload Material**

### Delete Materials
- Click the **Delete** button next to any material
- Confirm deletion in the popup
- Material will be removed from the system

## Student Interface

### Access Modules
1. Go to Homepage: http://localhost:3000
2. Click on any module card to view uploaded materials
3. For listening materials, use the built-in audio player
4. For reading/writing/speaking, click "Open Material" to view HTML files

## File Structure

```
ieltspro2/vs code/
├── server.js              # Express server (handles uploads & APIs)
├── package.json           # Project dependencies
├── start.bat             # Batch file to start the server
├── README.md             # This file
│
├── index.html            # Homepage
├── listening.html        # Listening module page
├── reading.html          # Reading module page
├── writing.html          # Writing module page
├── speaking.html         # Speaking module page
├── admin-panel.html      # Admin login & upload interface
│
├── style.css             # Main stylesheet
├── admin-style.css       # Admin panel styling
├── script.js             # Main JavaScript
└── admin-script.js       # Admin panel JavaScript
```

## API Endpoints

The server provides the following REST APIs:

### Authentication
- `POST /api/admin/login` - Verify admin code
  ```json
  { "code": "2010" }
  ```

### Upload
- `POST /api/upload/:module` - Upload material (requires multipart form)
  - Modules: `listening`, `reading`, `writing`, `speaking`
  - Fields: `title`, `file`

### Retrieve
- `GET /api/materials/:module` - Get all materials for a module
- `GET /api/file/:module/:id` - Download/view a specific file

### Delete
- `DELETE /api/materials/:module/:id` - Delete a material

## Technology Stack

- **Backend:** Node.js + Express.js
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **File Handling:** Multer middleware
- **Storage:** In-memory (session-based, no database)

## Features & Limitations

### Current Implementation
✅ Admin authentication with PIN
✅ File upload (HTML & audio)
✅ File management (list, view, delete)
✅ Audio player for listening
✅ Responsive design
✅ Real-time material loading

### Notes
- Files are stored in memory (cleared when server restarts)
- For production, implement persistent storage (database)
- No user accounts required for students
- All students can access all materials

## Troubleshooting

### Server won't start
- Check if Node.js is installed: `node --version`
- Ensure npm is installed: `npm --version`
- Try deleting `node_modules` and running `npm install` again

### File uploads fail
- Check file size (keep under 100MB)
- Verify file format (HTML, MP3, WAV, OGG for audio)
- Ensure the title field is not empty

### Admin code doesn't work
- Default code is: **2010**
- Check for typos
- Refresh the page and try again

### Audio player doesn't work
- Verify the file is a valid audio format
- Try a different browser (Chrome, Firefox, Edge)
- Check browser console for errors

## Future Enhancements

- Database integration (MongoDB/MySQL)
- User authentication for students
- Progress tracking
- Quiz functionality
- Downloadable materials
- Mobile app version
- Video support
- Real-time updates

## License

This project is open source and available for educational use.

## Support

For issues or questions, check the browser console (F12) for error messages.

---

**Ready to help students prepare for IELTS! 🎯**
