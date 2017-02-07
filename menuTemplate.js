'use strict'
const BrowserWindow = require('electron').BrowserWindow

module.exports = class MainMenu {
    constructor() {
      this.items = []

      var fileMenu = {
        label: 'File',
        id: '1',
        submenu: [
          {
            label: 'Quit',
            role: 'quit'
          },
          {
            label: 'Requisitions',
            click: function () {
              var focusedWindow = BrowserWindow.getFocusedWindow()
              focusedWindow.loadURL("file://" + __dirname + "/requisitions.html")
            }
          }
        ]
      }

      this.items.push(fileMenu)
    }
}
