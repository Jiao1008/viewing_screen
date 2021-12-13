const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron')
// const path = require('path')
// const { electron } = require('electron');

let win;
function createWindow() {
    win = new BrowserWindow({
        // width: 800,
        // height: 600,
        fullscreen: true,
        fullscreenable: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: true,
            // preload: path.join(__dirname, './preload.js')
        }
    })

    // win.minimizable(false)
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
    // require('@electron/remote/main').initialize()

    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

// ipcMain.on('winVideo', (event, err) => {
// let videoWin = new BrowserWindow({
//     parent: win,
//     // frame: false,
//     webPreferences: {
//         nodeIntegration: true,
//         contextIsolation: false,
//         webSecurity: true,
//     }
// })

// videoWin.setFullScreen(true)
// videoWin.show()
// videoWin.loadFile('./child/Video.html');

// videoWin.on('closed', () => {
//     videoWin = null;
//     // win.show()
// });

// // console.log("Opened!")
// if (err) {
//     console.log(err)
// }
// exitFullscreen(videoWin)
// })

// ipcMain.on('closewin', () => {
//     console.log("Exited successfully!")
//     // videoWin.destroy()
// })


// ipcMain.on('exitFullscreen', exitFullscreen)


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
// require('./childjs/video')