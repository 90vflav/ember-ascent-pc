const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 1280,
    height: 760,
    backgroundColor: '#0b1220',
    autoHideMenuBar: true,
    title: 'Ember Ascent',
    webPreferences: { backgroundThrottling: false }
  });
  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
