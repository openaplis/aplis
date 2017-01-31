'use strict'

module.exports = class MainMenu {
    constructor() {
      this.items = []

      var fileMenu = {
        label: "File",
        id: "1",
        submenu: [
          {
            label: "Exit",
            role: "close"
          }
        ]
      }

      this.items.push(fileMenu)
    }
}
