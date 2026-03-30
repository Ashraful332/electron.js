import { app, BrowserWindow } from 'electron';
import path from 'path';
import { isDev } from './util.js';
app.on("ready", () => {
    const mainWindow = new BrowserWindow();
    if (isDev()) {
        mainWindow.loadFile(path.join(app.getAppPath() + '/out/index.html'));
    }
    else {
        mainWindow.loadURL('http://localhost:5123');
    }
});
