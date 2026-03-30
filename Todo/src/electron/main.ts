import { app, BrowserWindow } from 'electron';
import path from 'path';
import { isDev } from './util.js'; 
import { startServer } from "./server.js";

app.on("ready", async () => {
     await startServer();
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            contextIsolation: true,
        },
    });
    if (isDev()) {
        mainWindow.loadURL('http://localhost:5123'); // true
    } else {
        mainWindow.loadFile(path.join(app.getAppPath() + '/out/index.html')); // false
    }
})