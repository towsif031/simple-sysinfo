const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// init win
let win;

function createwindow(){
    // Create browser window
    win = new BrowserWindow({width:400, height:600, icon:__dirname+'/img/simple-sysinfo-icon.png'});

    // Load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // // Open devtools
    // win.webContents.openDevTools();

    // win.on('closed', () => {
    //     win = null;
    // });
}

// Run create windows function
app.on('ready', createwindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});