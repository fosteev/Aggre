$('.menu .item').tab();
$('#add-btn').click(() => {
    const {BrowserWindow} = require('electron').remote
    const path = require('path')

    const modalPath = path.join('file://', __dirname, '../sections/windows/modal.html')
    let win = new BrowserWindow({ width: 600, height: 500,  modal: true })

    win.on('close', () => { win = null })
    win.loadURL(modalPath)
    win.show()
})