const { BrowserWindow, shell } = require("electron");

class MyBrowserWindow extends BrowserWindow {
	constructor(config) {
		super(config);
		this.webContents.on("new-window", this.onNewWindow.bind(this));
	}

	onNewWindow(event, url) {
		event.preventDefault();
		shell.openExternal(url);
	}
}

module.exports = MyBrowserWindow;
