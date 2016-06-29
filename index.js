const {app} = require('electron')
const {BrowserWindow} = require('electron')

app.on('ready', function() {
	var mainWindow = new BrowserWindow({
		width: 1200,
		height: 675,
		title: 'MyApp' })

		mainWindow.setMenuBarVisibility(true);
		//mainWindow.toggleDevTools();
		mainWindow.loadURL('file://' + __dirname + '/index.html')
	})﻿
