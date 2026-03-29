import {app,BrowserWindow} from "electron";
import path from "path"; // for work on windows and linux both
import { isDev } from "./util.js";


// type test  = string;


app.on("ready",()=>{
    const mainWindow = new BrowserWindow({});
    if (isDev()) {
        mainWindow.loadFile(path.join( app.getAppPath() + '/out/index.html'));
    }else{
        mainWindow.loadURL('http://localhost:5123');
    }
});