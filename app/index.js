const path = require("path");
const { app } = require("electron");

const MyBrowserWindow = require("./module/MyBrowserWindow");

let mainWindow;

app.on("ready", () => {
	mainWindow = new MyBrowserWindow({
		height: 600,
		width: 480,
	});
	const filePath = path.join(__dirname, "..", "client");
	const file = `${filePath}/index.html`;
	mainWindow.loadFile(file);
});

app.on("window-all-closed", () => {
	app.quit();
});
