const { app, BrowserWindow } = require("electron");

let mainWindow;

app.on("ready", () => {
	mainWindow = new BrowserWindow({
		height: 600,
		width: 480,
	});
	mainWindow.loadURL("https://zonayed.me");
});

app.on("window-all-closed", () => {
	app.quit();
});
