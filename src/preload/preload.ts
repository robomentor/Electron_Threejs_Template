import {clipboard, shell, ipcRenderer} from "electron";

(window as any).ipcRenderer = ipcRenderer;
