
const path = require('path');
const { BrowserWindow } = require('electron').remote

let videoWin
let audioWin
let picturesWin



document.getElementById('video').addEventListener('click', () => {
    let url = path.join("file://", __dirname, "./child/Video.html");
    videoWin = window.open(url, "Video", 'fullscreen=true, autoHideMenuBar=true');

    // videoWin = new BrowserWindow({
    //     // parent: win,
    //     width: 800,
    //     height: 600,
    //     frame: true,
    //     autoHideMenuBar: true,
    // })
    // // videoWin.setFullScreen(true)
    // videoWin.loadFile('./child/Video.html');

    // videoWin.on('closed', () => {
    //     videoWin = null;
    //     console.log("videoWin closed!!!")
    // });
    console.log("newwin: ", videoWin);
});
document.getElementById('closevideoWin').addEventListener('click', () => {
    videoWin.close()
})


document.getElementById('audio').addEventListener('click', () => {
    let url = path.join("file://", __dirname, "./child/Audio.html");
    audioWin = window.open(url, "Audio", 'fullscreen=true, autoHideMenuBar=true');

    // audioWin = new BrowserWindow({
    //     // parent: win,
    //     width: 800,
    //     height: 600,
    //     frame: true,
    //     autoHideMenuBar: true
    // })
    // // audioWin.setFullScreen(true)
    // audioWin.loadFile('./child/Audio.html');

    // audioWin.on('closed', () => {
    //     audioWin = null;
    //     console.log("audioWin closed!!!")
    // });
    console.log("newwin: ", audioWin);
});
document.getElementById('closeaudioWin').addEventListener('click', () => {
    audioWin.close()
})


document.getElementById('pictures').addEventListener('click', () => {
    let url = path.join("file://", __dirname, "./child/Pictures.html");
    picturesWin = window.open(url, "Pictures", 'fullscreen=true, autoHideMenuBar=true');

    // picturesWin = new BrowserWindow({
    //     // parent: win,
    //     width: 800,
    //     height: 600,
    //     frame: true,
    //     autoHideMenuBar: true
    // })
    // // picturesWin.setFullScreen(true)
    // picturesWin.loadFile('./child/Pictures.html');

    // picturesWin.on('closed', () => {
    //     picturesWin = null;
    //     console.log("picturesWin closed!!!")
    // });
    console.log("newwin: ", picturesWin);
});
document.getElementById('closepicturesWin').addEventListener('click', () => {
    picturesWin.close()
})




