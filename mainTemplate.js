"use strict"

const fs = require('fs')
const electron = require('electron')
const app = electron.app
const Menu = electron.Menu
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain;
const dialog = electron.dialog;
const MenuTemplate = require('./menuTemplate.js')

let mainWindow = null;

const menuTemplate = new MenuTemplate();
const menu = Menu.buildFromTemplate(menuTemplate.items)
Menu.setApplicationMenu(menu)

app.on( "window-all-closed", function() {
    if ( process.platform !== "darwin" ) {
        app.quit()
    }
})

app.on( "ready", function() {
    mainWindow = new BrowserWindow( { width: 800, height: 600, center: true, title: 'Open LIS' } );
    mainWindow.loadURL( "file://" + __dirname + "/index.html" );
    //mainWindow.webContents.openDevTools();
    mainWindow.on( "closed", function() {
        mainWindow = null
    })
})

ipc.on( "show-dialog", function( e, arg ) {
    let msgInfo = {
        title: "What's up",
        message: arg.message,
        buttons: [ "OK" ]
    }
    dialog.showMessageBox(msgInfo)
})
