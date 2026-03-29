import { app, BrowserWindow } from "electron";
import path from "path"; // for work on windows and linux both
app.on("ready", () => {
    const mainWindow = new BrowserWindow({});
    mainWindow.loadFile(path.join(app.getAppPath() + '/out/index.html'));
});
