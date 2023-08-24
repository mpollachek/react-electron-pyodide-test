const { app, BrowserWindow } = require('electron')
const path = require('path');
const url = require('url');

//require('@electron/remote/main').initialize()

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        enableRemoteModule:true
    }
  })

//   win.loadURL(url.format({
//     pathname: path.join(__dirname, 'index.html'),
//     protocol: 'file:',
//     slashes: true
//   }));

    win.loadURL('http://localhost:3000')

}

//app.on('ready', createWindow)

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) createWindow()
//   })