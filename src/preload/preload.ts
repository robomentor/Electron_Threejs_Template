import Package from "../../package.json";
import {clipboard, shell, ipcRenderer} from "electron";
import os from "os";
const fs = require("fs");
const usb_detection = require("usb-detection");
const serialport = require("serialport");
const delimiter = require("@serialport/parser-delimiter");

(window as any).ipcRenderer = ipcRenderer;
