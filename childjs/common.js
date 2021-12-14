const { remote } = require('electron')

var rightTemplate = [
    {
        label: "退出",
        accelarator: 'ctrl+ESC',
        click: () => {
            window.close()
        }
    }
]

var menu = remote.Menu.buildFromTemplate(rightTemplate)

window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    menu.popup({ window: remote.getCurrentWindow() })
})