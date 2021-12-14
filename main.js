const { app, BrowserWindow, globalShortcut, ipcMain, Menu } = require('electron')
// const path = require('path')

let win;
function createWindow() {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: true,
        }
    })

    win.setFullScreen(true)
    win.webContents.openDevTools();
    win.loadFile('index.html');

    win.on('closed', () => {
        win = null;
    });
    // 退出全屏
    exitFullscreen(win)
}

app.whenReady().then(() => {

    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

ipcMain.on('post', (arg) => {
    console.log("我收到了", arg)
})




app.on('window-all-closed', () => {
    globalShortcut.unregisterAll()
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

function exitFullscreen(obj) {
    const ret = globalShortcut.register('ESC', () => {
        obj.setFullScreen(false)
    })
    if (!ret) {
        console.log('registration failed')
    }
    // 检查快捷键是否注册成功
    console.log(globalShortcut.isRegistered('ESC'))
}