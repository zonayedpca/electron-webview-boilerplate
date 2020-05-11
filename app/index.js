const { app } = require("electron");

const MyBrowserWindow = require("./module/MyBrowserWindow");

let mainWindow;

app.on("ready", () => {
	mainWindow = new MyBrowserWindow({
		height: 600,
		width: 480,
	});
	mainWindow.loadURL("https://js.zonayed.me");
});

app.on("window-all-closed", () => {
	app.quit();
});
