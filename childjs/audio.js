let audio = document.getElementById('audioCtrl')
document.getElementById('ctrl').addEventListener('click', () => {
    // var audio = document.getElementById('audioCtrl')
    console.log("audio", audio)
    if (audio !== null) {
        // 检测播放是否已暂停
        console.log(audio.paused)
    }
    // video.paused在播放器播放时返回false
    if (audio.paused) {
        audio.play()   // 播放
    } else {
        audio.pause()  // 暂停
    }
})
document.getElementById('replay').addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
})
document.getElementById('stop').addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
})

document.getElementById('child').addEventListener('click', sendMessageToParent);
function sendMessageToParent() {
    window.opener.postMessage("这是来自子窗口的消息。");
}