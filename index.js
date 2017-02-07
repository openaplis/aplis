"use strict"

var {ipcRenderer, remote} = require('electron')
var main = remote.require("./main.js")
var Handlebars = require('handlebars')
var templates = require('./templates/templates.js')
var StartPage = require('./startpage')

document.addEventListener("DOMContentLoaded", function() {
    let version = process.version
    let e = document.getElementById("main")

    var startPage = new StartPage();
    var compiledTemplate = Handlebars.templates['startpage']
    var result = compiledTemplate(startPage.data)
    e.innerHTML = result
})

/*
ipcRenderer.send('async', 1)
*/

/*
ipcRenderer.on('async-reply', (event, arg) => {
    console.log(arg)
    let mainValue = ipcRenderer.sendSync('sync', 3)
    console.log(mainValue)
})
*/

/*
ipcRenderer.on('ping', (event, arg) => {
    console.log(arg)
    main.pong(6)
})
*/

/*
ipcRenderer.on('testing', function () {
    console.log('hello world')
})
*/

/*
document.addEventListener("DOMContentLoaded", function() {
    let version = process.version
    let e = document.getElementById("info")
    e.textContent = "I'm running Node.js version: " + version

    let btn = document.getElementById( "clickme" )
    btn.addEventListener( "click", function() {
      console.log( "I was clicked." )
      ipcRenderer.send( "show-dialog", { message: "The button was clicked" })
    })
})
*/
