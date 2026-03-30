import { app, BrowserWindow } from 'electron';
import path from 'path';
import { isDev } from './util.js'; // is dev is not working
app.on("ready", () => {
    const mainWindow = new BrowserWindow();
    if (isDev()) {
        mainWindow.loadURL('http://localhost:5123'); // true
    }
    else {
        mainWindow.loadFile(path.join(app.getAppPath() + '/out/index.html')); // false
    }
});
