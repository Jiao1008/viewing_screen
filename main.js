const { app, BrowserWindow, globalShortcut, dialog } = require('electron');
const { type } = require('os');
const path = require('path');
const { title } = require('process');

let win;
function createWindow() {
    win = new BrowserWindow({
        useContentSize: true,
        skipTaskbar: true,
        autoHideMenuBar: true,
        backgroundColor: '#F1F1F1',
        titleBarStyle: 'hidden',
        // icon: './assets/64*64.png',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: true,
        }
    })

    // if(process.platform === 'darwin'){
    //     app.dock.setIcon(path.join(__dirname, './assets/64*64.ico'))
    // }

    win.setFullScreen(true)
    // 退出全屏
    exitFullscreen(win)
    win.webContents.openDevTools();
    win.loadFile('index.html');
    win.once('ready-to-show',()=>{
        win.show()
    })

    console.log("窗口进入全屏了吗？", win.isFullScreen())

    // win.on('enter-full-screen',()=>{
    //     console.log('The window had been enter full screen!')
    // })

    // win.on('leave-full-screen',()=>{
    //     console.log('The window had been leave full screen!')
    // })

    win.on('closed', () => {
        win = null;
    });
    // 监听窗口关闭事件
    win.on('close',(e)=>{
        e.preventDefault()
        dialog.showMessageBox(win, {
            title: "提示",
            message: '确定要关闭应用程序吗？',
            type: 'warning',
            buttons: ['确定','取消'],
        }).then((resolve)=>{
            if(resolve.response === 0){
                app.exit()
            }
            console.log(resolve)
        })
    })

    
}
    

app.whenReady().then(() => {
    createWindow()

    dialog.showMessageBox(win, {
        type: 'info',
        title: '提示',
        message: '你可以按下Esc键小化该窗口。',
        buttons: ['我知道了'],
    })

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
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
    console.log("快捷键是否注册成功？", globalShortcut.isRegistered('ESC'))
}