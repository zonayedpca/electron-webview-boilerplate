const path = require("path");
const { app } = require("electron");

const MyBrowserWindow = require("./module/MyBrowserWindow");

require("dotenv").config();

const { CLIENT, HEIGHT, WIDTH } = process.env;

const config = {
	client: CLIENT,
	height: HEIGHT || 600,
	width: WIDTH || 480,
};

let mainWindow;

app.on("ready", () => {
	const { client, height, width } = config;
	mainWindow = new MyBrowserWindow({
		height,
		width,
	});
	if (client) {
		mainWindow.loadURL(client);
	} else {
		const filePath = path.join(__dirname, "..", "client");
		const file = `${filePath}/index.html`;
		mainWindow.loadFile(file);
	}
});

app.on("window-all-closed", () => {
	app.quit();
});
