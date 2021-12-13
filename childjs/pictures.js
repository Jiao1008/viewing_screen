const electron = require('electron')


// function exit() {
//         ipcRender.send('closewin', "exited")
//     }

window.onload = () => {
    const iframe = document.querySelector('iframe')
    const content = document.querySelector('#content')
    const loadstart = () => {
        content.innerHTML = 'loading...'
    }

    const loadstop = () => {
        content.innerHTML = 'completed'
    }

    iframe.addEventListener('did-start-loading', loadstart)
    iframe.addEventListener('did-stop-loading', loadstop)

}

//根据浏览器大小调整iframe高度
reSetSize();
window.onresize = reSetSize;
function reSetSize() {
    console.log("print style", window.innerWidth, window.innerHeight)
    // window.innerHeight = electron.screen.getPrimaryDisplay().workAreaSize.height;
    // window.innerWidth = electron.screen.getsPrimaryDisplay().workAreaSize.width;
    // windowsHeight;
    let Height = document.getElementById("content").style.height;
    Height = window.innerHeight + "px";
    let Width = document.getElementById("content").style.width;
    Width = window.innerWidth + "px";

    console.log("content:", Height, Width)
}
