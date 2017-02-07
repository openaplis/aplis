"use strict"

const fs = require('fs')
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain;
const dialog = electron.dialog;
const MenuTemplate = require('./menuTemplate.js')

let mainWindow = null;

electron.app.on('browser-window-created',function(e,window) {
      window.setMenu(null);
});

app.on( "window-all-closed", function() {
    if ( process.platform !== "darwin" ) {
        app.quit()
    }
})

app.on( "ready", function() {
    mainWindow = new BrowserWindow( { width: 1500, height: 1000, center: true, title: 'Open LIS' } )
    mainWindow.loadURL( "file://" + __dirname + "/index.html" )
    mainWindow.webContents.openDevTools();
    mainWindow.on( "closed", function() {
        mainWindow = null
    })
})

/*
ipc.on( "show-dialog", function( e, arg ) {
    let msgInfo = {
        title: "What's up",
        message: arg.message,
        buttons: [ "OK" ]
    }
    dialog.showMessageBox(msgInfo)
})

ipc.on('async', (event, arg) => {
    console.log(arg)
    event.sender.send('async-reply', 2)
})

ipc.on('sync', (event, arg) => {
    console.log(arg)
    event.returnValue = 4
    mainWindow.webContents.send('ping', 5)
})

exports.pong = arg => {
    console.log(arg)
}
*/
