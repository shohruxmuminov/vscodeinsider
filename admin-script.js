function verifyCode() {
    const code = document.getElementById('admin-code').value;
    
    fetch('/api/admin/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: code })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('admin-panel').style.display = 'block';
            loadAllMaterials();
        } else {
            document.getElementById('error-msg').textContent = 'Invalid code. Try again.';
            document.getElementById('admin-code').value = '';
        }
    })
    .catch(error => {
        document.getElementById('error-msg').textContent = 'Error verifying code.';
    });
}

function logout() {
    document.getElementById('login-container').style.display = 'flex';
    document.getElementById('admin-panel').style.display = 'none';
    document.getElementById('admin-code').value = '';
    document.getElementById('error-msg').textContent = '';
}

function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabName + '-tab').classList.add('active');
    event.target.classList.add('active');
}

async function handleUpload(event, module) {
    event.preventDefault();
    
    const titleInput = document.getElementById(module + '-title');
    const fileInput = document.getElementById(module + '-file');
    const statusMsg = document.getElementById(module + '-status');
    
    const title = titleInput.value;
    const file = fileInput.files[0];
    
    if (!file) {
        statusMsg.textContent = 'Please select a file.';
        statusMsg.className = 'status error';
        return;
    }
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    
    statusMsg.textContent = 'Uploading...';
    statusMsg.className = 'status loading';
    
    try {
        const response = await fetch(`/api/upload/${module}`, {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            statusMsg.textContent = 'Upload successful! ✓';
            statusMsg.className = 'status success';
            titleInput.value = '';
            fileInput.value = '';
            
            setTimeout(() => {
                statusMsg.textContent = '';
                loadMaterials(module);
            }, 2000);
        } else {
            statusMsg.textContent = 'Upload failed: ' + data.message;
            statusMsg.className = 'status error';
        }
    } catch (error) {
        statusMsg.textContent = 'Error uploading file.';
        statusMsg.className = 'status error';
    }
}

async function loadMaterials(module) {
    try {
        const response = await fetch(`/api/materials/${module}`);
        const data = await response.json();
        
        const materialsList = document.getElementById(module + '-materials');
        materialsList.innerHTML = '';
        
        if (!data.success || data.materials.length === 0) {
            materialsList.innerHTML = '<p class="no-materials">No materials uploaded yet.</p>';
            return;
        }
        
        data.materials.forEach(material => {
            const item = document.createElement('div');
            item.className = 'material-item';
            item.innerHTML = `
                <div class="material-info">
                    <h4>${material.title}</h4>
                    <p>${material.filename}</p>
                    <p class="small-text">Uploaded: ${new Date(material.uploadedAt).toLocaleDateString()}</p>
                </div>
                <button class="btn btn-delete" onclick="deleteMaterial('${module}', ${material.id})">Delete</button>
            `;
            materialsList.appendChild(item);
        });
    } catch (error) {
        document.getElementById(module + '-materials').innerHTML = '<p class="error">Error loading materials.</p>';
    }
}

async function deleteMaterial(module, id) {
    if (confirm('Are you sure you want to delete this material?')) {
        try {
            const response = await fetch(`/api/materials/${module}/${id}`, {
                method: 'DELETE'
            });
            
            const data = await response.json();
            
            if (data.success) {
                loadMaterials(module);
            } else {
                alert('Error deleting material.');
            }
        } catch (error) {
            alert('Error deleting material.');
        }
    }
}

function loadAllMaterials() {
    loadMaterials('listening');
    loadMaterials('reading');
    loadMaterials('writing');
    loadMaterials('speaking');
}

document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('admin-code');
    if (codeInput) {
        codeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                verifyCode();
            }
        });
    }
});
