const { ipcRender } = require('electron')


let player = document.getElementById('player')
player.addEventListener('error', () => {
    document.getElementById('player').load()
})

function ctrl() {
    let player = document.getElementById('player')
    // console.log("视频是否暂停：", player.paused)
    if (player.paused) {
        player.play()
    } else {
        player.pause()
    }
}
function mute() {
    let player = document.getElementById('player')
    player.muted = player.muted ? false : true
}

// function exit() {
//     // ipcRender.send('closewin', "I want to exit")
//     console.log("I want to exit")
// }

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