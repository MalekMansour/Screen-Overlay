const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width } = primaryDisplay.workAreaSize;

    mainWindow = new BrowserWindow({
        width: width, // Full screen width
        height: 20,   // Height of the taskbar
        x: 0,         // Start at top-left
        y: 0,
        alwaysOnTop: true,  // Keep on top of other windows
        frame: false,       // No window frame
        transparent: true,  // Transparent background
        resizable: false,   // Fixed size
        skipTaskbar: true,  // Do not show in taskbar
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true, // Enable Node.js APIs
            contextIsolation: false
        }
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html'));
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
