import {app, BrowserWindow, Menu, protocol} from "electron";
import path from "path";
const os = require("os");

app.allowRendererProcessReuse = false;

app.commandLine.appendSwitch("ignore-certificate-errors", "true");

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

require("electron-debug")({showDevTools: false});

require("electron").app.on("ready", () => {
    let installExtension = require("electron-devtools-installer");
    installExtension.default(installExtension.VUEJS_DEVTOOLS).then(() => {}).catch(() => {});
});

protocol.registerSchemesAsPrivileged([{
    scheme: "http",
    privileges: {bypassCSP: true, secure: true, supportFetchAPI: true, corsEnabled: true}
}]);

const web_url = app.isPackaged ? `file://${path.join(__dirname, "../index.html")}` : `http://localhost:3000`;

let socket_service: any = {
    status: false,
    client: []
};

let Window: any = {
    Start: false
}

// 防止重复启动
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
    app.quit();
} else {
    app.on('second-instance', (event: any, commandLine: any, workingDirectory: any) => {
        if (Window.Start) {
            Window.Start.show();
            Window.Start.setAlwaysOnTop(true);
            Window.Start.setAlwaysOnTop(false);
        }
    });
}

const createStart = () => {
    Window.Start = new BrowserWindow({
        frame: true,
        center: true,
        width: 1200,
        height: 700,
        minWidth: 1200,
        minHeight: 700,
        useContentSize: false,
        webPreferences: {
            webviewTag: true,
            webSecurity: false,
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, "../electron/preload.js"),
        },
        fullscreen: os.type() !== "Windows_NT",
        show: false,
        backgroundColor: "#2b2b2b"
    });

    Window.Start.loadURL(web_url).then((r: any) => {});

    Window.Start.webContents.openDevTools({mode:'bottom', activate: false});

    if (os.type() !== "Windows_NT") {
        const template:Array<(Electron.MenuItemConstructorOptions) | (Electron.MenuItem)> = [
            {
                label: "Menu",
                submenu: [
                    {
                        role: "quit",
                        click: function () {
                            app.quit();
                        }
                    }
                ]
            }
        ];
        let menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }else{
        Menu.setApplicationMenu(null);
    }

    Window.Start.on("close", (event: any) => {

    });

    Window.Start.on("ready-to-show", function () {
        Window.Start.maximize();
        Window.Start.show();

    });
};


app.whenReady().then(() => {
    createStart();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0){
            createStart();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
