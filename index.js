const {app} = require('electron')
const {BrowserWindow} = require('electron')

app.on('ready', function() {
	var mainWindow = new BrowserWindow({
		width: 1000,
		height: 700,
		title: 'MyApp' })

		mainWindow.setMenuBarVisibility(false);
		//mainWindow.toggleDevTools();
		mainWindow.loadURL('file://' + __dirname + '/index.html')
	})﻿
