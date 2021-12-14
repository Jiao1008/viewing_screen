setTimeout(() => {
    alert("当前屏幕宽：" + window.screen.width + ", 当前屏幕高：" + window.screen.height)
}, 10000)


var Video = document.getElementsByTagName('video')
Video.style.width = window.screen.width
Video.style.height = window.screen.height


alert(Video.style.width, Video.style.height)


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





