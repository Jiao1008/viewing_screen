// setTimeout(() => {
//     alert("当前屏幕宽：" + window.screen.width + ", 当前屏幕高：" + window.screen.height)
// }, 10000)

// let newwidtn = window.screen.width
// let newheight = window.screen.height
// console.log(newwidtn,newheight)

let player = document.getElementById('player')
player.addEventListener('error', () => {
    document.getElementById('player').load()
})

// console.log(player)
// player.width = newwidtn
// player.height = newheight

console.log(player.width, player.height)

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



