
const path = require('path');
// const { ipcRenderer, webContents } = require('electron')
// const { BrowserWindow } = require("@electron/remote/main").enable(webContents)

document.getElementById('video').addEventListener('click', () => {
    // window.location.href = './child/Video.html'

    let url = path.join("file://", __dirname, "./child/Video.html");
    let videoWin = window.open(url, "Video", 'fullscreen=true');
    console.log("newwin: ", videoWin);
    //     let videoWin = new BrowserWindow({
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
    // win.show()
    // });

    // console.log("Opened!")
    // if (err) {
    //     console.log(err)
    // }
    // videoWin.on('closed', () => {
    //     videoWin = null;
    // });
    // ipcRenderer.send('winVideo', "Open newWindow")
});

document.getElementById('audio').addEventListener('click', () => {
    let url = path.join("file://", __dirname, "./child/Audio.html");
    let audioWin = window.open(url, "Audio", 'fullscreen=true');
    console.log("newwin: ", audioWin);
});

document.getElementById('pictures').addEventListener('click', () => {
    let url = path.join("file://", __dirname, "./child/Pictures.html");
    let pictureWin = window.open(url, "Pictures", 'fullscreen=true');
    console.log("newwin: ", pictureWin);
});


// 创建一个 BrowserWindow 对象，打开一个新的窗口
// function openNewWindow() {
//     // __dirname 代表的是html文件的路径，不是js的路径；E:\gitcode\electron-study\src
//     console.log(__dirname);
//     const modalPath = path.join("file://", __dirname, "./child/Video.html");
//     let win = new BrowserWindow({ width: 400, height: 275 });

//     win.on("resize", updateReply);
//     win.on("move", updateReply);
//     win.on("close", function () {
//         win = null;
//     });
//     win.loadURL(modalPath);
//     win.show();

//     function updateReply() {
//         const manageWindowBtn = document.getElementById("infoContainer");
//         const message = `Size: ${win.getSize()} Position: ${win.getPosition()}`;
//         manageWindowBtn.innerHTML = message;
//     }
// }

// ipcRender.send('exitFullscreen')